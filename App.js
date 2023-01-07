import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", {}, "Namaste React from Akshay1!");
//console log of heading ---> will be an object as soon as react element is created -->object is made out of it
console.log(heading1);

const heading2 = React.createElement("h1", {}, "Namaste React from Akshay2!");

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);
//For injecting react into the DOM
//create root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
