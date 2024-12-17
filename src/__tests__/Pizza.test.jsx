import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Pizza from "../Pizza";

test("alt text renders on Pizza image", async () => {
  const name = "My favorite pizza";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} image={src} description="super cool pizza" />,
  );

  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});
