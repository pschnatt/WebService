import React, { useEffect, useState } from 'react';
import './bookinghistory.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/navbar/Navbar";

const BookingHistory = () => {
  const [filter, setFilter] = useState('ALL');
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/profile', {
      withCredentials: true 
    })
      .then((response) => {
        setHistory(response.data.history)
      })
      .catch((error) => toast.error("Error fetching restaurant resources:", error));
  }, []);

  const filteredBookings = history.filter(
    (booking) => filter === 'ALL' || booking.status.toLowerCase() === filter.toLowerCase()
  );

  const [selectedDate] = useState(new Date());
  const [destination] = useState("");

  const handleList = () => {
    navigate("/restaurants", { state: { destination, selectedDate} });
  };

  return (
    <>
      <Navbar />
      <div className="booking-history">
        
        <button className="back-button" onClick={() => navigate('/')}>Back to Home</button>
        <button className="back-button" onClick={handleList}>Back to List</button>
        <h2>Booking History</h2>
        <div className="filters">
          <button className={filter === 'ALL' ? 'active' : ''} onClick={() => setFilter('ALL')}>
            ALL
          </button>
          <button className={filter === 'Pending' ? 'active' : ''} onClick={() => setFilter('Pending')}>
            PENDING
          </button>
          <button className={filter === 'Cancelled' ? 'active' : ''} onClick={() => setFilter('Cancelled')}>
            CANCELLED
          </button>
          <button className={filter === 'Completed' ? 'active' : ''} onClick={() => setFilter('Completed')}>
            COMPLETED
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>#ID</th>
              <th>Restaurant Name</th>
              <th>Date</th>
              <th>Cost</th>
              <th>Seat</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking) => (
              <tr key={`${booking.restaurantid} : ${booking.date}`}>
                <td>{booking.restaurantid}</td>
                <td>{booking.restaurantname}</td>
                <td>{booking.date}</td>
                <td>{booking.price}</td>
                <td>{booking.seat}</td>
                <td className={booking.status.toLowerCase()}>{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="details-button" style={{ marginTop: '20px' }}>
          Load More
        </button>
      </div>
    </>
  );
};

export default BookingHistory;
