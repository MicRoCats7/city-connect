import Footer from "./components/Footer";
import Galeri from "./components/Galeri";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import News from "./components/News";
import SmartCity from "./components/SmartCity"

function App() {
  return (
    <main className="h-screen">
      <Navbar />
      <Header />
      <SmartCity />
      <News />
      <Galeri />
      <Footer />
    </main>
  );
}

export default App;
