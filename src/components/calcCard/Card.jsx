import { useState } from "react";
import "./card.scss";
import add from "../../assets/add.svg";
import remove from "../../assets/remove.svg";

const Card = ({
  secondLine,
  firstLine,
  icon,
  spcificAmount,
  one,
  setOne,
  two,
  setTwo,
}) => {
  const [devices, setDevices] = useState(0);

  const addToCardAndResult = () => {
    if (one < two) {
      setOne(two + spcificAmount);
    } else {
      setTwo(one + spcificAmount);
    }

    setDevices(devices + 1);
  };

  const removeToCardAndResult = () => {
    if (devices !== 0) {
      if (one > two) {
        setOne(one - spcificAmount);
        setTwo(one - spcificAmount);
      } else {
        setOne(two - spcificAmount);
        setTwo(two - spcificAmount);
      }
      setDevices(devices - 1);
    }
  };

  return (
    <div className="CalcCard">
      <div
        /* 'active' class is coming from a nother component 'OffersCard' */
        className={devices === 0 ? "card-container" : "card-container active"}
      >
        <div className="top">
          <img
            onClick={() => addToCardAndResult()}
            className="add"
            src={add}
            alt="add"
          />
          <img
            onClick={() => removeToCardAndResult()}
            className="remove"
            src={remove}
            alt="remove"
          />
        </div>
        <div className="bottom">
          <span
            style={devices === 0 ? { color: "#808080" } : { color: "#000000" }}
          >
            {devices} Devices
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d={icon} />
          </svg>
          <h3>{firstLine}</h3>
          <h3>{secondLine}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
