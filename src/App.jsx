
import { useState } from "react";
import "./App.css";
import ProdutoCard from "./ProdutoCard";
import CitySearch from "./CitySearch";

function Header() {
  return (
    <header className="header">
      <div className="header-conteudo">
        <div className="logo">MPE</div>
        <div>
          <h1>Monitoramento de Possíveis Enchentes</h1>
          <p>Informação, prevenção e segurança para Esteio/RS</p>
        </div>
      </div>
      <CitySearch />
    </header>
  );
}

function Card({ titulo, descricao, simbolo }) {
  return (
    <article className="card">
      <span className="simbolo" aria-hidden="true">
        {simbolo}
      </span>
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </article>
  );
}

function MapaEsteio() {
  return (
    <section className="secao mapa">
      <h2>Mapa de Esteio/RS</h2>
      <p>
        Consulte o mapa da região para localizar lugares próximos
        a rios, arroios, valões e áreas que precisam de atenção.
      </p>

      <iframe
        title="Mapa de Esteio, Rio Grande do Sul"
        src="https://maps.google.com/maps?q=Esteio%2C%20Rio%20Grande%20do%20Sul&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"

      />
      
<a
  className="link-mapa"
  href="https://prepara.rs.gov.br/manchas-de-inundacao"
  target="_blank"
  rel="noreferrer"
>
  Consultar mapas oficiais de áreas de inundação no RS ↗
</a>
<br />


      <a
        className="link-mapa"
        href="https://www.google.com/maps/search/?api=1&query=rios+arroios+val%C3%B5es+Esteio+RS"
        target="_blank"
        rel="noreferrer"
      >
        Abrir mapa completo no Google Maps ↗
      </a>
    </section>
  );
}

function FontesOficiais() {
  return (
    <section className="secao fontes">
      <h2>Informações e fontes oficiais</h2>
      <p>
        Consulte os canais oficiais para verificar alertas,
        condições hidrológicas e orientações de prevenção.
      </p>

      <div className="links-oficiais">
        <a
          href="https://climars.rs.gov.br/"
          target="_blank"
          rel="noreferrer"
        >
          ClimaRS — monitoramento climático e hidrológico ↗
        </a>

        <a
          href="https://prepara.rs.gov.br/manchas-de-inundacao"
          target="_blank"
          rel="noreferrer"
        >
          Prepara RS — mapas de áreas de inundação ↗
        </a>

        <a
          href="https://www.esteio.rs.gov.br/"
          target="_blank"
          rel="noreferrer"
        >
          Prefeitura de Esteio ↗
        </a>
      </div>
    </section>
  );
}

function PainelMonitoramento() {
  return (
    <section className="secao painel-monitoramento">
      <h2>Monitoramento de Esteio/RS</h2>

      <p className="painel-intro">
        Consulte fontes oficiais para acompanhar as condições
        meteorológicas, a chuva, os níveis dos rios e os alertas.
      </p>

      <div className="indicadores">
        <article className="indicador">
          <span className="indicador-icone">🌧️</span>
          <h3>Chuva</h3>
          <p className="valor-indisponivel">
            Dados não conectados
          </p>
          <span>Sem medição local disponível neste painel.</span>
        </article>

        <article className="indicador">
          <span className="indicador-icone">🌊</span>
          <h3>Nível dos rios</h3>
          <p className="valor-indisponivel">
            Dados não conectados
          </p>
          <span>Estação próxima de Esteio ainda não confirmada.</span>
        </article>

        <article className="indicador">
          <span className="indicador-icone">🔔</span>
          <h3>Alertas oficiais</h3>
          <p className="valor-indisponivel">
            Consulte a Defesa Civil
          </p>
          <span>O MPE não verifica alertas automaticamente.</span>
        </article>
      </div>

      <div className="aviso-dados">
        <strong>Importante:</strong> este painel ainda não recebe
        dados em tempo real. A ausência de informações aqui não
        significa ausência de risco de enchente.
      </div>

      <div className="links-monitoramento">
        <a
          href="https://climars.rs.gov.br/"
          target="_blank"
          rel="noreferrer"
        >
          Consultar ClimaRS oficial ↗
        </a>

        <a
          href="https://www.defesacivil.rs.gov.br/avisos-e-boletins"
          target="_blank"
          rel="noreferrer"
        >
          Ver avisos e boletins da Defesa Civil ↗
        </a>

        <a
          href="https://sistemas.defesacivil.rs.gov.br/api-redehidrometeorologica"
          target="_blank"
          rel="noreferrer"
        >
          Consultar dados e documentação das estações ↗
        </a>
      </div>
    </section>
  );
}


