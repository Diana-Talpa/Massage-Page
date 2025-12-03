import "./Licencija.css";
import LicencijaImg from "../../images/Licencija.jpg";
function Licencija() {
  return (
    <>
      <div className="licencija-wrapper">
        <div className="licencija-title">
          <ul>
            <li>
              <a>Pagrindinis</a>
            </li>
            <li>{">"} Licencija</li>
          </ul>
          <h1>Gydomojo masazo licencija</h1>
        </div>
        <div className="licencija">
          <img src={LicencijaImg} />
          <a src="#" className="licencija-link">
            Nuoroda i licencija
          </a>
        </div>
        <h2 className="second-title">
          <span>Masazas</span> Vilniuje
        </h2>
        <div className="bottom-section">
          <p>
            Valstybinė akreditavimo sveikatos priežiūros veiklai tarnyba prie
            Sveikatos apsaugos ministerijos suteikia teisę UAB „Gydomojo masažo
            centras“, kodas 300137411, registruotai Laisvės pr. 37, Vilniaus m.,
            Vilniaus m. sav., verstis asmens sveikatos priežiūros veikla ir
            teikti šią asmens sveikatos priežiūros paslaugą adresais:
          </p>
          <ul className="address-list">
            <li>Laisvės pr. 37, Vilniaus m., Vilniaus m. sav.</li>
            <li>Fabijoniškių g. 77-4, Vilniaus m., Vilniaus m. sav</li>
            <li>Jaunimo g. 68-3, Alytaus m., Alytaus m. sav.</li>
            <li>Vyšnių g. 25, Mažeikių m., Mažeikių r. sav.</li>
          </ul>
          <p>
            Įmonė pradėjo savo veiklą 2005 metais. Įmonėje atliekama
            diagnostika, gydomasis ir profilaktinis masažas, taip pat esame
            įsigiję įvairios medicininės įrangos. Individualiai parenkame gydymą
            pagal Jūsų darbo pobūdį ir sveikatą. Masažus atlieka aukštos
            kvalifikacijos diplomuoti medikai - masažuotojai turintys regėjimo
            negalią.
          </p>
          <h3>
            Gydomąjį masažą gali atlikti tik asmuo, turintis medicininį
            išsilavinimą ir licenciją.
          </h3>
          <p>
            Visi mes žinome, kad masažų pagalba galima atsipalaiduoti ir gauti
            malonumą. Bet ne visi žinome apie gydomąjį masažą, kuris padeda nuo
            daugumos ligų. Svarbu, kad gydomąjį masažą atliktų specialistai su
            medicininiu išsilavinimu ir didele patirtimi. Mūsų įmonėje dirba
            regos negalią turintys masažų specialistai ir tik su medicininiu
            išsilavinimu
          </p>
        </div>
      </div>
    </>
  );
}
export default Licencija;
