const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Pepperoni",
      description: "A classic pizza with pepperoni",
    }),
    React.createElement(Pizza, {
      name: "Margherita",
      description: "A classic pizza with tomato and mozzarella",
    }),
    React.createElement(Pizza, {
      name: "Quattro Stagioni",
      description:
        "A classic pizza with ham, mushrooms, artichokes, and olives",
    }),
    React.createElement(Pizza, {
      name: "Quattro Formaggi",
      description: "A classic pizza with four types of cheese",
    }),
    React.createElement(Pizza, {
      name: "Capricciosa",
      description:
        "A classic pizza with ham, mushrooms, artichokes, and olives",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
