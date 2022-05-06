import axios from "axios";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import "./signUp.css";
import validation from "./validation";

export default function SignUp() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [formError, setFormerrors] = useState({});
  const [formValues, setFormValues] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormerrors(validation(formValues));
    setIsSubmit(true);
    setFormerrors(validation(formValues));
    if (Object.keys(formError).length === 0 && isSubmit) {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/auth/register",
          formValues
        );
        console.log(res);
        window.location.replace("/");
      } catch (err) {}
    } else {
      console.log("password is too short");
    }
  };
  console.log(formError.password);
  return (
    <div className="signup">
      <form onSubmit={handleSubmit} className="signupForm">
        <h2>SIGN UP</h2>
        <label htmlFor="">Full Name</label>
        <input
          type="text"
          name="fullname"
          placeholder="Enter Full Name..."
          required="true"
          onChange={handleChange}
        />

        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Enter Email..."
          name="email"
          required="true"
          onChange={handleChange}
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter Password..."
          required="true"
          onChange={handleChange}
          name="password"
        />
        <p>{formError.password}</p>
        <button type="submit">SIGN UP</button>
      </form>
      <div className="footerDivS">
        <Footer />
      </div>
    </div>
  );
}
