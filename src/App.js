import { useState, useEffect } from "react";
import {Routes, Route} from 'react-router-dom'
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

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='Packeges' element={<Offers data={offers} />} />
        <Route path='Calculator' element={<Calculator data={calc} />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='/' element={home === undefined ? <Loading /> : <Home data={home} />} />
      </Routes>
    </div>
  );
};

export default App;
