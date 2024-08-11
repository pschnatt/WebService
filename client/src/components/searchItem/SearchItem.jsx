import React from 'react';
import "./searchItem.css";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchItem = ({ id, imageUrl, title, address, phoneNumber, startprice, Rating = 8.1, maxseats }) => {
  const navigate = useNavigate();
  const handleMoreDetailClick = async () => {
    try {
      const response = await axios.get(`/api/restaurants/getRestById`,{id});
      const restaurantData = response.data;
      
      console.log('Restaurant details:', restaurantData);
      toast.info(`Details: ${JSON.stringify(restaurantData)}`);
      
      // Pass the restaurant data in the state
      navigate(`/restaurant/${id}`, { state: { restaurant: restaurantData } });
    } 
    catch (error) {
      console.error('Error fetching restaurant details:', error);
      toast.error('Error fetching restaurant details');
    }
  };

  return (
    <div className="searchItem">
      <img
        src={imageUrl}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{title}</h1>
        <span className="siDistance">{address}</span>
        <span className="siTaxiOp">Free Wifi</span>
        <span className="siSubtitle">
          {phoneNumber}
        </span>
        <span className="siFeatures">
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          Max seats are {maxseats}
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>{Rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Start From ${startprice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={handleMoreDetailClick}>More Detail</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
