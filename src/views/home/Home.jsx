import { useState, useEffect } from "react";
import "./home.scss";
import Btn from "../../components/btn/Btn";
import unchecked from "../../assets/radio_button_unchecked.svg";
import checked from "../../assets/radio_button_checked.svg";
import right from "../../assets/chevron_right.svg";
import left from "../../assets/chevron_left.svg";

const Home = ({ data }) => {
  const [imageCount, setImageCount] = useState(1);
  const array = [data[imageCount - 1]];
  useEffect(() => {
    const interval = setInterval(() => {
      data.length - 1 >= imageCount
        ? setImageCount(imageCount + 1)
        : setImageCount(1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });

  const next = () => {
    if (data.length > imageCount) {
      setImageCount(imageCount + 1);
    } else {
      setImageCount(1);
    }
  };

  const back = () => {
    if (imageCount === 1) {
      setImageCount(data.length);
    } else {
      setImageCount(imageCount - 1);
    }
  };

  return (
    <>
      {array?.map((i) => (
        <div
          key={i?.id}
          id="Home"
          className="Home"
          style={{ backgroundImage: `url(${i?.img})` }}
        >
          <div className="over">
            <h1>{i?.title}</h1>
            <p>{i?.p}</p>
            <a href={`#${i?.href}`}>
              <Btn text={i?.btn} />
            </a>
            <div className="dots">
              {data?.map((i) => (
                <img
                  key={i?.id}
                  onClick={() => setImageCount(i?.id)}
                  className="dot"
                  src={imageCount === i?.id ? checked : unchecked}
                  alt="unchecked"
                />
              ))}
            </div>
            <img
              onClick={() => next()}
              className="right"
              src={right}
              alt="right"
            />
            <img
              onClick={() => back()}
              className="left"
              src={left}
              alt="left"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
