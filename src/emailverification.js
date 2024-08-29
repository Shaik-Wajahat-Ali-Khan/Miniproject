import React from 'react';
import './emailverification.css';
//import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EmailVerification() {
  //const history = useHistory();
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2>Email Verification</h2>
      <p>We've sent a verification code to your email address. Please enter the code below to verify your email.</p>
      <form onSubmit={(event) => {
        console.log(true);
        event.preventDefault();
        // Assuming you have validated the OTP
        //history.push('/resetpwd');
        navigate('/resetpwd');

      }}>
        <label htmlFor="verification-code">Verification Code:</label>
        <input type="text" id="verification-code" name="verification-code" required />
        <button className="verify-btn" type="submit">Verify</button>
      </form>
      <p>If you didn't receive the verification code, you can <a href="#">resend it</a>.</p>
    </div>
  );
}

export default EmailVerification;