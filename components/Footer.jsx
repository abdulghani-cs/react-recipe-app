import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook'; 
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 text-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        <div className="mb-4 lg:mb-0">
          <p>&copy; 2024 Abdul Ghani Chef. All rights reserved.</p>
          <p>City: Karachi, Address: Gulistan-e-Jauhar</p>
          <p>Phone: 0334 55567788</p>
        </div>
        <div>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 ml-2"
          >
            <FacebookIcon fontSize="small" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 ml-2"
          >
            <TwitterIcon fontSize="small" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 ml-2"
          >
            <InstagramIcon fontSize="small" />
          </a>
          <a
            href="https://wa.me/1234567890" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 ml-2"
          >
            <WhatsAppIcon fontSize="small" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
