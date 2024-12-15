import { expect, test, vi } from "vitest";
import { waitFor, renderHook } from "@testing-library/react";
import createFetchMock from "vitest-fetch-mock";
import { usePizzaOfTheDay } from "../usePizzaOfTheDay";

const fetchMock = createFetchMock(vi);
fetchMock.enableMocks();

const testPizza = {
  id: "calabrese",
  name: "Calabrese",
  category: "Supreme",
  description:
    "Tomato sauce, mozzarella, salami, bell peppers, onions, olives, oregano",
  image: "public/pizzas/calabrese.webp",
  size: { S: 10.25, M: 12.25, L: 14.25 },
};

test("gives null when first called", () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheDay());

  expect(result.current).toBeNull();
});

test("gives the pizza of the day after fetching", async () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheDay());

  await waitFor(() => {
    expect(result.current).toEqual(testPizza);
  });
  expect(fetchMock).toBeCalledWith("/api/pizza-of-the-day");
});
