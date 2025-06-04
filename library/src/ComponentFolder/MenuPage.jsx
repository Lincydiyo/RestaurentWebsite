import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import "../CssFolder/Menu.css";
import NavPage from "./NavPage";
import Footer from "./Footer";

// Images
import breadSandwitch from "../ImageFolder/breadSandwitch.jpg";
import noodles from "../ImageFolder/noodles.jpg";
import fruitSalad from "../ImageFolder/fruitSalad.jpg";
import vegSandwitch from "../ImageFolder/vegSandwitch.jpg";
import vegRoll from "../ImageFolder/vegRoll.jpg";
import sandwitchRoll from "../ImageFolder/sandwitchRoll.jpg";
import pizza from "../ImageFolder/pizza.jpg";
import samosa from "../ImageFolder/samosa.jpg";
import donut from "../ImageFolder/donut.jpg";
import chickenBiriyani from "../ImageFolder/chickenBiriyani.webp";
import rice from "../ImageFolder/rice.png";
import chickenFriedrice from "../ImageFolder/chickenFriedrice.png";
import croissant from "../ImageFolder/croissant.webp";
import stawberry from "../ImageFolder/stawberry.png";
import pineapple from "../ImageFolder/pineapple.png";
import grape from "../ImageFolder/grape.png";
import watermelon from "../ImageFolder/watermelon.webp";
import lemon from "../ImageFolder/lemon.png";
import cookies from "../ImageFolder/cookies.png";
import chips from "../ImageFolder/chips.png";
import chapathi from "../ImageFolder/chapathi.png";
import dosa from "../ImageFolder/dosa.webp";
import vegrice from "../ImageFolder/vegrice.png";

 
// Food Items Array
const foodItems = [
  {
    title: "Bread Sandwich",
    price: 250,
    image: breadSandwitch,
    category: "breakfast",
  },
   {
    title: "Lemon Juice",
    price: 50,
    image: lemon,
    category: "snack",
  },
   {
    title: "Chapathi",
    price: 60,
    image: chapathi,
    category: "dinner",
  },
   {
    title: "Choco Cookies",
    price: 70,
    image: cookies,
    category: "snack",
  },
   {
    title: "Veg Fried Rice",
    price: 160,
    image: vegrice,
    category: "dinner",
  },
  {
    title: "Noodles",
    price: 300,
    image: noodles,
    category: "lunch",
  },
    {
    title: "Dosa",
    price: 80,
    image: dosa,
    category: "dinner",
  },
   {
    title: "Chips",
    price: 30,
    image: chips,
    category: "snack",
  },
  {
    title: "Grape Juice",
    price: 300,
    image: grape,
    category: "snack",
  },
  {
    title: "Fruit Salad",
    price: 280,
    image: fruitSalad,
    category: "breakfast",
  },
  {
    title: "Veg Sandwich",
    price: 100,
    image: vegSandwitch,
    category: "breakfast",
  },
  {
    title: "Veg Roll",
    price: 280,
    image: vegRoll,
    category: "breakfast",
  },
  {
    title: "Sandwich Roll",
    price: 300,
    image: sandwitchRoll,
    category: "breakfast",
  },
  {
    title: "Pizza",
    price: 350,
    image: pizza,
    category: "dinner",
  },
  {
    title: "Samosa",
    price: 50,
    image: samosa,
    category: "snack",
  },
  {
    title: "Donut",
    price: 100,
    image: donut,
    category: "snack",
  },
  {
    title: "Chicken Biriyani",
    price: 250,
    image: chickenBiriyani,
    category: "lunch",
  },
  {
    title: "Watermelon Juice",
    price: 100,
    image: watermelon,
    category: "snack",
  },
  {
    title: "Rice",
    price: 200,
    image: rice,
    category: "lunch",
  },
  {
    title: "Chicken Fried Rice",
    price: 220,
    image: chickenFriedrice,
    category: "lunch",
  },
  {
    title: "croissant",
    price: 120,
    image: croissant,
    category: "breakfast",
  },

  {
    title: "PineApple Juice",
    price: 110,
    image: pineapple,
    category: "snack",
  },
  
  {
    title: "Stawberry Juice",
    price: 100,
    image: stawberry,
    category: "snack",
  },
];

function MenuPage() {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all"
      ? foodItems
      : foodItems.filter((item) => item.category === filter);

  return (
    <>
      <NavPage />
      <div className="Menu">
        <h1 className="text-center mt-4">
          What kind of Foods we serve for you
        </h1>
        <p className="text-center mb-4">
          Who are in extremely love with eco friendly system.
        </p>

        {/* Filter Buttons */}
        <Container className="text-center">
          <ButtonToolbar className="justify-content-center mb-4">
            <ButtonGroup className="wide-button-group">
              <Button className="menuButton" onClick={() => setFilter("all")}>
                All Menu
              </Button>
              <Button
                className="menuButton"
                onClick={() => setFilter("breakfast")}
              >
                Breakfast
              </Button>
              <Button className="menuButton" onClick={() => setFilter("lunch")}>
                Lunch
              </Button>
              <Button
                className="menuButton"
                onClick={() => setFilter("dinner")}
              >
                Dinner
              </Button>
              <Button className="menuButton" onClick={() => setFilter("snack")}>
                Snacks & Juice
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Container>

        {/* Filtered Food Cards */}
        <Container>
          <Row>
            {filteredItems.map((item, index) => (
              <Col key={index} xl={4} md={6} sm={12} className="mb-4">
                <Card className="card">
                  <span className="PriceSpan">${item.price}</span>
                  <Card.Img variant="top" src={item.image} height={280} />
                  <Card.Body>
                    <Card.Title className="cardtitle">{item.title}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <button type="button" className="orderButton">
                      Order Now
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default MenuPage;
