export function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  return (
    <div style={{ backgroundColor: bgColor, color: color }}>
      <p>{type}</p>
      <p>{number}</p>
      <p>
        Exprires {expirationMonth}/{expirationYear} {bank}
      </p>
      <p>{owner}</p>
    </div>
  );
}
