import React, { useEffect, useState } from "react";
import "./Footer.css";
import img from "../Images/img1.png";

export default function Footer() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({});

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const newError = {};

    if(!firstName.trim() && firstName.length < 3)
    {
      newError.firstName = "First Name is required";
    }
    if(!secondName.trim())
    {
      newError.secondName = "Second Name is required";
    }
    if(!email.trim())
    {
      newError.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email))
    {
      newError.email = "Invalid Email";
    }
    if (!password.trim())
    {
      newError.password = "Password is required.";
    } else if (password.length < 6)
    {
      newError.password = "Password must be at least 6 characters.";
    }
    setError(newError);
    return Object.keys(newError).length===0; // No errors means form is valid
  }

  useEffect(()=>{
    setIsFormValid(validateForm());
  }, [firstName, secondName, email, password]);


  const handleSubmit = (e) =>{
    e.preventDefault();
    if(validateForm()){
      setFirstName("");
      setSecondName("");
      setEmail("");
      setPassword("");
      setIsSubmitted(true);
      setError({});
      alert("Form submitted successfully!");
    }
  }


  return (
    <div className="footer">
      <div className="footer-content">
        <img className="image" src={img} alt="A computer" />
        <div className="contact">
          <h1>Contact Us</h1>
          <div className="formField">
            <form onSubmit={handleSubmit} action="https://formspree.io/f/xjvjlqzq" method="POST">
              <fieldset>
                <legend>Fill in the form below to contact us:</legend>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="firstName">First Name:</label>
                      </td>
                      <td>
                        <input
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          type="text"
                          id="firstName"
                          name="firstname"
                          placeholder="Enter your first name"
                          required
                        />
                        {error.firstName && <span className="error">{error.firstName}</span>}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Second Name:</label>
                      </td>
                      <td>
                        <input
                          value={secondName}
                          onChange={(e) => setSecondName(e.target.value)}
                          type="text"
                          name="secondname"
                          placeholder="Enter your second name"
                          required
                        />
                        {error.secondName && <span className="error">{error.secondName}</span>}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Email:</label>
                      </td>
                      <td>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          name="email"
                          placeholder="Enter your email address"
                          required
                        />
                        {error.email && <span className="error">{error.email}</span>}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Password:</label>
                      </td>
                      <td>
                        <input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          name="password"
                          placeholder="Enter your password"
                          required
                        />
                        {error.password && <span className="error">{error.password}</span>}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <button disabled={!isFormValid || isSubmitted} className="form-button">Submit</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <p>&copy; Copyright reserved. Created by Jeba Sobitha.</p>
    </div>
  );
}
