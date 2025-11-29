import "./TopProcedureSection.css";
import ProcedureCard from "./ProcedureCard";

function TopProceduresSection() {
  return (
    <div className="procedure-section-wrapper">
      <h2>
        <span>Top</span> Perkamiausi
      </h2>
      <hr />

      <div className="procedure-wrapper">
        <div className="procedure-cards">
          <ProcedureCard
            bgClass="procedure-1"
            discountClass="procedure-discount-1"
            discount="-6.06%"
            price="310.00€"
            oldPrice="330.00€"
            courseText="(10 Proceduru Kursas)"
            onePrice="38.00€(1 procedura)"
            label="Sprando masazas"
          />
          <ProcedureCard
            bgClass="procedure-2"
            discountClass="procedure-discount-2"
            discount="-8.33%"
            price="330.00€"
            oldPrice="360.00€"
            courseText="(10 Proceduru Kursas)"
            onePrice="44.00€(1 procedura)"
            label="Nugaros masazas"
          />
          <ProcedureCard
            bgClass="procedure-3"
            discountClass="procedure-discount-3"
            discount="-8.33%"
            price="825.00€"
            oldPrice="900.00€"
            courseText="(10 Proceduru Kursas)"
            onePrice="105.00€(1 procedura)"
            label="Bendras viso kuno masazas"
          />

          <div className="procedure">
            <div className="gift-coupon">
              <span>
                <b className="grow-text">100€</b>
              </span>
            </div>
            <p>Dovanu kuponas (100€)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopProceduresSection;
