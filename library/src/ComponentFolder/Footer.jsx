import "../CssFolder/Footer.css";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="detail">
        <p>TasteBuds Restaurant</p>

        <div className="contact">
          <h4>Contact Us</h4>
          <p>Email:  tastebuds@gmail.com</p>
          <p>Phone: (555) 123-4567</p>
          <p>Address: 45 Flavor Avenue, Trivandrum, Kerala</p>
        </div>
      </div>
      <div className="icon">
        <ul>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <RiFacebookFill />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <AiOutlineInstagram />
            </a>
          </li>
          <li>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <AiOutlineTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <BsYoutube />
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright">
   <p>&copy; 2025 TasteBuds Restaurant | All Rights Reserved</p>      </div>
    </div>
  );
}

export default Footer;
