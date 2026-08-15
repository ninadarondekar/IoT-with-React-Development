import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <>
    <footer className="bg-cyan-700 text-white flex justify-around p-5">

    <div className="parts">
        <h3 className="text-2xl font-bold mb-3">About Us</h3>
        <p className="text-lg">React learning website</p>
    </div>

    <div className="parts">
        <h3 className="text-2xl font-bold mb-3">Quick Links</h3>

        <div className="flex flex-col gap-2">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Contact</a>
        </div>
    </div>

    <div className="parts">
        <h3 className="text-2xl font-bold mb-3">Contact Us</h3>
        <p>Email: example@gmail.com</p>
        <p>Phone: 0123456789
            
        </p>
    </div>

</footer>
    </>
  )
}

export default Footer