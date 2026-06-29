import { useState } from "react";
import "./Sobre.css";
import { Link } from "react-router-dom";

const Sobre = () => {
  const [menuAberto, setMenuAberto] = useState(false);

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
            <Link to="/inicio">
            <img
                src="/imagem/casadomine.png"
                alt="Início"
                style={{ width: "70px" }}
            />
            </Link>
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
                src="/imagem/interrogacao.png"
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

      <main className="sobre-container">
        <section className="about-section">
          <h2>Sobre o Projeto PRIT</h2>

          <p>
            O Projeto PRIT é uma plataforma educacional dedicada a oferecer
            conteúdos históricos de forma interativa e acessível. Nosso objetivo
            é conectar pessoas com o passado para entender melhor o presente e
            construir um futuro mais consciente.
          </p>

          <h3>Quem fez</h3>

          <p>
            Este site foi desenvolvido por uma equipe apaixonada por história e
            tecnologia, composta por Atena, Luana, Gabriel, Rodrigo, Mariane e
            Matheus, que uniram esforços para criar essa experiência única para
            os usuários.
          </p>
        </section>
      </main>
    </>
  );
};

export default Sobre;