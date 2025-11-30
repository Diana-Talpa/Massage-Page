import Location from "../../images/pin-map.png";
import Clock from "../../images/clock.png";
import Mail from "../../images/letter.png";
import Banner from "../../images/Banner3.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <a>
        <img className="banner" src={Banner} />
      </a>
      <div className="footer-main-content">
        <div className="first-footer">
          <h3 className="white-color">Apie mus</h3>
          <ul className="about-list">
            <li>
              UAB "Gydomojo masažo centras" – tai vieta, kur profesionalumas
              susitinka su rūpesčiu Jūsų sveikata ir gera savijauta. Mūsų misija
              – teikti aukščiausios kokybės gydomojo masažo paslaugas,
              padedančias ne tik sumažinti skausmą ir įtampą, bet ir atkurti
              natūralų kūno balansą bei vidinę ramybę.
            </li>
            <li>
              Mūsų centre dirba sertifikuoti masažo terapeutai, turintys
              ilgametę darbo patirtį ir nuolat besitobupnantys įvairiose masažo
              bei terapijos srityse. Kiekvienam kpentui skiriame individualų
              dėmesį, atsižvelgdami į asmeninius poreikius, sveikatos būklę ir
              lūkesčius.
            </li>
            <li>
              Gydomąjį masažą gap atpkti tik asmuo, turintis medicininį
              išsilavinimą ir pcenciją.
            </li>
            <li className="about-license">Licencija {">"}</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="white-color">Kontaktai</h3>

          <ul className="contact-group">
            <li className="phone-number">
              <a className="no-margin" href="tel:+37052411022">
                +370 5 241 10 22
              </a>
            </li>
            <li className="phone-number">
              <a className="margin-bottom" href="tel:+37065508864">
                +370 6 55 08864
              </a>
            </li>
            <li>
              <img src={Location} alt="" /> Laisvės pr. 37, Vilnius
            </li>
            <li>
              <img src={Clock} alt="" /> I–V 07:00 – 21:15
            </li>
            <li>
              <img src={Mail} alt="" /> info@gmcentras.lt
            </li>
          </ul>
          <hr className="contact-divider" />

          <ul className="contact-group ">
            <li className="phone-number">
              <a className="no-margin" href="tel:+37052703337">
                +370 5 2703337
              </a>
            </li>
            <li className="phone-number">
              <a className="margin-bottom" href="tel:+37065533376">
                +370 655 33376
              </a>
            </li>
            <li>
              <img src={Location} alt="" /> Fabijoniškių g. 77, Vilnius
            </li>
            <li>
              <img src={Clock} alt="" /> I–V 07:00 – 21:00
            </li>
            <li>
              <img src={Mail} alt="" /> info@gmcentras.lt
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="invisible">Kontaktai</h3>

          <ul className="contact-group">
            <li className="phone-number">
              <a href="tel:+37060836213">+370 608 36213</a>
            </li>
            <li>
              <img src={Location} alt="" /> Plikakalnio g. 45, Vilnius
            </li>
            <li>
              <img src={Clock} alt="" /> I–V 11:00 – 19:45
            </li>
            <li>
              <img src={Mail} alt="" /> info@gmcentras.lt
            </li>
          </ul>
          <hr className="contact-divider" />

          <ul className="contact-group">
            <li className="phone-number">
              <a href="tel:+37068268907">+370 682 68907</a>
            </li>
            <li>
              <img src={Location} alt="" /> Jaunimo g. 68, Alytus
            </li>
            <li>
              <img src={Clock} alt="" /> I–V 08:00 – 19:45
            </li>
            <li>
              <img src={Mail} alt="" /> info@gmcentras.lt
            </li>
          </ul>
          <hr className="contact-divider" />

          <ul className="contact-group">
            <li className="phone-number">
              <a href="tel:+37062609183">+370 626 09183</a>
            </li>
            <li>
              <img src={Location} alt="" /> Vyšnių g. 25, Mažeikiai
            </li>
            <li>
              <img src={Clock} alt="" /> I–V 08:00 – 21:00
            </li>
            <li>
              <img src={Mail} alt="" /> info@gmcentras.lt
            </li>
          </ul>
        </div>
      </div>
      <div className="second-footer">
        <img className="footer-logo" src="https://gmcentras.lt/img/logo.png" />
        <p>© Copyright 2025. All Rights Reserved </p>
        <ul>
          <li>
            <a href="#">&#62; Kainoraštis</a>
          </li>
          <li>
            <a href="#">&#62; Gydomasis masažas</a>
          </li>
          <li>
            <a href="#">&#62; Kontaktai</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
