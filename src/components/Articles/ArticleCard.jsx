import Arrow from "../../images/arrows.png";
import "./ArticleCard.css";

function ArticleCard({ bgClass, date, dateSpan, cardTitle, cardText }) {
  return (
    <div className="article-card ">
      <div className={bgClass}>
        <p className="article-date">
          {date} <span>{dateSpan}</span>
        </p>
      </div>
      <div className="article-content">
        <h3>{cardTitle}</h3>
        <p>{cardText}</p>
        <div className="button-place">
          <button>Placiau</button>
          <img className="arrow" src={Arrow} />
        </div>
        <div />
      </div>
    </div>
  );
}

export default ArticleCard;
