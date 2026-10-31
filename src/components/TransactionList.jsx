import TransactionItem from "./TransactionItem.jsx";

export default function TransactionList({ transactions, limit }) {
  const items = typeof limit === "number" ? transactions.slice(0, limit) : transactions;

  if (items.length === 0) {
    return <div className="empty-state">No transactions yet. Make a deposit or withdrawal to get started.</div>;
  }

  return (
    <div className="transaction-list">
      {items.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}
