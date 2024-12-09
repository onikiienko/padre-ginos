import { useState, useEffect } from "react";
import Pizza from "./Pizza";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [loading, setLoading] = useState(true);

  let price, selectedPizza;

  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizza.id === pizzaType);
    price = intl.format(selectedPizza.sizes[pizzaSize]);
  }

  async function fetchPizzasTypes() {
    const response = await fetch("/api/pizzas");
    const data = await response.json();
    setPizzaTypes(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchPizzasTypes();
  }, []);

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza type</label>
            <select
              name="pizza-type"
              value={pizzaType}
              onChange={(e) => setPizzaType(e.target.value)}
            >
              {pizzaTypes.map((pizza) => (
                <option key={pizza.id} value={pizza.id}>
                  {pizza.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza size</label>
            <div>
              <span>
                <input
                  checked={pizzaSize === "S"}
                  onChange={() => setPizzaSize("S")}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "M"}
                  onChange={() => setPizzaSize("M")}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "L"}
                  onChange={() => setPizzaSize("L")}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
          <div className="order-pizza">
            {loading ? (
              <h1>Loading Pizzas</h1>
            ) : (
              <Pizza
                name={selectedPizza.name}
                description={selectedPizza.description}
                image={selectedPizza.image}
              />
            )}
            <p>{price}</p>
          </div>
        </div>
      </form>
    </div>
  );
}
