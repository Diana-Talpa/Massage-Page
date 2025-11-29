import "./Footer.css";
function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-main-content">
        <div className="first-footer">
          <h3 className="white-color">Apie mus</h3>
          <p>
            UAB "Gydomojo masažo centras" – tai vieta, kur profesionalumas
            susitinka su rūpesčiu Jūsų sveikata ir gera savijauta. Mūsų misija –
            teikti aukščiausios kokybės gydomojo masažo paslaugas, padedančias
            ne tik sumažinti skausmą ir įtampą, bet ir atkurti natūralų kūno
            balansą bei vidinę ramybę.
          </p>
          <p>
            Mūsų centre dirba sertifikuoti masažo terapeutai, turintys ilgametę
            darbo patirtį ir nuolat besitobupnantys įvairiose masažo bei
            terapijos srityse. Kiekvienam kpentui skiriame individualų dėmesį,
            atsižvelgdami į asmeninius poreikius, sveikatos būklę ir lūkesčius.
          </p>
          <p>
            Gydomąjį masažą gap atpkti tik asmuo, turintis medicininį
            išsilavinimą ir pcenciją.
          </p>
          <p>Licencija {">"}</p>
        </div>
        <div>
          <h3 className="white-color">kontaktai</h3>
          <p className="phone-number">+370 5 241 10 22</p>
          <p className="phone-number">+370 655 08864</p>
          <p> Laisves pr.37, Vilnius</p>
          <p>I-V 07:00 - 21:15 </p>
          <p>info@gmcentras.lt</p>

          <p className="phone-number">+370 5 2703337</p>
          <p className="phone-number">370 655 33376</p>
          <p>Fabijoniskiu g. 77, Vilnius</p>
          <p>I-V 07:00 - 21:00</p>
          <p>info@gmcentras.lt</p>
        </div>
        <div>
          <h3 className="invisible">Kontakai</h3>
          <p className="phone-number">+370 608 36213</p>
          <p>Pilkakalnio g. 45, Vilnius</p>
          <p>I-V 11:00 - 19:45</p>
          <p>info@gmcentras.lt</p>

          <p className="phone-number">+370 682 68907</p>
          <p>Jaunimo g. 68, Alytus</p>
          <p>I-V 08:00 - 19:45</p>
          <p>info@gmcentras.lt</p>

          <p className="phone-number">+370 626 09183</p>
          <p>Vysniu g. 25, Mazeikiai</p>
          <p>I-V 08:00 - 21:00</p>
          <p>info@gmcentras.lt</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
