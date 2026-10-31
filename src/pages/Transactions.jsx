import TransactionList from "../components/TransactionList.jsx";
import { useBank } from "../context/BankContext.jsx";

export default function Transactions() {
  const { transactions } = useBank();

  return (
    <section>
      <div className="page-heading">
        <p className="eyebrow">ACCOUNT ACTIVITY</p>
        <h1>Transaction history</h1>
        <p className="muted">Review all your deposits and withdrawals.</p>
      </div>
      <section className="section-card transaction-page-card">
        <div className="section-heading">
          <div><h2>All transactions</h2><p className="muted">{transactions.length} transaction(s) recorded</p></div>
          <div className="legend"><span className="legend-in">● Deposit</span><span className="legend-out">● Withdrawal</span></div>
        </div>
        <TransactionList transactions={transactions} />
      </section>
    </section>
  );
}
