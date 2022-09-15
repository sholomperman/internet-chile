import "./offers.scss";
import Card from "../../components/offersCard/Card";

const Offers = ({ data }) => {
  return (
    <div id="Packeges" className="Offers">
      <h1>Our Top Pakeges</h1>
      <div className="card-container">
        <Card arr={data} />
      </div>
    </div>
  );
};

export default Offers;
