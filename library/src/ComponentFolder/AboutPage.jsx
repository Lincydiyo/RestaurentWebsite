import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import NavPage from "./NavPage";
import "../CssFolder/About.css";
import Footer from "./Footer";
import icecreamImage from "../ImageFolder/icecreamImage.jpg";
import burgerImage from "../ImageFolder/burgerImage.png";
import pizzaImage from "../ImageFolder/pizzaImage.jpg";
import coldDrings from "../ImageFolder/coldDrings.jpg";
import breakfast from "../ImageFolder/breakfast.jpg";
import sweetImage from "../ImageFolder/sweetImage.webp";
import aboutImage from "../ImageFolder/aboutImage.png";
import favFood from "../ImageFolder/favFood.jpg";
import delivery from "../ImageFolder/delivery.jpg";
import payment from "../ImageFolder/payment.webp";
import foodEat from "../ImageFolder/foodEat.jpg";
import Carousel from "react-bootstrap/Carousel";
function AboutPage() {
  return (
    <>
      <NavPage />
      <div className="About">
        <Row className="about-section">
          <Col xl={6} md={6} sm={12}>
            <h1>
              About <span>Our</span> Story
            </h1>
            <p>
              Who are in extremely love with eco friendly system. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud aliquip ex ea commodo exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Col xl={6} md={6} sm={12}>
            <img src={aboutImage} alt="About section" />
          </Col>
        </Row>

        <div className="workingDiv">
          <h1>
            How It <span>Works</span>
          </h1>
          <Carousel
            className="working-carousel"
            interval={3000}
            indicators={false}
          >
            <Carousel.Item>
              <div className="carousel-step">
                <img src={favFood} alt="Favourite food" />
                <h5>
                  Choose Your <br /> Favourite Food
                </h5>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-step">
                <img src={delivery} alt="Fast delivery" />
                <h5>
                  Free And Fast <br /> Delivery
                </h5>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-step">
                <img src={payment} alt="Easy payment" />
                <h5>
                  Easy Payment <br /> Methods
                </h5>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-step">
                <img src={foodEat} alt="Enjoy food" />
                <h5>
                  And Finally, Enjoy <br /> Your Food
                </h5>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        <h1 style={{ marginTop: "5%" }}>What Kind of Services we Offer</h1>
        <p>Who are in extremely love with eco friendly system.</p>
        <Row>
          <Col xl={4} md={6} sd={12}>
            <Card>
              <Card.Img
                variant="top"
                src={icecreamImage}
                alt="cold ice-cream image"
                height={350}
              />
              <Card.Body>
                <Card.Title>Cold Ice-Cream </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} md={6} sd={12}>
            <Card>
              <Card.Img
                variant="top"
                src={burgerImage}
                alt="burger-image"
                height={350}
              />
              <Card.Body>
                <Card.Title>Tasty Burger</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} md={6} sd={12}>
            <Card>
              <Card.Img
                variant="top"
                src={pizzaImage}
                alt="pizza-image"
                height={350}
              />
              <Card.Body>
                <Card.Title>Tasty Pizza </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={4} md={6} sd={12}>
            <Card>
              <Card.Img
                variant="top"
                src={coldDrings}
                alt="Cold drinks image"
                height={350}
              />
              <Card.Body>
                <Card.Title>Cold Drinks </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} md={6} sd={12}>
            <Card>
              <Card.Img
                variant="top"
                src={sweetImage}
                alt="Tasty sweet image"
                height={350}
              />
              <Card.Body>
                <Card.Title>Tasty Sweet </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} md={6} sd={12}>
            <Card>
              <Card.Img
                variant="top"
                src={breakfast}
                alt="Healthy breakfast image"
                height={350}
              />
              <Card.Body>
                <Card.Title>Healthy Breakfast </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
