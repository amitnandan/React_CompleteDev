import React from "react";
import ReactDOM from "react-dom/client";

const title = (
  <h1 className="container" tabIndex="5">
    AMIT Nandan
  </h1>
);

const number = 1000;

const Heading = () => (
  <div id="container">
    {title}
    <h1>{number + 50}</h1>
    <h1 className="heading">Amit Nandan functional Component</h1>;
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
