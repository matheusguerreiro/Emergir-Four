import Challenge from "./components/Challenge";
import Events from "./components/Events";
import MeuComponente from "./components/MeuComponente";
import PrimeiroComponente from "./components/PrimeiroComponente";
import TemplateExpressions from "./components/TemplateExpressions";

function App() {
  // comentário
  return (
    <div>
      {/* comentário */}
      <h1>Meu App</h1>
      <PrimeiroComponente />
      <TemplateExpressions />
      <MeuComponente />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
