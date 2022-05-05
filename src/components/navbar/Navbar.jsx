import "./navbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";
export default function Navbar() {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="navbar">
      <div className="navLeft">
        <Link className="link" to="/">
          <i class="bx bx-home-alt"></i> <span>Home</span>
        </Link>
      </div>
      <div className="navRight">
        {!user && (
          <Link className="link" to="/signin">
            <div className="navRightItem">SIGN IN</div>
          </Link>
        )}

        {!user && (
          <Link className="link" to="/signup">
            <div className="navRightItem ">SIGN UP</div>
          </Link>
        )}
        {user && (
          <div className="navRightItem" onClick={handleLogout}>
            {" "}
            <Link className="link" to="/signin">
              LOG OUT
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
