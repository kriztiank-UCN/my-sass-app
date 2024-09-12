// src/App.js
import Header from "./components/Header";
import Footer from "./components/Footer";
import FooterFilters from "./components/FooterFilters";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">Main</main>
      {/* Pass the isFirst prop with a dynamic value */}
      <FooterFilters isFirst={true} />
      <Footer />
    </div>
  );
}

export default App;
