import React, { useState } from 'react';
import './bookinghistory.css';

const BookingHistory = () => {
  const [filter, setFilter] = useState('ALL');

  const bookings = [
    { id: 101, title: 'The Gourmet Kitchen', timestamp: '2024-08-01 19:30', cost: '€120.00', status: 'Completed' },
    { id: 102, title: 'Seafood Delight', timestamp: '2024-08-02 18:00', cost: '€80.00', status: 'Pending' },
    { id: 103, title: 'Mountain View Café', timestamp: '2024-08-03 12:00', cost: '€50.00', status: 'Cancelled' },
    { id: 104, title: 'Sunset Grill', timestamp: '2024-08-04 20:00', cost: '€150.00', status: 'Completed' },
    { id: 105, title: 'City Lights Diner', timestamp: '2024-08-05 14:30', cost: '€90.00', status: 'Completed' },
  ];

  const filteredBookings = bookings.filter(
    (booking) => filter === 'ALL' || booking.status.toLowerCase() === filter.toLowerCase()
  );

  return (
    <div className="booking-history">
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
            <th>Timestamp</th>
            <th>Cost</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.title}</td>
              <td>{booking.timestamp}</td>
              <td>{booking.cost}</td>
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
