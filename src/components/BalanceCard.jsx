export default function BalanceCard({ title, value, note, kind = "" }) {
  return (
    <section className={`balance-card ${kind}`}>
      <p className="card-title">{title}</p>
      <h2>{value}</h2>
      {note && <p className="card-note">{note}</p>}
    </section>
  );
}
