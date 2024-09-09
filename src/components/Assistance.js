import React, { useState } from 'react'
import './Assistance.css'

const Assistance = () => {
  const [sending, setSending] = useState(false);
  const toggleSending = () => {
    setSending(!sending);
  };
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  var n = 0;
  var guests = urlParams.get("G");

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyEavpG7r9g0bhU1VKcrtPB8nt7colh8-pu44v9-ZVW-KBMunPET3VdWnpHLdp_xqHU/exec";

  function Submit(e) {
    toggleSending();
    const form = document.querySelector("form");
    e.preventDefault();
    const fData = new FormData(form);
    fetch(scriptURL, { method: "POST", body: fData })
      .then((response) => alert("¡Gracias por su confirmación!"))
      .then(() => {
        window.location.reload();
      })
      .catch((error) => console.error("Error!", error.message));
  }

  if (!guests) guests = urlParams.get("g");

  function guests_no(g) {
    if (g === 0) {
      document.getElementById("guest_number").style.display = "none";
      document.getElementById("guest_dropdown")?.removeAttribute("required");
    } else {
      document.getElementById("guest_number").style.display = "block";
      document
        .getElementById("guest_dropdown")
        ?.setAttribute("required", "true");
      if (n === 1) return;
      else dropdown();
    }
    return;
  }

  function dropdown() {
    const g_dropdown = document.getElementById("guest_dropdown");
    for (var i = 1; i <= +guests; i++) {
      g_dropdown.innerHTML += `<option value=${i}>${i}</option>`;
    }
    n++;
  }

  return (
    <>
      <section className='assistance section-1' id='Assistance'>
        <div className='xv-container'>
          <div className='title'>Confirmar Asistencia</div>
          <div className="sec-content">
            <p className="reserved">
              Hemos reservado <b>{guests}</b> lugares en tu honor.
            </p>
            <form
              className="assistance-form"
              name="assistance-info"
              id="assistance-info"
              onSubmit={(e) => Submit(e)}
            >
              <label htmlFor="">Nombre completo:</label>
              <input type="text" name="Nombre" id="name" required />
              <div className="m-top-3"></div>
              <div className='spacer' />
              <label>¿Asistirá?</label>
              <ul className="m-top-1">
                <li>
                  <label htmlFor="yes" className="radio">
                    <input
                      type="radio"
                      name="Asistencia"
                      id="yes"
                      className="radio__input"
                      value="Si"
                      onClick={() => guests_no(1)}
                      required
                    />
                    <div className="radio__radio"></div>
                    <span>Sí, asistiré.</span>
                  </label>
                </li>
                <li>
                  <label htmlFor="no" className="radio">
                    <input
                      type="radio"
                      name="Asistencia"
                      id="no"
                      className="radio__input"
                      onClick={() => guests_no(0)}
                      value="No"
                    />
                    <div className="radio__radio"></div>
                    <span>Lo siento, no podré asistir.</span>
                  </label>
                </li>
              </ul>
              <label
                htmlFor="guest_dropdown"
                id="guest_number"
                className="m-top-3"
              >
                Favor de confirmar la cantidad de pases que requiere
                <select
                  id="guest_dropdown"
                  name="No_Asistentes"
                  className="m-top-1"
                >
                  <option value="">Seleccionar</option>
                </select>
                <div className='spacer' />
              </label>
              <label htmlFor="mensaje" className="m-top-3">
                Mensaje para la quinceañera:
              </label>
              <textarea name="Mensaje" id="mensaje"></textarea>
              <button
                id="submit_button"
                className={`submit_button ${sending ? "sending" : ""}`}
                type="submit"
                disabled={sending}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 300 300"
                  width="25px"
                >
                  <path d="m267.06,164.91c-7.41,58.76-58.02,104.07-119.02,103.08-63.44-1.03-115.13-52.85-116.02-116.29-.93-65.95,52.25-119.7,117.99-119.7,17.03,0,33.22,3.61,47.85,10.11,6.11,2.71,13.28.82,17.12-4.65l.19-.26c6.29-8.94,2.73-21.43-7.35-25.65C189.81,4.03,170.04-.09,149.29,0,67.46.38.55,67.15,0,148.98c-.55,83.31,66.81,151.02,150,151.02,76.37,0,139.39-57.07,148.78-130.88,1.23-9.63-6.4-18.12-16.11-18.12h0c-7.98,0-14.62,5.99-15.62,13.91Z" />
                </svg>
                {sending ? "Enviando" : "Enviar"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Assistance