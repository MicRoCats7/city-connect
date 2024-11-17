import Footer from "./components/Footer";
import Galeri from "./components/Galeri";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import News from "./components/News";
import PetaGaleri from "./components/PetaGaleri";
import SmartCity from "./components/SmartCity"

function App() {
  return (
    <main className="h-full bg-[#101010] overflow-hidden">
      <Navbar />
      <Header />
      <SmartCity />
      <News />
      <Galeri />
      <PetaGaleri />
      <Footer />
    </main>
  );
}

export default App;
