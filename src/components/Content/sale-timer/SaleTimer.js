import React from "react";
import "./sale-timer.sass";
import ViewAllProduct from "../button/ViewAllProduct";
import ArrowLeft from "../arrows/ArrowLeft";
import ArrowRight from "../arrows/ArrowRight";
const SaleTimer = (props) => {
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const { deadline, title, buttonText, rightContent, btnPre, btnNext } = props;

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  React.useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    console.log(props);

    return () => clearInterval(interval);
  }, []);

  let rightContentContainer;
  if (rightContent && buttonText) {
    rightContentContainer = <ViewAllProduct text={buttonText} />;
  } else if (rightContent && !buttonText) {
    rightContentContainer = (
      <>
        <div onClick={btnPre}>
          <ArrowLeft />
        </div>
        <div onClick={btnNext}>
          <ArrowRight />
        </div>
      </>
    );
  } else if (!rightContent) {
    <></>;
  }
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
      <div className="right-container">{rightContentContainer}</div>
    </div>
  );
};

export default SaleTimer;
