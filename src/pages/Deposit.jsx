import { Link } from "react-router-dom";
import { useBank } from "../context/BankContext.jsx";
import AmountForm from "../components/AmountForm.jsx";

export default function Deposit() {
  const { balance, deposit } = useBank();

  return (
    <section className="action-page">
      <div className="page-heading">
        <p className="eyebrow">ADD MONEY</p>
        <h1>Deposit money</h1>
        <p className="muted">Add money to your simulated savings account.</p>
      </div>
      <div className="action-layout">
        <div className="action-intro deposit-intro">
          <div className="large-icon">↓</div>
          <h2>Make a deposit</h2>
          <p>Your balance will update immediately after a successful deposit.</p>
          <div className="mini-balance"><span>Current balance</span><strong>৳{balance.toLocaleString("en-BD")}</strong></div>
        </div>
        <div>
          <AmountForm mode="Deposit" onSubmitAmount={(amount) => { deposit(amount); }} />
          <p className="back-link"><Link to="/">← Back to dashboard</Link></p>
        </div>
      </div>
    </section>
  );
}
