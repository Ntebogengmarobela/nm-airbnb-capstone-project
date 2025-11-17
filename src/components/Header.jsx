import React, { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./Header.css";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);
  const [locationInput, setLocationInput] = useState("");
  const [activeField, setActiveField] = useState(null);

  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(
    new Date(new Date().setDate(new Date().getDate() + 3))
  );

  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
  });

  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const hideSearch = location.pathname === "/login";

  useEffect(() => {
    setShowAccountDropdown(false);
    setShowLocationDropdown(false);
    setShowGuestsDropdown(false);
    setActiveField(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const accountDropdownRef = useRef(null);
  const locationDropdownRef = useRef(null);
  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);
  const guestsRef = useRef(null);

  const locations = [
    "Select a Location",
    "All Locations",
    "New York",
    "Paris",
    "Tokyo",
    "Thailand",
    "Cape Town",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accountDropdownRef.current &&
        !accountDropdownRef.current.contains(event.target)
      )
        setShowAccountDropdown(false);

      if (
        locationDropdownRef.current &&
        !locationDropdownRef.current.contains(event.target)
      )
        setShowLocationDropdown(false);

      if (guestsRef.current && !guestsRef.current.contains(event.target))
        setShowGuestsDropdown(false);

      if (
        (!checkInRef.current || !checkInRef.current.contains(event.target)) &&
        (!checkOutRef.current || !checkOutRef.current.contains(event.target))
      )
        setActiveField(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const handleGuestChange = (type, delta) => {
    setGuests((prev) => ({
      ...prev,
      [type]: Math.max(prev[type] + delta, 0),
    }));
  };

  const getGuestSummary = () => {
    const total = guests.adults + guests.children;
    const infants = guests.infants > 0 ? `, ${guests.infants} infants` : "";
    return total > 0
      ? `${total} guest${total > 1 ? "s" : ""}${infants}`
      : "Add guests";
  };

  return (
    <div className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-top">
        <div className="header-logo">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5bde0f00c3c16aa95581e2e2/1656015702491-J822CHG9AJYZ6SX0QRVL/Airbnb_Logo_B%C3%A9lo.svg+-+white.png?format=2500w"
            alt="Logo"
            onClick={() => navigate("/")}
          />
        </div>

        <div className="header-center">
          <span>Places to stay</span>
          <span>Experiences</span>
          <span>Online Experiences</span>
        </div>

        <div className="header-right">
          <span>Become a host</span>

          <div className="language-icon">
            <LanguageIcon />
          </div>

          <div className="account-dropdown" ref={accountDropdownRef}>
            <div
              className={`account-icon ${showAccountDropdown ? "active" : ""}`}
              onClick={() => setShowAccountDropdown((prev) => !prev)}
            >
              <MenuIcon />
              <AccountCircleIcon />
            </div>

            <div
              className={`account-dropdown-content ${
                showAccountDropdown ? "active" : ""
              }`}
            >
              {!isLoggedIn ? (
                <span
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Log In
                </span>
              ) : (
                <>
                  <span onClick={() => setIsLoggedIn(false)}>Log Out</span>
                  <span onClick={() => setIsLoggedIn(false)}>
                    View Reservations
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {!hideSearch && (
        <div className="header-search">
          {/* Location */}
          <div className="search-section" ref={locationDropdownRef}>
            <label>Where to</label>
            <input
              type="text"
              placeholder="Search destinations"
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
              onFocus={() => setShowLocationDropdown(true)}
            />

            {showLocationDropdown && (
              <ul className="dropdown glass-panel active">
                {locations
                  .filter((loc) =>
                    loc.toLowerCase().includes(locationInput.toLowerCase())
                  )
                  .map((loc, idx) => (
                    <li
                      key={idx}
                      onClick={() => {
                        setLocationInput(loc);
                        setShowLocationDropdown(false);
                      }}
                    >
                      {loc}
                    </li>
                  ))}
              </ul>
            )}
          </div>

          <div className="divider" />

       
          <div className="search-section" ref={checkInRef}>
            <label>Check in</label>
            <input
              type="text"
              readOnly
              value={format(checkInDate, "MMM d")}
              onClick={() => setActiveField("checkin")}
            />

            {activeField === "checkin" && (
              <div className="date-picker-dropdown active glass-panel">
                <DateRange
                  ranges={[
                    {
                      startDate: checkInDate,
                      endDate: checkInDate,
                      key: "checkin",
                    },
                  ]}
                  onChange={(item) => setCheckInDate(item.checkin.startDate)}
                  moveRangeOnFirstSelection={false}
                  minDate={new Date()}
                  rangeColors={["#FF385C"]}
                  months={1}
                  direction="horizontal"
                />
              </div>
            )}
          </div>

          <div className="divider" />

          <div className="search-section" ref={checkOutRef}>
            <label>Check out</label>
            <input
              type="text"
              readOnly
              value={format(checkOutDate, "MMM d")}
              onClick={() => setActiveField("checkout")}
            />

            {activeField === "checkout" && (
              <div className="date-picker-dropdown active glass-panel">
                <DateRange
                  ranges={[
                    {
                      startDate: checkOutDate,
                      endDate: checkOutDate,
                      key: "checkout",
                    },
                  ]}
                  onChange={(item) => setCheckOutDate(item.checkout.startDate)}
                  moveRangeOnFirstSelection={false}
                  minDate={checkInDate}
                  rangeColors={["#FF385C"]}
                  months={1}
                  direction="horizontal"
                />
              </div>
            )}
          </div>

          <div className="divider" />

            <div className="search-section" ref={guestsRef}>
            <label>Who</label>
            <input
              type="text"
              className="guests-input"
              value={getGuestSummary()}
              readOnly
              onClick={() => setShowGuestsDropdown((prev) => !prev)}
            />

            {showGuestsDropdown && (
              <div className="dropdown active glass-panel guests-dropdown">
                {["adults", "children", "infants"].map((type) => (
                  <div key={type} className="guest-row">
                    <span className="guest-label">
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </span>

                    <div className="guest-controls">
                      <button
                        onClick={() => handleGuestChange(type, -1)}
                        disabled={guests[type] === 0}
                      >
                        -
                      </button>

                      <span>{guests[type]}</span>

                      <button onClick={() => handleGuestChange(type, 1)}>
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="search-button">
            <SearchIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
