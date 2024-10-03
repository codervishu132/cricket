// 'use client';  // Add this at the top of the file

// import React, { useState } from 'react';
// import axios from 'axios';
// // Remove the import for express as it's not needed in client-side code

// export default function UserLogin() {
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
//         <div>
//             <h2>User Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">LOGIN</button>
//             </form>
//         </div>
//     );
// }

'use client'; // Add this at the top of the file

import React, { useState } from 'react';
import axios from 'axios';
import './userLogin.css'; // Import your CSS file

export default function UserLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/login', { email, password });
            console.log('Login Successful', response.data);
            // Handle successful login (e.g., redirect, set user state, etc.)
        } catch (error) {
            console.error('Login Failed', error);
            // Handle login failure (e.g., show error message)
        }
    };

    return (
        <div className="user-login-container">
            <h2>User Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="email-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="password-input"
                />
                <button type="submit" className="login-button">LOGIN</button>
            </form>
        </div>
    );
}
