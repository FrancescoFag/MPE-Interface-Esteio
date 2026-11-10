
import AlertaCard from "./AlertaCard";
import PainelClima from "./PainelClima";

function Main() {
  return (
    <main>
      <h2>Monitoramento de Possíveis Enchentes</h2>

      <PainelClima />


      <p>
        Acompanhe informações e alertas sobre possíveis enchentes.
      </p>

      <div className="cards-container">
        <AlertaCard
          cidade="Esteio"
          nivel="Baixo"
          descricao="Situação tranquila."
        />

        
      </div>
    </main>
  );
}

export default Main;
