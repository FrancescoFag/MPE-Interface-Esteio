import { useState } from "react";
import RainForecast from "./RainForecast";

export default function CitySearch() {
  const [cidade, setCidade] = useState("");
  const [local, setLocal] = useState(null);
  const [dados, setDados] = useState(null);
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function pesquisar(event) {
    event.preventDefault();
    setDados(null);
    setLocal(null);

    if (cidade.trim() === "") {
      setMensagem("Digite uma cidade.");
      return;
    }

    setCarregando(true);
    setMensagem("Pesquisando...");

    try {
      const resposta = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cidade.trim())}&count=1&language=pt&countryCode=BR`
      );

      if (!resposta.ok) throw new Error();

      const cidades = await resposta.json();
      const encontrada = cidades.results?.[0];

      if (!encontrada) {
        setMensagem("Cidade não encontrada.");
        return;
      }

      const clima = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${encontrada.latitude}&longitude=${encontrada.longitude}&current=temperature_2m,relative_humidity_2m&daily=precipitation_sum&timezone=auto&forecast_days=7`
      );

      if (!clima.ok) throw new Error();

      const previsao = await clima.json();

      if (!previsao.current || !previsao.daily) {
        throw new Error();
      }

      setLocal(encontrada);
      setDados(previsao);
      setMensagem("");
    } catch {
      setMensagem("Erro ao consultar o clima. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="pesquisa">
      <form onSubmit={pesquisar}>
        <h2>Pesquisar cidade</h2>

        <input
          aria-label="Nome da cidade"
          placeholder="Digite Esteio ou outra cidade"
          value={cidade}
          onChange={(event) => setCidade(event.target.value)}
          disabled={carregando}
        />

        <button type="submit" disabled={carregando}>
          {carregando ? "Pesquisando..." : "Pesquisar"}
        </button>
      </form>

      <p role="status">{mensagem}</p>

      {dados && (
        <div>
          <h2>{local.name} — {local.admin1}</h2>

          <p>
            Temperatura atual:{" "}
            {dados.current.temperature_2m ?? "Indisponível"}
            {dados.current.temperature_2m != null && " °C"}
          </p>

          <p>
            Umidade:{" "}
            {dados.current.relative_humidity_2m ?? "Indisponível"}
            {dados.current.relative_humidity_2m != null && " %"}
          </p>

          <RainForecast previsao={dados.daily} />

          <a href="https://open-meteo.com/">
            Dados meteorológicos por Open-Meteo
          </a>
        </div>
      )}
    </div>
  );
}