import React, { useEffect, useState } from 'react';
import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SearchItem from "../../components/searchItem/SearchItem";
import axios from 'axios';
import { toast } from 'react-toastify';


const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state?.destination || "");
  const [date, setDate] = useState(location.state?.selectedDate || new Date());
  const [openDate, setOpenDate] = useState(false);
  const [seats, setSeats] = useState(location.state?.options?.seats || 1);
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState(location.state?.destination);

  useEffect(() => {
    axios.get("/api/restaurants/getRest")
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((error) => toast.error("Error fetching restaurant resources:", error));
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <Header showSearchItems={false} />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Restaurant Name</label>
              <input
                placeholder={destination}
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DatePicker
                  placeholder={date}
                  selected={date}
                  onChange={(newDate) => setDate(newDate)}
                  dateFormat="MM/dd/yyyy"
                  className="headerDatePicker"
                  inline
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Seat</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={seats}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            {filteredRestaurants.map((restaurant) => (
              <SearchItem
                id={restaurant.restaurantId}
                imageUrl={restaurant.imageUrl || "https://media-cdn.tripadvisor.com/media/photo-s/27/9f/45/bc/restaurant.jpg"}
                title={restaurant.name}
                address={restaurant.address || "N/A"}
                phoneNumber={restaurant.phoneNumber}
                startprice={restaurant.startingPrice || "20"}
                Rating={restaurant.rating || "N/A"}
                maxseats={restaurant.totalSeats || "30"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
