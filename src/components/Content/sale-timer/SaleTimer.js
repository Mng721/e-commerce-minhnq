import React from "react";
import "./sale-timer.sass";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ViewAllProduct from "../button/ViewAllProduct";
const SaleTimer = (props) => {
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const { deadline, title, buttonText } = props;

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  React.useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer-container">
      <div className="left-container">
        <div className="title">{title}</div>
        {deadline && (
          <div className="timer" role="timer">
            <div className="col-4">
              <div className="box">
                <span className="text">Days</span>
                <p id="day">{days < 10 ? "0" + days : days}</p>
              </div>
            </div>
            <div className="breaker">:</div>
            <div className="col-4">
              <div className="box">
                <span className="text">Hours</span>

                <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
              </div>
            </div>
            <div className="breaker">:</div>

            <div className="col-4">
              <div className="box">
                <span className="text">Minutes</span>

                <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
              </div>
            </div>
            <div className="breaker">:</div>

            <div className="col-4">
              <div className="box">
                <span className="text">Seconds</span>

                <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      {!buttonText ? (
        <div className="right-container">
          <div className="arrow-icon arrow-icon-back">
            <FaArrowLeft size={"2em"} />
          </div>
          <div className="arrow-icon arrow-icon-foward">
            <FaArrowRight size={"2em"} />
          </div>
        </div>
      ) : (
        <div className="right-container">
          <ViewAllProduct text={buttonText} />
        </div>
      )}
    </div>
  );
};

export default SaleTimer;
