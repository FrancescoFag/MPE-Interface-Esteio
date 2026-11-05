export default function RainForecast({ previsao }) {
  if (!previsao) {
    return <p>Pesquise uma cidade para ver a previsão.</p>;
  }

  const volumes = previsao.precipitation_sum;
  const maiorChuva = Math.max(
    ...volumes.filter((volume) => volume !== null)
  );

  return (
    <section>
      <h2>Previsão de chuva</h2>

      <div className="previsao-chuva">
        {previsao.time.map((dia, indice) => (
          <div className="card-chuva" key={dia}>
            <h3>{dia.split("-").reverse().join("/")}</h3>

            <p>
              {volumes[indice] === null
                ? "Dados indisponíveis"
                : volumes[indice] + " mm"}
            </p>

            {volumes[indice] === maiorChuva && maiorChuva > 0 && (
              <strong>Maior volume previsto</strong>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}