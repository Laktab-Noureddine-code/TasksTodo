import { useEffect, useRef, useState } from "react";
import "./Timers.css";

const timesArray = [
  {
    id: 1,
    title: "Pomodoro",
    timeByMinutes: 25 * 60,
    background: "#bb4948",
  },
  {
    id: 2,
    title: "short break",
    timeByMinutes: 5 * 60,
    background: "#41848b",
  },
  {
    id: 3,
    title: "Long break",
    timeByMinutes: 15 * 60,
    background: "#397097",
  },
];
export default function Timers() {
  const [timeId, setTimeId] = useState(1);
  const [times, setTimes] = useState(timesArray);
  const ref = useRef();
  const content = times.find((t) => t.id === timeId);

  useEffect(() => {
    document.body.style.backgroundColor = content.background;
  }, [content.background]);
  useEffect(() => {
    ref.current = setInterval(() => {
      setTimes(
        times.map((time) => {
          if (content.id === time.id) {
            return { ...time, timeByMinutes: time.timeByMinutes - 1 };
          } else {
            return time;
          }
        })
      );
    }, 1000);
    return () => clearInterval(ref.current);
  }, [timeId]);

  let timeProgress = `${Math.floor(content.timeByMinutes / 60)
    .toString()
    .padStart(2, "0")} : ${(content.timeByMinutes % 60)
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className="main-content1">
      <div className="title">
        {times.map((t) => {
          return (
            <button
              style={{
                backgroundColor:
                  t.id === content.id ? "#00000040" : "transparent",
              }}
              onClick={() => {
                setTimeId(t.id);
              }}
              key={t.id}
            >
              {t.title}
            </button>
          );
        })}
      </div>
      <div className="content">{timeProgress}</div>
      <div className="start-button">
        <button
          onClick={() => {
            // setTimer();
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
}
