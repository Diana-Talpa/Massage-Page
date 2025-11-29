import ArticleCard from "./ArticleCard";
import "./Articles.css";

function Articles() {
  return (
    <>
      <div className="articles-wrapper">
        <h2>Straipsniai</h2>

        <hr />

        <div className="article-cards">
          <ArticleCard
            bgClass="card1 card"
            date="22"
            dateSpan="Rugp."
            cardTitle="Masazas"
            cardText="Masazas - itampos mazinimas dirbantiems prie kompiuterio"
          />
          <ArticleCard
            bgClass="card2 card"
            date="22"
            dateSpan="Rugp."
            cardTitle="Masazas"
            cardText="Masazas - itampos mazinimas dirbantiems prie kompiuterio"
          />
          <ArticleCard
            bgClass="card3 card"
            date="22"
            dateSpan="Rugp."
            cardTitle="Masazas"
            cardText="Masazas - itampos mazinimas dirbantiems prie kompiuterio"
          />
        </div>
      </div>
    </>
  );
}
export default Articles;
