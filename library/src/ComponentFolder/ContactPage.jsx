import "../CssFolder/Contact.css";
import Footer from "./Footer";
import NavPage from "./NavPage";

function ContactPage() {
  return (

   <>
   <div className="Contact">
     <NavPage/>
          <div className="minidiv">
            <h2>Send Us Your Valuable Feedback !</h2>
            
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="on"
              required="true"
              placeholder="Your Name"
            />
            <br />
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="on"
              required="true"
              placeholder="Your Email"
            />
            <br />
            <input
              type="number"
              id="number"
              name="number"
              autoComplete="on"
              required="true"
              placeholder="Phone Number"
            />
            <br />
            <textarea
              name="textarea"
              autoComplete="on"
              required="true"
              placeholder="Your Message"
            ></textarea>
            <br />
            <button type="button">Send Message</button>
         
          </div>
       <Footer/>
       </div>
   </>
  )
}

export default ContactPage