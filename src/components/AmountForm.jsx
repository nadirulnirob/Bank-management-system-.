import { useEffect, useRef, useState } from "react";

export default function AmountForm({ mode, onSubmitAmount }) {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });
  const inputRef = useRef(null);
  const isDeposit = mode === "Deposit";

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const value = Number(amount);

    if (!amount.trim() || !Number.isFinite(value) || value <= 0) {
      setMessage({ text: "Please enter an amount greater than zero.", type: "error" });
      return;
    }

    const result = onSubmitAmount(value);
    if (result === false) {
      setMessage({ text: "Insufficient balance. Please enter a smaller amount.", type: "error" });
      return;
    }

    setAmount("");
    setMessage({
      text: `৳${value.toLocaleString("en-BD")} ${isDeposit ? "deposited" : "withdrawn"} successfully!`,
      type: "success"
    });
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <label htmlFor="amount">Amount (BDT)</label>
      <div className="amount-input-wrap">
        <span>৳</span>
        <input
          ref={inputRef}
          id="amount"
          type="number"
          min="0.01"
          step="0.01"
          inputMode="decimal"
          placeholder="Enter amount"
          value={amount}
          onChange={(event) => {
            setAmount(event.target.value);
            setMessage({ text: "", type: "" });
          }}
        />
      </div>
      <p className="form-help">Enter an amount greater than ৳0.</p>
      <button className={`primary-button ${isDeposit ? "" : "withdraw-button"}`} type="submit">
        {isDeposit ? "Deposit Money" : "Withdraw Money"}
      </button>
      {message.text && <p role="status" className={`message ${message.type}`}>{message.text}</p>}
    </form>
  );
}
