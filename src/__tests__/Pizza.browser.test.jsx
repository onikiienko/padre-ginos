import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import Pizza from "../Pizza";

test("alt text is the pizza name", async () => {
  const name = "Calabrese";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} src={src} description="something" />,
  );

  const img = await screen.getByRole("img");

  await expect.element(img).toBeInTheDocument();
  await expect.element(img).toHaveAttribute("alt", name);
  await expect.element(img).toHaveAttribute("src", src);
});
