// // 'use client';  // Add this at the top of the file

// // import React, { useState } from 'react';
// // import axios from 'axios';
// // // Remove the import for express as it's not needed in client-side code

// // export default function UserLogin() {
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await axios.post('/api/auth/login', { email, password });
// //             console.log('Login Successful', response.data);
// //             // Handle successful login (e.g., redirect, set user state, etc.)
// //         } catch (error) {
// //             console.error('Login Failed', error);
// //             // Handle login failure (e.g., show error message)
// //         }
// //     };

// //     return (
// //         <div>
// //             <h2>User Login</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <input
// //                     type="email"
// //                     placeholder="Email"
// //                     value={email}
// //                     onChange={(e) => setEmail(e.target.value)}
// //                     required
// //                 />
// //                 <input
// //                     type="password"
// //                     placeholder="Password"
// //                     value={password}
// //                     onChange={(e) => setPassword(e.target.value)}
// //                     required
// //                 />
// //                 <button type="submit">LOGIN</button>
// //             </form>
// //         </div>
// //     );
// // }

// 'use client'; // Add this at the top of the file

// import React, { useState } from 'react';
// import axios from 'axios';
// import '../styles/Login.css'; // Import your CSS file
// import Navbar from '../components/Navbar';
// export default function login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('/api/auth/login', { email, password });
//             console.log('Login Successful', response.data);
//             // Handle successful login (e.g., redirect, set user state, etc.)
//         } catch (error) {
//             console.error('Login Failed', error);
//             // Handle login failure (e.g., show error message)
//         }
//     };

//     return (
//         <div className="user-login-container">
//             <Navbar></Navbar>
//             <h2>User Login</h2>
//             <form onSubmit={handleSubmit} className="login-form">
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     className="email-input"
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     className="password-input"
//                 />
//                 <button type="submit" className="login-button">LOGIN</button>
//             </form>
//         </div>
//     );
// }


// pages/login.js








import Head from 'next/head';
import { useRef } from 'react';
import styles from '../styles/Login.css'; // Assuming you save your CSS in this path
import Navbar from '../components/Navbar';


const Login = () => {
  const formRef = useRef(null);

  // Function to handle form submission when neon button is clicked
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default behavior
    formRef.current.submit(); // Manually submit the form
  };

  return (
    <>
      
      <Head>
        <title>Login</title>
      </Head>
      <div className="body">
        <div className="container">
          <div className="login-box">
            <h2>Login</h2>
            <form ref={formRef} action="#">
              <div className="input-box">
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <input type="password" required />
                <label>Password</label>
              </div>
              <div className="forgot-password">
                <a href="#">Forgot Password?</a>
              </div>
              
              {/* Neon Button for form submission */}
              <a className="neon" onClick={handleSubmit}>Login</a>
              
              <div className="signup-link">
                <a href="/register">Signup</a>
              </div>
            </form>
          </div>

          {Array.from({ length: 50 }).map((_, i) => (
            <span key={i} style={{ '--i': i }}></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Login;
