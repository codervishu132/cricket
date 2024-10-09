import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import styles from '../styles/Login.css';
const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user', // default role is 'user', can be changed if necessary
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/register', formData); // Adjust API route if necessary
      if (res.data) {
        setSuccess('Registration successful! Redirecting to login page...');
        setTimeout(() => {
          router.push('/login'); // Redirect to login page after registration
        }, 2000); // 2-second delay before redirect
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error registering user');
    }
  };

  return (
    <>
     
      <Head>
        <title>Register</title>
      </Head>
      <div className='body'>
        <div className='container'>
          <div className='login-box'>
            <h2>Register</h2>
            <form action="#">
              <div className='input-box'>
                <input type="text" required />
                <label>Name</label>
              </div>
              <div className='input-box'>
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className='input-box'>
                <input type="password" required />
                <label>Password</label>
              </div>
              <div className='input-box'>
                <input type="password" required />
                <label>Confirm Password</label>
              </div>
              <button type="submit" className="btn">
                Register
              </button>
              <div className='signup-link'>
                <a href="/login">Already have an account? Login</a>
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

export default Register;