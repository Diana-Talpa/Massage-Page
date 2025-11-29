import Checked from "../../images/check.png";
import Clients from "../../images/social.png";
import Heart from "../../images/love.png";
import "./About.css";
function About() {
  return (
    <>
      <div className="about-wrapper">
        <div className="element">
          <img src={Checked} />
          <h2>Profesionalumas ir patirtis</h2>
          <p>
            Mūsų masažuotojai – sertifikuoti specialistai, turintys ilgametę
            darbo patirtį ir nuolat tobulinantys žinias, kad suteiktų
            aukščiausio lygio paslaugas.
          </p>
        </div>
        <div className="element">
          <img src={Clients} />
          <h2>Klientas</h2>
          <p>
            Individualus požiūris į kiekvieną klientą. Kiekvieno žmogaus kūnas –
            unikalus. Dirbame taip, kad atsižvelgtume į Jūsų asmeninius
            poreikius ir sveikatos tikslus.
          </p>
        </div>
        <div className="element">
          <img src={Heart} />
          <h2>Rezultatai</h2>
          <p>
            Tikri rezultatai – jau po pirmo vizito. Mes siekiame ne tik
            atpalaiduoti, bet ir spręsti kūno problemas. Daugelis klientų
            pajunta pastebimą savijautos pagerėjimą jau po pirmos procedūros.
          </p>
        </div>
      </div>
    </>
  );
}
export default About;
