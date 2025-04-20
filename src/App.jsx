import { useState } from "react";
import { pizzaData } from "/public/data.js";

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
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam in
            rerum omnis qui ipsa perferendis nulla sit velit nostrum
            accusantium!
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => {
              return <Pizza pizzaObj={pizza} key={pizza.name} />;
            })}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  // const [isOpen, setIsOpen] = useState(true);
  let isOpen;

  const currentHour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;

  setTimeout(() => {
    setTime(new Date().toLocaleTimeString());
    // if (currentHour >= openHour && currentHour <= closeHour) setIsOpen(true);
    // else setIsOpen(false);
  }, 1000);

  if (currentHour >= openHour && currentHour <= closeHour) isOpen = true;
  else isOpen = false;

  return (
    <footer className="footer">
      <p>
        {time}. <br />
        {isOpen ? (
          <Order openHour={openHour} closeHour={closeHour} />
        ) : (
          <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00.
          </p>
        )}
      </p>
    </footer>
  );
}

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
