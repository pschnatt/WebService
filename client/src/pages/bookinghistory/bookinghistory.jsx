import React, { useEffect, useState } from 'react';
import './bookinghistory.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

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

  return (
    <div className="booking-history">
      <Navbar />
      <button className="back-button" onClick={() => navigate('/')}>Back to Home</button>
      <button className="back-button" onClick={() => navigate('/restaurants')}>Back to List</button>
      <h2>Booking History</h2>
      <div className="filters">
        <button className={filter === 'ALL' ? 'active' : ''} onClick={() => setFilter('ALL')}>
          ALL
        </button>
        <button className={filter === 'Incomplete' ? 'active' : ''} onClick={() => setFilter('Incomplete')}>
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
            <th>Action</th>
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
              <td>
                <button className="details-button">Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="details-button" style={{ marginTop: '20px' }}>
        Load More
      </button>
    </div>
  );
};

export default BookingHistory;
