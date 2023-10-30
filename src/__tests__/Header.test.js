import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";

//header is using redux jsdom - (understands jsx , javascript, react-code)
//we need to provide store to header

test("should load Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //const loginButton = screen.getByText("Login");
  const loginButton = screen.getByRole("button");
  expect(loginButton).toBeInTheDocument();
});

test("should load Header Component with a cart items 0 ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart(0)");
  expect(cartItems).toBeInTheDocument();
});
