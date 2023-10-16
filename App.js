import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World! using React"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I ' m an H1 Tag")
//   )
// );

// root.render(parent);
// console.log(parent);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I ' m an H1 Tag"),
    React.createElement("h2", {}, "I ' m an H2 Tag"),
  ])
);

root.render(parent);
console.log(parent);
