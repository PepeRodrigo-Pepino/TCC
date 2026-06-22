import { useEffect, useState } from "react";
import "./Inicio.css";

const Inicio = () => {
  const [slideAtual, setSlideAtual] = useState(0);
  const [menuAberto, setMenuAberto] = useState(false);
  const [mostrarPopup, setMostrarPopup] = useState(false);

  const imagensCarrossel = [
    "/imagem/segunda-guerra.jpg",
    "/imagem/revolucao-francesa.jpg",
    "/imagem/adao.png",
    "/imagem/astronauta-carrossel.jpg",
    "/imagem/filosofia.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideAtual((prev) => (prev + 1) % imagensCarrossel.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const popup = localStorage.getItem("mostrarPopup");

    if (popup === "true") {
      setMostrarPopup(true);
      localStorage.removeItem("mostrarPopup");
    }
  }, []);

  return (
    <>
      <button
        className="menu-toggle"
        onClick={() => setMenuAberto(!menuAberto)}
      >
        ☰
      </button>

      <div className={`sidebar ${menuAberto ? "active" : ""}`}>
        <ul>
          <li>
            <a href="/login">
              <img
                src="/imagem/perfil2.png"
                alt="Perfil"
                style={{ width: "70px" }}
              />
            </a>
          </li>

          <li>
            <a href="/inicio">
              <img
                src="/imagem/casadomine.webp"
                alt="Início"
                style={{ width: "70px" }}
              />
            </a>
          </li>

          <li>
            <a href="/sugestoes">
              <img
                src="/imagem/bussola.png"
                alt="Sugestões"
                style={{ width: "60px" }}
              />
            </a>
          </li>

          <li>
            <a href="/historico">
              <img
                src="/imagem/Livro preto.png"
                alt="Histórico"
                style={{ width: "80px" }}
              />
            </a>
          </li>

          <li>
            <a href="/sobre">
              <img
                src="/imagem/interrogacao.jpg"
                alt="Sobre"
                style={{ width: "30px" }}
              />
            </a>
          </li>
        </ul>
      </div>

      <nav>
        <div>
          <h1>Olá Atena</h1>
          <p>Seja Bem-vindo ao nosso site!</p>
        </div>
      </nav>

      <div className="carrossel">
        <div
          className="slides"
          style={{
            transform: `translateX(-${slideAtual * 100}%)`,
          }}
        >
          {imagensCarrossel.map((imagem, index) => (
            <div className="slide" key={index}>
              <img src={imagem} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <img
        src="/imagem/astronauta.png"
        alt="Astronauta"
        className="astronauta"
      />

      <div className="cards-container">
        <a href="/questionario4" className="card">
          <h3>Exploração Espacial</h3>
          <img
            src="/imagem/Chegada do homem à Lua.png"
            alt="Exploração Espacial"
          />
        </a>

        <a href="/questionario2" className="card">
          <h3>Império Romano</h3>
          <img src="/imagem/juliocesar.jfif" alt="Império Romano" />
        </a>

        <a href="/questionario5" className="card">
          <h3>Segunda Guerra Mundial</h3>
          <img
            src="/imagem/segunda-guerra.jpg"
            alt="Segunda Guerra Mundial"
          />
        </a>
      </div>

      {mostrarPopup && (
        <div id="overlay">
          <div id="popup">
            <div className="popup-content">
              <div className="popup-text">
                <h2>Curiosidade</h2>

                <p>
                  Você sabia que no livro{" "}
                  <strong>
                    "A dupla face da guerra: a FEB pelo olhar de um prisioneiro"
                  </strong>{" "}
                  há o diário de um soldado brasileiro na Segunda Guerra?
                </p>

                <a
                  href="https://www.amazon.com.br/dupla-face-guerra-prisioneiro-Cerezoli/dp/6586255902"
                  target="_blank"
                  rel="noreferrer"
                >
                  Confira aqui
                </a>

                <br />

                <button onClick={() => setMostrarPopup(false)}>
                  Fechar
                </button>
              </div>

              <div className="popup-img-container">
                <img
                  src="/imagem/livro.png"
                  alt="Livro"
                  className="popup-img"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Inicio;