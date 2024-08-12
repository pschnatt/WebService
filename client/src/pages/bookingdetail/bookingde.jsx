import React from "react";
import "./bookingde.css";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState, useEffect} from "react";
import Navbar from "../../components/navbar/Navbar";

const BookingPage = () => {
  const [restaurant, setRestaurant] = useState();
  const [user, setUser] = useState();
  const [tableNumber, setTableNumber] = useState('');
  const [seats, setSeats] = useState('');
  const [date, setDate] = useState('');
  const [specialReq, setSpecialReq] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Pay at check-in');
  const [status] = useState('Pending');



  const fetchRestaurant = async () => {
    const id = localStorage.getItem("restaurant_id");
    try {
      const response = await axios.post("/api/restaurants/getRestById", { restaurantId: id });
      setRestaurant(response.data);
    } catch (error) {
      toast.error("Error fetching restaurant resources: " + error.message);
    }
  };

  const fetchUser = async () => {
    try {
      const response = await axios.get("/profile", { withCredentials: true });
      setUser(response.data);
    } catch (error) {
      toast.error("Error fetching user resources: " + error.message);
    }
  };

  const handleConfirmBooking = async (e) => {
    e.preventDefault();
    try {
      const bookingData = {
        userId: user.id,
        restaurantId: restaurant.restaurantId,
        tableNumber,
        seats,
        date,
        specialReq,
        paymentMethod,
        status: "Pending"
      };
  
      const bookingResponse = await axios.post("/api/bookings/createBook", bookingData);



      const historyEntry =  {
        restaurantid: restaurant.restaurantId,
        restaurantname: restaurant.name,
        seat: seats,
        price: "10",
        date,
        status: "Pending"
      };

      const historyResponse = await axios.post("/addHistory", {
        user_id: user.id,
        newHistory : historyEntry
      });

      if (historyResponse.data.error) {
        toast.error('Error adding history entry: ' + historyResponse.data.error);
      } else {
        toast.success('History entry added successfully!');
      }
  
      if (bookingResponse.data.error) {
        toast.error(bookingResponse.data.error);
      } else {
        toast.success('Booking Successful!');
      }
    } catch (error) {
      console.error('Error during booking or adding history:', error);
      toast.error('An error occurred during booking.');
    }
  };

  useEffect(() => {
    fetchRestaurant();
    fetchUser();
  }, []);

  return (
    <div>
      <Navbar />
        <div className="bookingPageContainer">
        <div className="leftSection">
            <div className="bookingDetails">
            <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/27/9f/45/bc/restaurant.jpg"
                alt="Property"
                className="propertyImage"
            />
            <div className="propertyInfo">
                <h2>{restaurant?.name}</h2>
                <p>{restaurant?.address}</p> 
                <p>Italian Restaurant</p>
            </div>
            </div>

            <div className="bookingInputs">
            <div className="inputGroup">
              <label>Reservation Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="inputGroup">
              <label>Seats</label>
              <input
                type="number"
                placeholder={1}
                value={seats}
                onChange={(e) => setSeats(e.target.value)}
              />
            </div>
            <div className="inputGroup">
              <label>Table Number</label>
              <input
                type="text"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
              />
            </div>
            <button className="updateDetailsButton">Update details</button>
          </div>

            <div className="houseRules">
            <h3>House rules</h3>
            <div className="rule">
                <p>Pets are not allowed</p>
            </div>
            <div className="rule">
                <p>No Food or Drink From outside</p>
            </div>
            <div className="rule">
                <p>No yelling or disrupting customers in Restaurant</p>
            </div>
            </div>

            <div className="paymentMode">
            <h3>Please select your preferred payment mode</h3>
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <option>Pay at check-in</option>
              <option>Credit Card</option>
              <option>PayPal</option>
            </select>
            <p>Pay the full booking amount only at check in.</p>
            </div>
            <div className="inputGroup2">
              <label>Special Requests</label>
              <input
                type="text"
                value={specialReq}
                onChange={(e) => setSpecialReq(e.target.value)}
              />
            </div>
        </div>

        <div className="rightSection">
          <div className="invoice">
            <h3>Invoice</h3>
            <div className="invoiceItem">
              <span>Reservation Name:</span>
              <span>{user?.username}</span>
            </div>
            <div className="invoiceItem">
              <span>Contact Email:</span>
              <span>{user?.username}@example.com</span>
            </div>
            <div className="invoiceItem">
              <span>Contact Number:</span>
              <span>(555) 123-4567</span>
            </div>
            <div className="invoiceItem">
              <span>Seat</span>
              <span>{seats}</span>
            </div>
            <div className="invoiceItem">
              <span>Table Number</span>
              <span>{tableNumber}</span>
            </div>
            <div className="invoiceItem">
              <span>Payment Method</span>
              <span>{paymentMethod}</span>
            </div>
            <div className="invoiceItem">
              <span>Special Request</span>
              <span>{specialReq}</span>
            </div>
            <button className="confirmButton" onClick={handleConfirmBooking}>Confirm booking</button>
          </div>
        </div>
        </div>
    </div>
  );
};

export default BookingPage;
