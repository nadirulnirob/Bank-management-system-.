export default function TransactionItem({ transaction }) {
  const isDeposit = transaction.type === "Deposit";
  const date = new Date(transaction.date).toLocaleString();

  return (
    <div className="transaction-row">
      <div className={`transaction-symbol ${isDeposit ? "deposit-symbol" : "withdraw-symbol"}`}>
        {isDeposit ? "↓" : "↑"}
      </div>
      <div className="transaction-info">
        <strong>{transaction.type}</strong>
        <span>{date}</span>
      </div>
      <strong className={isDeposit ? "money-in" : "money-out"}>
        {isDeposit ? "+" : "−"}৳{transaction.amount.toLocaleString("en-BD")}
      </strong>
    </div>
  );
}
