import React, { useState, useRef, useEffect } from "react";
import "./Footer.css";
import LanguageIcon from "@mui/icons-material/Language";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [currOpen, setCurrOpen] = useState(false);

  const langRef = useRef();
  const currRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
      if (currRef.current && !currRef.current.contains(e.target)) {
        setCurrOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h4>Support</h4>
          <p>Help Center</p>
          <p>Get help with a safety issue</p>
          <p>AirCover</p>
          <p>Anti-discrimination</p>
          <p>Disability support</p>
          <p>Cancellation options</p>
          <p>Report neighborhood concern</p>
        </div>

        <div className="footer-column">
          <h4>Hosting</h4>
          <p>Airbnb your home</p>
          <p>Airbnb your experience</p>
          <p>Airbnb your service</p>
          <p>AirCover for Hosts</p>
          <p>Hosting resources</p>
          <p>Community forum</p>
          <p>Hosting responsibly</p>
          <p>Join a free Hosting class</p>
          <p>Find a co-host</p>
          <p>Refer a host</p>
        </div>

        <div className="footer-column">
          <h4>Airbnb</h4>
          <p>2025 Summer Release</p>
          <p>Newsroom</p>
          <p>Careers</p>
          <p>Investors</p>
          <p>Airbnb.org emergency stays</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 NM-AIRBNB-CAPSTONE-PROJECT · Privacy · Terms</p>

        <div className="footer-bottom-right">
          <div
            className={`footer-dropdown ${langOpen ? "active" : ""}`}
            ref={langRef}
            onClick={() => setLangOpen(!langOpen)}
          >
            <div className="footer-click">
              <LanguageIcon className="footer-icon" />
              <span>English</span>
            </div>

            {langOpen && (
              <div className="footer-dropdown-menu active">
                <span>English</span>
                <span>Spanish</span>
                <span>French</span>
              </div>
            )}
          </div>

          <div
            className={`footer-dropdown ${currOpen ? "active" : ""}`}
            ref={currRef}
            onClick={() => setCurrOpen(!currOpen)}
          >
            <div className="footer-click">
              <CurrencyExchangeIcon className="footer-icon" />
              <span>R ZAR</span>
            </div>

            {currOpen && (
              <div className="footer-dropdown-menu active">
                <span>R ZAR</span>
                <span>USD</span>
                <span>EUR</span>
                <span>GBP</span>
              </div>
            )}
          </div>

          <FacebookIcon className="footer-icon" />
          <XIcon className="footer-icon" />
          <InstagramIcon className="footer-icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
