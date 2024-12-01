import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Crud } from "./pages/Crud";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <main className="d-flex flex-column">
      <Navbar />
      <h1 className="p-5 mx-auto">Welcome to my simple crud app ...</h1>
      <Crud />
    </main>
  );
}

export default App;
