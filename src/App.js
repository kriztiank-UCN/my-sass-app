// src/App.js
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">Main</main>
      <Footer />
    </div>
  );
}

export default App;
