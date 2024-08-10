import React from "react";
import "./bookingde.css";

const BookingPage = () => {
  return (
    <div>
        <div className="bookingPageContainer">
        <div className="leftSection">
            <div className="bookingDetails">
            <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/27/9f/45/bc/restaurant.jpg"
                alt="Property"
                className="propertyImage"
            />
            <div className="propertyInfo">
                <h2>Panoramic Resaurant</h2>
                <p>Baga, North Goa, Goa</p> 
                <p>Italian Restaurant</p>
            </div>
            </div>

            {/* Separated Booking Inputs */}
            <div className="bookingInputs">
            <div className="inputGroup">
                <label>Reserv. Date</label>
                <input type="text" value="Wed, 12 Jan" readOnly />
            </div>
            <div className="inputGroup">
                <label>Adult</label>
                <input type="text" value="3" readOnly />
            </div>
            <div className="inputGroup">
                <label>Children</label>
                <input type="text" value="1" readOnly />
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
            <select>
                <option>Pay at check in</option>
            </select>
            <p>Pay the full booking amount only at check in.</p>
            </div>
        </div>

        <div className="rightSection">
          <div className="invoice">
            <h3>Invoice</h3>
            <div className="invoiceItem">
              <span>Reservation Name:</span>
              <span>John Doe</span>
            </div>
            <div className="invoiceItem">
              <span>Contact Email:</span>
              <span>john.doe@example.com</span>
            </div>
            <div className="invoiceItem">
              <span>Contact Number:</span>
              <span>(555) 123-4567</span>
            </div>
            <div className="invoiceItem">
              <span>Adult number</span>
              <span>2</span>
            </div>
            <div className="invoiceItem">
              <span>Childrent number</span>
              <span>4</span>
            </div>
            <div className="invoiceItem">
              <span>Reservation Price</span>
              <span>$400</span>
            </div>
            <div className="invoiceItem">
              <span>Application fee</span>
              <span>$50</span>
            </div>
            <div className="invoiceItem total">
              <span>Total amount</span>
              <span>$450</span>
            </div>
            <div className="invoiceItem">
              <span>Coupon discount</span>
              <span>-$50</span>
            </div>
            <div className="invoiceItem finalAmount">
              <span>Booking amount</span>
              <span>$400</span>
            </div>
            <button className="confirmButton">Confirm booking</button>
          </div>
        </div>
        </div>
    </div>
  );
};

export default BookingPage;
