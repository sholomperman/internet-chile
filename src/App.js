import { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import Nav from "./components/navBar/NavBar";
import Home from "./views/home/Home";
import Offers from "./views/offers/Offers";
import Calculator from "./views/calculator/Calculator";
import Contact from "./views/contact/Contact";
import Loading from './components/loading/Loading'

const App = () => {
  const [calc, setCalc] = useState(undefined);
  const [home, setHome] = useState(undefined);
  const [offers, setOffers] = useState(undefined);

  const apiLink = "https://shmulik.herokuapp.com/api";

  const calenderApi = (apiRout, setTo) => {
    try {
      const api = async () => {
        const { data } = await axios.get(`${apiLink}${apiRout}`);
        setTo(data);
      };
      api();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    calenderApi("/calculator", setCalc);
    calenderApi("/home", setHome);
    calenderApi("/offers", setOffers);
  }, []);

  console.log(calc, home, offers);
  return (
    <div className="App">
      <Nav />
      <div className="sections">
        {home === undefined ? <Loading /> : <Home data={home} />}
        {home === undefined ? <Loading /> : <Offers data={offers} />}
        {home === undefined ? <Loading /> : <Calculator data={calc} />}
        {home === undefined ? <Loading /> : <Contact />}
      </div>
    </div>
  );
};

export default App;
