
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Email.css';
import bannerImage1 from"../src/image/email.png";
export const Email = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    dressName: '',
    mobileNumber: '',
    dressSize: 'XL',
    chestSize: '1',
    waistSize: '1',
    color: 'Red',
    gender: 'Male',
  });

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  const sendEmail = (e) => {
    e.preventDefault();

    // Send the email using EmailJS
    emailjs.sendForm('service_uhk59zw', 'template_hcfv1e9', form.current, 'Bl6kKAndD47fG_Gtw')
      .then((result) => {
        console.log(result.text);
        alert("Order Confirmed. Expected Delivery: 2 Days."); // Show success message
        // Reset the form after successful submission
        setFormData({
          name: '',
          address: '',
          dressName: '',
          mobileNumber: '',
          dressSize: 'XL',
          chestSize: '1',
          waistSize: '1',
          color: 'Red',
          gender: 'Male',
        });
      }, (error) => {
        console.log(error.text);
        alert('Failed to place the order. Please try again.'); // Show error message
      });
  };

  return (
    <div>
   <div className="page-container">
      <div className="left-section">
        <div className="image-container">
          <img src={bannerImage1} alt="Your Image" className="attached-image" />
        </div>
      </div>
      <div className="right-section">
        <div className="order-card">
          <div className="order-form-container"></div>
          <center><b>ORDER NOW!</b></center>
          
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>Address</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
        <label>Dress Name</label>
        <input type="text" name="dressName" value={formData.dressName} onChange={handleChange} />
        <label>Mobile Number</label>
        <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />

        <label>Dress Size</label>
        <select name="dressSize" value={formData.dressSize} onChange={handleChange}>
          <option value="X">X</option>
          <option value="S">S</option>
          <option value="XL">XL</option>
          <option value="M">M</option>
          <option value="XXL">XXL</option>
          <option value="XS">XS</option>
          <option value="L">L</option>
          {/* Add other sizes */}
        </select>

        <label>Chest Size</label>
        <select name="chestSize" value={formData.chestSize} onChange={handleChange}>
          {Array.from({ length: 100 }, (_, i) => (
            <option key={i} value={i + 1}>{i + 1}</option>
          ))}
        </select>

        <label>Waist Size</label>
        <select name="waistSize" value={formData.waistSize} onChange={handleChange}>
          {Array.from({ length: 100 }, (_, i) => (
            <option key={i} value={i + 1}>{i + 1}</option>
          ))}
        </select>

        <label>Color</label>
        <select name="color" value={formData.color} onChange={handleChange}>
          <option value="Red">Red</option>
          <option value="white">white</option>
          <option value="Deniam blue">Deniam blue</option>
          <option value="black">black</option>
          <option value="Yellow">Yellow</option>
          <option value="peacock blue">peacock blue</option>
          <option value="pink">pink</option>
          <option value="sea green">sea green</option>
          <option value="gold sparkle">gold sparkle</option>
          <option value="purple">purple</option>
          <option value="wine">wine</option>
          <option value="deep lake">deep lake</option>
          <option value="blood red">blood red</option>
          <option value="old rose">old rose</option>
          <option value="blue shadow">blue shadow</option>
          <option value="Chestnut Red">Chestnut Red</option>
        
        </select>

        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          {/* Add other genders */}
        </select>

        <input type="submit" value="Order Now" />
      </form>
    </div>
   
    </div></div>
  </div>
  );
};
