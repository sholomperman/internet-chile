import { useState } from "react";
import "./calculator.scss";
import Card from "../../components/calcCard/Card";
import CountUp from "react-countup";

const Calculator = ({ data }) => {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);

  return (
    <div id="Calculator">
      {/* max of 8 components */}
      <h1>
        You need around{" "}
        <span className="amount">
          <CountUp
            start={one < two ? one : two}
            end={one > two ? one : two}
            duration={0.5}
          />
        </span>
        <span className="mbps">Mbps</span> of internet speed
      </h1>
      <div className="Calculator-container">
        {data?.map((i) => (
          <Card
            key={i.id}
            spcificAmount={i.val}
            secondLine={i.secondLine}
            firstLine={i.firstLine}
            icon={i.icon}
            one={one}
            setOne={setOne}
            two={two}
            setTwo={setTwo}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
