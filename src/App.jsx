import { useState } from "react";
import { pizzaData } from "../public/data.js";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //   const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        {pizzaData.map((pizza) => {
          return (
            <Pizza
              name={pizza.name}
              image={pizza.photoName}
              ingredients={pizza.ingredients}
              price={pizza.price}
            />
          );
        })}
      </div>
    </main>
  );
}

function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isOpen, setIsOpen] = useState(true);

  const currentHour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;

  setTimeout(() => {
    setTime(new Date().toLocaleTimeString());
    if (currentHour >= openHour && currentHour <= closeHour) setIsOpen(true);
    else setIsOpen(false);
  }, 1000);

  return (
    <footer className="footer">
      {time}. {isOpen ? "We're currently Open!" : "We're currently Closed!"}
    </footer>
  );
}

function Pizza({ name, image, ingredients, price }) {
  return (
    <div className="pizza">
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}
