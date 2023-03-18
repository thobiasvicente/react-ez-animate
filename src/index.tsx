import React from "react";
import ReactDOM from "react-dom/client";
import { Animate } from "react-ez-animate";
import "./style.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
interface ICard {
  title: string;
  animateType:
    | "fade-left"
    | "fade-right"
    | "fade-up"
    | "fade-down"
    | "zoom-in"
    | "zoom-out"
    | "flip-up"
    | "flip-down";
}
type ICards = Array<ICard>;

const cards: ICards = [
  {
    title: "Fade-up",
    animateType: "fade-up",
  },
  {
    title: "Fade-down",
    animateType: "fade-down",
  },
  {
    title: "Fade-left",
    animateType: "fade-left",
  },
  {
    title: "Fade-right",
    animateType: "fade-right",
  },
  {
    title: "Zoom-in",
    animateType: "zoom-in",
  },
  {
    title: "Zoom-out",
    animateType: "zoom-out",
  },
  {
    title: "Flip-up",
    animateType: "flip-up",
  },
  {
    title: "Flip-down",
    animateType: "flip-down",
  },
];
root.render(
  <React.StrictMode>
    <h1
      className="bg"
      style={{
        textAlign: `center`,
        height: `100%`,
        padding: `4rem`,
        margin: `0px`,
        color: `#f1f1f1`,
      }}
    >
      React Ez Animations
    </h1>
    {cards.map((card, index) => (
      <div
        key={index}
        className={`bg-${index}`}
        style={{
          height: `50vh`,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
        }}
      >
        <Animate animateType={card.animateType}>
          <h3
            style={{
              color: `#000`,
              backgroundColor: `#f9f9f9`,
              padding: `3rem 6rem`,
              borderRadius: `0.5rem`,
              boxShadow: `0 0 0.5rem 0.1rem #00000033`,
            }}
          >
            {card.title}
          </h3>
        </Animate>
      </div>
    ))}
  </React.StrictMode>
);
