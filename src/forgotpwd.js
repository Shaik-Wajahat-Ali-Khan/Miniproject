import React, { useState } from 'react';
import './forgotpwd.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

 

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send email to server and handle OTP generation
    console.log(`A verification code has been sent to ${email}`);
    // Redirect to email verification page
    navigate('/emailverification');

  };

  return (
    <div className="container">
      <h1>Forgot Password</h1>
      <p>Please enter your email address below, and we'll send you instructions to reset your password.</p>
      <form id="forgotPasswordForm" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      <p>
      <Link to="/project">Back to Login</Link>
      </p>
    </div>
  );
}

export default ForgotPassword;