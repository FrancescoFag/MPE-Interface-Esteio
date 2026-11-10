

function AlertaCard({ cidade, nivel, descricao }) {
  const classeRisco = nivel.toLowerCase();

  return (
    <div className={`alerta-card ${classeRisco}`}>
      <h3>{cidade}</h3>
      <p>Nível de risco: {nivel}</p>
      <p>{descricao}</p>
    </div>
  );
}

export default AlertaCard;
