import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./project.css"; // Import the CSS file directly
import { useNavigate } from "react-router-dom";
//import React, { useState } from "react";


const Project = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    navigate('/company-index-page');
  };


  return (
    <div className="container"> {/* Use className without styles */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="formGroup"> {/* Use className without styles */}
          <input type="text" placeholder="Username" value={username}
          onChange={(e) => setUsername(e.target.value)}
 required />
        </div>
        <div className="formGroup"> {/* Use className without styles */}
          <input type="password" placeholder="Password"  value={password}
          onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="remember-forgot"> {/* Use className without styles */}
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <Link to="/forgotpwd">Forgot Password?</Link>
        </div>
        <button type="submit" className="btn">LOGIN</button> {/* Use className without styles */}
        <p>Don't have an account?<Link to="/userRegistration">Register now</Link></p>
      </form>
    </div>
  );
};

export default Project;
