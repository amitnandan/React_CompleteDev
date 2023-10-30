import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

//grouping testcases
describe("ContactUs test cases", () => {
  test("should Load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  // test("should Load button inside  contact us component", () => {
  //   render(<Contact />);

  //   const button = screen.getByRole("Button");

  //   expect(button).toBeInTheDocument();
  // });

  test("should Load button inside  contact us component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("should Load 2 input boxes on contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    //assertion
    expect(inputBoxes.length).toBe(2);
    //expect(inputBoxes.length).toBeTruthy();
  });
});

//toBeInTheDocument is not a function testing library/jest-dom
// render will happen at jsdom

//test / it both are same
