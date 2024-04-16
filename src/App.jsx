import './App.css'
import Header from './Component/Header/Header'
import "@fontsource/exo-2"; // Defaults to weight 400
import "@fontsource/exo-2/400.css"; // Specify weight
import "@fontsource/exo-2/400-italic.css"; // Specify weight and style
import "@fontsource/exo-2/700.css";
import Vlogs from './Component/Vlogs/Vlogs';
import Footer from './Component/Footer/Footer';


function App() {
  return (
    <>
      <Header></Header>
      <Vlogs></Vlogs>
      <Footer></Footer>
    </>
  )
}

export default App
