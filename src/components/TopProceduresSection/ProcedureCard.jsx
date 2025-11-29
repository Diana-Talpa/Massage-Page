import "./ProcedureCard.css";
function ProcedureCard({
  bgClass,
  discountClass,
  discount,
  price,
  oldPrice,
  courseText,
  onePrice,
  label,
}) {
  return (
    <div className="procedure-card">
      <div className={bgClass}>
        <span className={discountClass}>{discount}</span>
        <div className="procedure-price">
          {price} <span className="old-price">({oldPrice})</span>
          <p>{courseText}</p>
          <span className="one-procedure-price">{onePrice}</span>
        </div>
      </div>
      <p className="under-card">{label}</p>
    </div>
  );
}

export default ProcedureCard;
