import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import "./index.css";
function Stopwatch({ gameId, timerRefs }: any) {
  const [CurrentGame] = useSelector((state: any) => [state.CurrentGame]);

  const [time, setTime] = useState(0);
  const [timerMiliSecond, settimerMiliSecond] = useState(0);

  useEffect(() => {
    const timerMiliSecond =
      (CurrentGame.TotalTime /
        (CurrentGame.TimeDistribution === "Halves" ? 2 : 4)) *
      60;

    if (!timerRefs.current[gameId])
      timerRefs.current[gameId] = {
        running: false,
        paused: false,
        timerId: null,
        time: timerMiliSecond,
      };
  }, [gameId, CurrentGame]);

  const startTimer = () => {
    const timer = timerRefs.current[gameId];
    if (timer && !timer.running) {
      const startTime = Date.now() - (timerMiliSecond - timer.time) * 1000;
      timer.running = true;

      timer.timerId = window.setInterval(() => {
        timerRefs.current[gameId].time = Math.floor(
          timerMiliSecond - (Date.now() - startTime) / 1000
        );
        setTime(Math.floor((Date.now() - startTime) / 1000));
        if (timer.time === 0) {
          // Reset the timer to 10
          stopTimer();
        }
      }, 1000);
    } else if (timer && timer.paused) {
      timer.paused = false;
      const startTime = Date.now() - (timerMiliSecond - timer.time) * 1000;

      timer.timerId = window.setInterval(() => {
        timerRefs.current[gameId].time = Math.floor(
          timerMiliSecond - (Date.now() - startTime) / 1000
        );
        setTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
  };

  const pauseTimer = () => {
    const timer = timerRefs.current[gameId];
    if (timer && timer.running && !timer.paused) {
      timer.paused = true;
      if (timer.timerId) {
        clearInterval(timer.timerId);
      }
    }
  };

  const stopTimer = () => {
    const timer = timerRefs.current[gameId];
    if (timer) {
      if (timer.timerId) {
        clearInterval(timer.timerId);
        timer.timerId = null;
      }
      timerRefs.current[gameId] = {
        running: false,
        paused: false,
        timerId: null,
        time:
          (CurrentGame.TotalTime /
            (CurrentGame.TimeDistribution === "Halves" ? 2 : 4)) *
          60,
      };
    }
  };

  // Retrieve the timer object for the current game ID
  const currentTimer = timerRefs.current[gameId];

  if (!currentTimer) {
    // Render a loading state or an error message when the game ID is not found
    return <div>Loading...</div>;
  }

  return (
    <div
      className="card card-xl-stretch mb-5 mb-xl-8 card-dark bg-light"
      style={{
        background: "btn-color-gray",
      }}
    >
      <div className="card-body">
        {/* <p className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1">
          Time:{" "}
          {timerRefs.current[gameId].time > 59
            ? (timerRefs.current[gameId].time / 60).toFixed()
            : timerRefs.current[gameId].time}{" "}
          {timerRefs.current[gameId].time > 59 ? "Minutes" : "Seconds"}
        </p> */}
        <span className="text-gray-800 text-hover-primary fs-2 fw-bolder">
          Time
        </span>
        <div className="Clock-Wrapper">
          <span id="DSEGClock" className="Clock-Time-Front">
            {Math.floor(timerRefs.current[gameId].time / 60)}
            <span className="fs-1">{timerRefs.current[gameId].time % 60}</span>
          </span>
        </div>

        <button
          onClick={startTimer}
          className="btn btn-bg-dark btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-40 mb-2 me-2"
        >
          {currentTimer.running && !currentTimer.paused ? "Resume" : "Start"}
        </button>
        <button
          onClick={pauseTimer}
          disabled={!currentTimer.running || currentTimer.paused}
          className="btn btn-bg-dark btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-40 mb-2"
        >
          Pause
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
