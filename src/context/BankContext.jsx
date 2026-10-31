import { createContext, useContext, useEffect, useState } from "react";

const BankContext = createContext(null);

const startingTransactions = [
  {
    id: 1,
    type: "Deposit",
    amount: 2500,
    date: new Date(Date.now() - 86400000).toISOString()
  },
  {
    id: 2,
    type: "Withdrawal",
    amount: 500,
    date: new Date(Date.now() - 43200000).toISOString()
  }
];

function getSavedValue(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

export function BankProvider({ children }) {
  const [balance, setBalance] = useState(() => getSavedValue("greenbank_balance", 12500));
  const [transactions, setTransactions] = useState(() =>
    getSavedValue("greenbank_transactions", startingTransactions)
  );

  useEffect(() => {
    localStorage.setItem("greenbank_balance", JSON.stringify(balance));
  }, [balance]);

  useEffect(() => {
    localStorage.setItem("greenbank_transactions", JSON.stringify(transactions));
  }, [transactions]);

  function addTransaction(type, amount) {
    const transaction = {
      id: Date.now(),
      type,
      amount,
      date: new Date().toISOString()
    };
    setTransactions((oldTransactions) => [transaction, ...oldTransactions]);
  }

  function deposit(amount) {
    setBalance((oldBalance) => oldBalance + amount);
    addTransaction("Deposit", amount);
  }

  function withdraw(amount) {
    if (amount > balance) return false;
    setBalance((oldBalance) => oldBalance - amount);
    addTransaction("Withdrawal", amount);
    return true;
  }

  const totalDeposited = transactions
    .filter((item) => item.type === "Deposit")
    .reduce((sum, item) => sum + item.amount, 0);

  const totalWithdrawn = transactions
    .filter((item) => item.type === "Withdrawal")
    .reduce((sum, item) => sum + item.amount, 0);

  return (
    <BankContext.Provider
      value={{
        balance,
        transactions,
        totalDeposited,
        totalWithdrawn,
        deposit,
        withdraw
      }}
    >
      {children}
    </BankContext.Provider>
  );
}

export function useBank() {
  const context = useContext(BankContext);
  if (!context) throw new Error("useBank must be used inside BankProvider");
  return context;
}
