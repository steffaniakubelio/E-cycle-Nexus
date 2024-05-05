import React, { useState } from 'react';
import axios from 'axios';

const MobileVerification = () => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email !== confirmEmail) {
      setErrorMessage('Emails do not match. Please try again.');
      return;
    }

    try {
      // Perform actions with email
      const response = await axios.post('/api/action', { email });
      console.log('Action successful:', response.data);

      // Reset form fields and error message
      setEmail('');
      setConfirmEmail('');
      setErrorMessage('');
    } catch (error) {
      console.error('Error performing action:', error);
      setErrorMessage('Failed to perform action. Please try again later.');
    }
  };

  return (
    <div className="mob">
      <div className="mobile-verification">
        <h2>Email Verification</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="confirmEmail">Confirm Email:</label>
          <input
            type="email"
            id="confirmEmail"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            required
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MobileVerification;
