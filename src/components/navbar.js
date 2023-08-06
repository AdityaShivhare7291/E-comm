import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './navbar.css'
import CustomButton from './buttons'
import { Login } from "@mui/icons-material";

function Navbar() {
  const auth=JSON.parse(localStorage.getItem('user'));
  const logs=()=>{
  localStorage.clear();
  }
    return (
        <div className="navbar-container">
        {auth ? (
          <ul>
            
          </ul>
        ) : (
          <ul className="flap">
            <li>
              <CustomButton btnText="Login" to="/login">login</CustomButton>
            </li>
            <li >
              <CustomButton btnText="SignUp"  to="/sign" >signup</CustomButton>
            </li>
          </ul>
        )}
      </div>
    );
  };
  export default Navbar;