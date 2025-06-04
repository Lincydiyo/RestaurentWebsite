import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavPage from "./NavPage";
import Footer from "./Footer";
import "../CssFolder/Order.css";
import orderImage from "../ImageFolder/orderImage.jpg";

function OrderPage() {
  return (
    <>
      <NavPage />
      <div className="Orderpage">
        <h1>
          Book
          <span> Order </span>Now
        </h1>
        <Row>
          <Col xl={5} sm={12}>
            <img src={orderImage} alt="OrderImage" className="order-image" />
            <div className="order-info">
              <h2>Delicious Meals Just a Click Away</h2>
              <p>
                Enjoy freshly prepared dishes delivered right to your doorstep.
                Whether you're craving spicy snacks, homemade meals, or party
                specials, we've got it all! Simply fill in your details, choose
                your favorite food, and place your order — it's fast, easy, and
                convenient.
              </p>
            </div>
          </Col>
          <Col xl={7} sm={12}>
            <form >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="inputtype"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="inputtype"
                required
              />

              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                className="inputtype"
                required
              />

              <input
                type="text"
                name="food"
                placeholder="Food Item"
                className="inputtype"
                required
              />
              <input
                type="number"
                name="quantity"
                placeholder="How Many"
                className="inputtype"
                min="1"
                max="20"
                required
              />
              <textarea
                name="address"
                className="textarea"
                placeholder="Delivery Address"
                required
              ></textarea>

              <button type="submit" className="homebutton">
                Order Now
              </button>
            </form>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default OrderPage;
