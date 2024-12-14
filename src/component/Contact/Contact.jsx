import React, { useState } from 'react';
import msg_icon from '../../assets/msg-icon.png';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    
    const form = new FormData(event.target);
    form.append('access_key', 'ac085c1e-f71e-410b-8c11-e0cf8f055494');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: form,
      });

      const data = await response.json();
      
      if (data.success) {
        setResult('Form Submitted Successfully');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setResult(data.message || 'Error submitting form');
      }
    } catch (error) {
      setResult('Error submitting form');
      console.error('Error:', error);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send a message <img src={msg_icon} alt="Message Icon" />
        </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <ul>
          <li>Contact@gmail.com</li>
          <li>+91 8585885858</li>
          <li>12th Floor, AMA Road, East Carter Road</li>
        </ul>
      </div>
      <div className="contact-col">
        <h3>Contact Form</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
