const { render, screen } = require("@testing-library/react");
import ResturantCard from "../components/ResturantCard";
import MOCK_DATA from "../mockData/resCardMock.json";
import "@testing-library/jest-dom";

it("should render resturantCard component with props data", () => {
  render(<ResturantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Domino's Pizza");
  expect(name).toBeInTheDocument();
});
