import Footer from "./Components/Footer";
import HomePage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import InsureServices from "./Components/Services";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <InsureServices />
      <Footer />
    </div>
  );
}

export default App;