function Avisos() {
  const [risco, setRisco] = useState("aguardando");

  const avisos = {
    aguardando: {
      titulo: "Aguardando atualização",
      mensagem:
        "O MPE ainda não está conectado a sensores ou a um sistema automático de monitoramento. Consulte as fontes oficiais.",
      classe: "aguardando",
    },
    normal: {
      titulo: "Simulação: sem alerta cadastrado",
      mensagem:
        "Nenhum alerta foi cadastrado nesta simulação. Isso não significa que a região esteja livre de riscos.",
      classe: "normal",
    },
    atencao: {
      titulo: "Simulação: atenção",
      mensagem:
        "Fique atento às chuvas intensas, acompanhe os avisos oficiais e evite locais sujeitos a alagamentos.",
      classe: "atencao",
    },
    perigo: {
      titulo: "Simulação: possível risco de enchente",
      mensagem:
        "Consulte imediatamente os alertas oficiais da Defesa Civil. Evite atravessar áreas alagadas e siga as orientações das autoridades.",
      classe: "perigo",
    },
  };

  const aviso = avisos[risco];

  return (
    <section className="secao avisos">
      <h2>Avisos de enchentes</h2>
      <p>
        Área demonstrativa para mostrar como os avisos do sistema
        poderão aparecer.
      </p>

      <div
        className={`status ${aviso.classe}`}
        role="status"
        aria-live="polite"
      >
        <h3>{aviso.titulo}</h3>
        <p>{aviso.mensagem}</p>
      </div>

      <p className="observacao">
        Atenção: os botões abaixo são apenas simulações escolares.
        Eles não consultam sensores nem identificam riscos reais.
      </p>

      <div className="botoes">
        <button
          type="button"
          onClick={() => setRisco("normal")}
        >
          Simular ausência de alerta
        </button>

        <button
          type="button"
          onClick={() => setRisco("atencao")}
        >
          Simular atenção
        </button>

        <button
          type="button"
          onClick={() => setRisco("perigo")}
        >
          Simular risco
        </button>
      </div>

      <button
        type="button"
        className="botao-secundario"
        onClick={() => setRisco("aguardando")}
      >
        Limpar simulação
      </button>
    </section>
  );
}

function DataAcesso() {
  const dataAtual = new Date().toLocaleDateString("pt-BR");

  return (
    <Card
      simbolo="📅"
      titulo="Data de acesso"
      descricao={`Data atual: ${dataAtual}`}
    />
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>MPE — Monitoramento de Possíveis Enchentes</p>
      <p>Projeto voltado à prevenção e à informação da comunidade de Esteio/RS.</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <section className="introducao">
          <h2>Proteção começa com informação</h2>
          <p>
            O MPE tem como objetivo apoiar o monitoramento de possíveis
            enchentes em Esteio/RS, considerando rios, arroios, valões
            e áreas suscetíveis a alagamentos.
          </p>
        </section>

        <section className="cards" aria-label="Áreas do projeto">
          <Card
            simbolo="🌊"
            titulo="Monitoramento"
            descricao="Acompanhe informações e consulte fontes oficiais sobre condições que podem aumentar o risco de enchentes."
          />

          <Card
            simbolo="🔔"
            titulo="Avisos"
            descricao="Conheça os avisos preventivos e veja uma demonstração de como os alertas poderão ser apresentados."
          />

          <Card
            simbolo="🛡️"
            titulo="Prevenção"
            descricao="Saiba como se preparar para chuvas intensas e como agir diante de possíveis alagamentos."
          />

          <DataAcesso />
        </section>

        <MapaEsteio />
        <PainelMonitoramento />
        <Avisos />
        <FontesOficiais />
        </main>

      <Footer />
    </>
  );
}

export default App;
