import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../CssFolder/HomePage.css";
import NavPage from "./NavPage";
import Footer from "./Footer";
import BurgerImage from "../ImageFolder/burger.png";
import { Link } from "react-router-dom";

function Home_page() {
  return (
    <>
      <NavPage />
      <div className="Home">
        <Row>
          <Col lg="7" sm="12">
            <h1>Food Made With Love</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit Architecto quidem ea consectetur libero <br />
              distinctio est molestiae assumendadoloremque laborum temporibus.
            </p>
            <Link to="/order" className="order-button">
              Order Now
            </Link>
          </Col>

          <Col lg="5" sm="12">
            <img
              className="burger"
              style={{ width: 400, height: 400, marginTop: 45 }}
              src={BurgerImage}
              alt="Burger"
            />
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default Home_page;
