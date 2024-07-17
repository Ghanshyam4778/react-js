import "./contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact_infom">
          <h1>Contact Us</h1>
          <p>
            Need to get touch us? Either fill out the form with your inquriy or
            find the <a href="/">department email</a>you'd like to contact below
          </p>
        </div>
        <div className="contact_form">
          <form action="" className="sendmsg">
            <tr>
              <td>
                <label htmlFor="name">Name :</label>
                <input type="text" name="name" id="name" placeholder="Name" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">Email :</label>
                <input type="email" name="name" id="email" placeholder="Email"/>
              </td>
              
            </tr>
            <tr>
              <td>
                <label htmlFor="address">Address :</label>
                <input type="address" name="name" id="address" placeholder="Address" />
              </td>
            </tr>
            <input type="button" value="Send" className="sendbutton" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
