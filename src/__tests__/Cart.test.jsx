import { render } from "@testing-library/react";
import Cart from "../Cart";
import { expect, test } from "vitest";

test("Snapshot with nothing in Cart", () => {
  const { asFragment } = render(<Cart cart={[]} />);
  expect(asFragment()).toMatchSnapshot();
});
