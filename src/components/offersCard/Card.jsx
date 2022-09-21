import "./card.scss";
import IconCheck from "../../assets/check_circle_700.svg";
import Btn from "../btn/Btn";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useState, useEffect } from "react";

const Card = ({ arr }) => {
  const { width } = useWindowDimensions();
  const [x, setX] = useState(1)

    useEffect(() => {
    const interval = setInterval(() => {
      arr.length - 1 >= x
        ? setX(x + 1)
        : setX(1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });
  
  let newArr;
  if (width <= 800) {
    newArr = [arr[x - 1]]
  } else {
    newArr = arr
  }
  return (
    <>
      {newArr?.map((i) => (
        <div
          key={i?.id}
          className={i?.active && width > 800 ? "OffersCard active" : "OffersCard"}
        >
          <div className="title">
            <h3>{i?.title}</h3>
          </div>
          <div className="price">
            <h1>{i?.price}</h1>
            <span>{i?.price_sub}</span>
          </div>
          <div className="details">
            {i?.paragraph.map((i) => (
              <div key={i?.id} className="detail">
                <img src={IconCheck} alt="check icon" />
                <p>{i?.p}</p>
              </div>
            ))}
          </div>
          <div className="btn">
            <Btn bg={i?.active ? "#800080" : undefined} text={i?.btn} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
