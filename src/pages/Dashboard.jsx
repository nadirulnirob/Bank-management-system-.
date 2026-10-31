import BalanceCard from "../components/BalanceCard.jsx";
import TransactionList from "../components/TransactionList.jsx";
import { useBank } from "../context/BankContext.jsx";

const money = (amount) => `৳${amount.toLocaleString("en-BD", { maximumFractionDigits: 2 })}`;

export default function Dashboard() {
  const { balance, totalDeposited, totalWithdrawn, transactions } = useBank();

  return (
    <>
      <section className="welcome">
        <div>
          <p className="eyebrow">YOUR MONEY, AT A GLANCE</p>
          <h1>Welcome back, Nadir!</h1>
          <p className="muted">Here is a quick overview of your account.</p>
        </div>
        <div className="account-pill"><span className="online-dot" /> Account active</div>
      </section>

      <section className="account-banner">
        <div className="account-avatar">NU</div>
        <div className="account-detail">
          <span>ACCOUNT HOLDER</span>
          <h2>Nadir Ul Nirob</h2>
          <p>Account number: <strong>•••• •••• 4821</strong></p>
        </div>
        <div className="account-type">
          <span>ACCOUNT TYPE</span>
          <strong>Savings Account</strong>
        </div>
      </section>

      <section className="stats-grid">
        <BalanceCard title="Available Balance" value={money(balance)} note="Your current balance" kind="main-balance" />
        <BalanceCard title="Total Deposited" value={money(totalDeposited)} note="All recorded deposits" kind="deposit-card" />
        <BalanceCard title="Total Withdrawn" value={money(totalWithdrawn)} note="All recorded withdrawals" kind="withdraw-card" />
      </section>

      <section className="section-card">
        <div className="section-heading">
          <div><h2>Recent transactions</h2><p className="muted">Your latest account activity</p></div>
          <a href="/transactions" className="text-link">View all →</a>
        </div>
        <TransactionList transactions={transactions} limit={4} />
      </section>
    </>
  );
}
