//integration testing
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mockData/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
//mock fetch function
//creating a fetch function and exactly like fetch function
//fetch return a promise and promise return a json and it return a promise once again then get data

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

//act return a promise

test("should render the Body Component with Search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const search = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(search);

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(1);
});
