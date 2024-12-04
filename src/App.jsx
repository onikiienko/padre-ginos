import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's</h1>
      <Pizza name="Pepperoni" description="A classic pizza with pepperoni" image="/public/pizzas/big_meat.webp" />
      <Pizza name="Margherita" description="A classic pizza with tomato and mozzarella" image="/public/pizzas/hawaiian.webp" />
      <Pizza name="Quattro Stagioni" description="A classic pizza with ham, mushrooms, artichokes, and olives"  image="/public/pizzas/big_meat.webp"/>
      <Pizza name="Quattro Formaggi" description="A classic pizza with four types of cheese"  image="/public/pizzas/big_meat.webp"/>
      <Pizza name="Capricciosa" description="A classic pizza with ham, mushrooms, artichokes, and olives"  image="/public/pizzas/big_meat.webp"/>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
