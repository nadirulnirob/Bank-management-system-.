import { Link } from "react-router-dom";
import { useBank } from "../context/BankContext.jsx";
import AmountForm from "../components/AmountForm.jsx";

export default function Withdraw() {
  const { balance, withdraw } = useBank();

  return (
    <section className="action-page">
      <div className="page-heading">
        <p className="eyebrow">TAKE OUT MONEY</p>
        <h1>Withdraw money</h1>
        <p className="muted">Withdraw from your simulated savings account.</p>
      </div>
      <div className="action-layout">
        <div className="action-intro withdraw-intro">
          <div className="large-icon">↑</div>
          <h2>Make a withdrawal</h2>
          <p>You cannot withdraw more than the available balance.</p>
          <div className="mini-balance"><span>Available balance</span><strong>৳{balance.toLocaleString("en-BD")}</strong></div>
        </div>
        <div>
          <AmountForm mode="Withdraw" onSubmitAmount={withdraw} />
          <p className="back-link"><Link to="/">← Back to dashboard</Link></p>
        </div>
      </div>
    </section>
  );
}
