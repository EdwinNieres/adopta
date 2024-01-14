import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tags } from "./components/tags/tags";
import { Cards } from "./components/card/Cards";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header titulo="Adopta un perrito" />
      <hr />
      <div className="container-cards">
        <Cards
          url="https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          nombre="Manchitas"
          descripcion="Hermoso cachorro con mucha energía y jugueton"
          etiqueta="Te adopto"
        />
        <Cards
          url="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          nombre="Dolby"
          descripcion="El perrito mas hermoso jamás visto en la historia"
          etiqueta="Te escojo"
        />
        <Cards
          url="https://images.pexels.com/photos/2523934/pexels-photo-2523934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          nombre="White"
          descripcion="Cariñosa, fiel compañera que te seguirá siempre"
          etiqueta="Te elijo"
        />
        <Cards
          url="https://images.pexels.com/photos/1420405/pexels-photo-1420405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          nombre="Peagle"
          descripcion="Preciosa perrita en busca de familia querida"
          etiqueta="Te quiero"
        />
      </div>

      <Footer />
    </>
  );
}

export default App;
