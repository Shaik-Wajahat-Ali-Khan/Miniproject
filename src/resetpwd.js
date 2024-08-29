import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './resetpwd.css';

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword && confirmPassword) {
      if (newPassword === confirmPassword) {
        resetPassword(newPassword)
          .then((response) => {
            if (response.success) {
              setSuccess('Password reset successfully!');
              navigate('/login'); // Redirect to login page upon success
            } else {
              setError('Error resetting password. Please try again.');
            }
          })
          .catch((error) => {
            console.error(error);
            setError('Error resetting password. Please try again.');
          });
      } else {
        setError('Passwords do not match. Please try again.');
      }
    }
  };

  function resetPassword(newPassword) {
    // TO DO: Implement password reset logic here
    // Return a promise that resolves with a success response or rejects with an error
    return new Promise((resolve, reject) => {
      // Simulated async operation
      setTimeout(() => {
        resolve({ success: true }); // Simulate success response
      }, 1000);
    });
  }

  return (
    <div className="container">
      <h2>Reset Password</h2>
      <p>Enter your new password below.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-password">New Password:</label>
        <input
          type="password"
          id="new-password"
          name="new-password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button className="reset-btn" type="submit">
          Reset Password
        </button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {success && <div style={{ color: 'green' }}>{success}</div>}
      </form>
    </div>
  );
}

export default ResetPassword;
