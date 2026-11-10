
function PainelClima() {
  return (
    <section className="painel-clima">
      <h2>Informações Climáticas</h2>

      <div className="clima-container">
        <div className="clima-card">
          <h3>🌡️ Temperatura</h3>
          <p>25°C</p>
        </div>

        <div className="clima-card">
          <h3>🌧️ Precipitação</h3>
          <p>15 mm</p>
        </div>

        <div className="clima-card">
          <h3>🌊 Nível do Rio</h3>
          <p>2,5 metros</p>
        </div>
      </div>
    </section>
  );
}

export default PainelClima;
