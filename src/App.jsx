import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Crud } from "./pages/Crud";

function App() {
  return (
    <main className="position-relative">
      <h1 className="">Welcome to my simple crud app ...</h1>
      <Crud />
    </main>
  );
}

export default App;
