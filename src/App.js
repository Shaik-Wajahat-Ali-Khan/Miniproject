//import logo from './logo.svg';
//import './App.css';
import React, { useState } from 'react';
//function App() {
  //return (
    

    function LoginPage() {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState(null);
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // TO DO: Add authentication logic here
        if (username === 'admin' && password === 'password') {
          setError(null);
          // Redirect to dashboard or other authorized page
        } else {
          setError('Invalid username or password');
        }
      };
    
      return (
        <div className="login-container">
          <h1>Company Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <br />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <br />
            <input type="submit" value="Login" />
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
        </div>
      );
    }
    
    export default LoginPage;
      
             
       
 // )
     
  
//}

//export default App;
