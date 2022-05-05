import axios from "axios";

import "./signIn.css";
import { Context } from "../../context/Context";
import { useContext, useState } from "react";
import Footer from "../../components/footer/Footer";

export default function SignUp() {
  const { dispatch } = useContext(Context);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formValues
      );
      console.log(res);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      window.location.replace("/");
    } catch (err) {}
  };
  return (
    <div className="signup">
      <form onSubmit={handleSubmit} className="signinForm">
        <h2>SIGN IN</h2>

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
        <button type="submit">SIGN IN</button>
      </form>
      <div className="footerDiv">
        <Footer />
      </div>
    </div>
  );
}
