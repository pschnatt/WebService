import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faUtensils } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = ({ showSearchItems = true }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSearchClick = () => {
    navigate("/restaurants");
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <h1 className="headerTitle">An Easy Way to Have a Meal</h1>
        <p className="headerDesc">Find A nice Restaurant With a Promotion!</p>
        <button className="headerBtn" onClick={handleLoginClick}>Sign in</button>
        {showSearchItems && (
          <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faUtensils} className="headerIcon" />
              <input
                type="text"
                placeholder="Where do you want to eat?"
                className="headerSearchInput"
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
              <button className="headerBtn" onClick={handleSearchClick}>Search</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
