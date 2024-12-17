import { render } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Route } from "../routes/contact.lazy";

const queryClient = new QueryClient();

const fetchMock = createFetchMock(vi);
fetchMock.enableMocks();

test("can submit contact form", async () => {
  fetchMock.mockResponse(JSON.stringify({ status: "ok" }));

  const screen = render(
    <QueryClientProvider client={queryClient}>
      <Route.options.component />
    </QueryClientProvider>,
  );

  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const msgTextArea = screen.getByPlaceholderText("Message");

  const testData = {
    name: "Bogdan",
    email: "onikiienko@gmai.com",
    message: "Hello, I have a question",
  };

  nameInput.value = testData.name;
  emailInput.value = testData.email;
  msgTextArea.value = testData.message;

  const btn = screen.getByRole("button");
  btn.click();

  const h3 = await screen.findByRole("heading", { level: 3 });

  expect(h3.textContent).toBe("Submitted!");

  const requests = fetchMock.requests();
  expect(requests).toHaveLength(1);
  expect(requests[0].url).toContain("/api/contact");
  expect(fetchMock).toHaveBeenCalledWith("/api/contact", {
    body: JSON.stringify(testData),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
});
