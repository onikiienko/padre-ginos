import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's</h1>
      <Pizza name="Pepperoni" description="A classic pizza with pepperoni"/>
      <Pizza name="Margherita" description="A classic pizza with tomato and mozzarella"/>
      <Pizza name="Quattro Stagioni" description="A classic pizza with ham, mushrooms, artichokes, and olives"/>
      <Pizza name="Quattro Formaggi" description="A classic pizza with four types of cheese"/>
      <Pizza name="Capricciosa" description="A classic pizza with ham, mushrooms, artichokes, and olives"/>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
