import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Book Appointment</a></li>
              <li><a href="#" className="hover:text-white">Doctors</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
            </ul>
          </div>

          {/* Column 2: Departments */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Departments</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Cardiology</a></li>
              <li><a href="#" className="hover:text-white">Neurology</a></li>
              <li><a href="#" className="hover:text-white">Pediatrics</a></li>
              <li><a href="#" className="hover:text-white">Orthopedics</a></li>
              <li><a href="#" className="hover:text-white">General Medicine</a></li>
            </ul>
          </div>

          {/* Column 3: Our Clinic */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Our Clinic</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>

          {/* Column 4: Appointment Reminder */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Stay Updated</h3>
            <p className="text-gray-400 text-sm">
              Subscribe to get appointment reminders and health tips.
            </p>
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 bg-gray-800 text-sm text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-white"
              />
              <button className="px-4 py-2 bg-white text-black text-sm font-semibold hover:bg-gray-200 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2024 MedicaCare. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-white">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="hover:text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="hover:text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="hover:text-white">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
