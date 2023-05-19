import React from 'react';
import "../styles/BookingPage.css";
import BookingForm from './BookingForm';

const BookingPage = () => {
  return (
    <div className="res-content-wrapper">
        <div className="res-content-container">
            <div className="form">
                <h1>Reservations!</h1>
                <BookingForm />
            </div>
        </div>
    </div>
  )
}

export default BookingPage