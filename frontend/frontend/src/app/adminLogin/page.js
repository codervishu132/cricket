  // import React, { useState } from 'react';
  // import axios from 'axios';
  // import './adminLogin.css';


  // export default function AdminLogin() {
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await axios.post('/api/admin/login', { email, password });
  //       console.log('Admin Login successful:', response.data);
  //     } catch (error) {
  //       console.error('Login failed:', error);
  //     }
  //   };

  //   return (
  //     <div className="admin-login-container">
  //       <h2>Admin Login</h2>
  //       <form onSubmit={handleSubmit} className="login-form">
  //         <input
  //           type="email"
  //           placeholder="Email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //           required
  //         />
  //         <input
  //           type="password"
  //           placeholder="Password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //           required
  //         />
  //         <button type="submit"  className="login-button">Login</button>
  //       </form>
  //     </div>
  //   );
  // }

  import React, { useState } from 'react';
import axios from 'axios';
import './adminLogin.css';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/admin/login', { email, password });
      console.log('Admin Login successful:', response.data);
      // Handle successful login here (e.g., redirect to dashboard)
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login failure (e.g., show error mess  age)
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          className="email-input" // Ensure this class is added
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="password-input" // Ensure this class is added
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

