import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faUtensils } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import axios from 'axios';

const Header = ({ showSearchItems = true }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [destination, setDestination] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSearch = () => {
    navigate("/restaurants", { state: { destination, selectedDate} });
  };

  const fetchUser = async () => {
    try {
      const response = await axios.get("/profile", { withCredentials: true });
      setUser(response.data);
    } catch (error) {
      toast.error("Error fetching user resources: " + error.message);
    }
  };

  useEffect(() => {
    const token = Cookies.get('token')
    if (token) {
      fetchUser();
    }
    console.log('Token from cookies:', token)
    setIsLoggedIn(token !== undefined)
  }, []);
  
  return (
    <div className="header">
      <div className="headerContainer">
        <h1 className="headerTitle">An Easy Way to Have a Meal</h1>
        <p className="headerDesc">Find A nice Restaurant With a Promotion!</p>
        {isLoggedIn ? (
          <span className="headerWelcome">Welcome, {user?.username}</span>
        ) : (
          <button className="headerBtn" onClick={handleLoginClick}>Sign in</button>
        )}
        {showSearchItems && (
          <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faUtensils} className="headerIcon" />
              <input
                type="text"
                placeholder="Where do you want to eat?"
                className="headerSearchInput"
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="MM/dd/yyyy"
                className="headerDatePicker"
              />
            </div>
            <div className="headerSearchItem">
              <button className="headerBtn" onClick={handleSearch}>Search</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
