import { useState } from "react";
import "./SelectForm.css";

function SelectForm() {
  const [showSuccess, setShowSuccess] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [procedure, setProcedure] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);

    setName("");
    setPhone("");
    setProcedure("");
    setMessage("");
  }

  return (
    <div className="select-form-container">
      {showSuccess && (
        <div className="success-popup">Forma sėkmingai išsiųsta! 🎉</div>
      )}

      <form className="appear-delay" onSubmit={handleSubmit}>
        <label className="form-title">Registruokitės</label>
        <p className="form-subtitle">
          Užpildykite registracijos formą ir mes su Jumis susisieksime
        </p>

        <input
          type="text"
          placeholder="Vardas"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Telefono nr."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <select
          value={procedure}
          onChange={(e) => setProcedure(e.target.value)}
        >
          <option value="">Pasirinkite procedūrą</option>
          <option>Anti celiulitinio masažo kompleksas</option>
          <option>Anti celiulitinis masažas</option>
          <option>Nugaros masažas</option>
        </select>

        <textarea
          placeholder="Žinutė"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">Pateikti</button>
      </form>
    </div>
  );
}

export default SelectForm;
