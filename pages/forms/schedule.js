import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabaseClient.js";
import { addMeetingDateandTime } from "../../components/AdditionalFormInput.js";
import { bookingInstance } from "../../components/BookingInstance.js";

export default function Schedule() {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Post data to the form
    const { data, error } = await supabase.from("bookings").insert([
      {
        firstname: event.target.firstName.value,
        lastname: event.target.lastName.value,
        date: event.target.datePicker.value,
        starttime: event.target.startTime.value,
        endtime: event.target.endTime.value,
        employeeid: event.target.empId.value,
      },
    ]);
  };

  return (
    <div className="main">
      <div>
        <h1 className="container">Schedule your meetings here</h1>
        <form onSubmit={handleSubmit} id="schedulingForm" className="container">
          <div className="container">
            <div>
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
            <div id="lastDiv">
              <label htmlFor="employerId">Employer ID</label>
              <input type="text" id="empId" name="empId" required />
            </div>
          </div>
          <div
            className="container"
            style={{ display: "flex", marginTop: "10px" }}
          >
            <div>
              <input type="date" id="datePicker" name="datePicker" required />
            </div>
            <div>
              <input type="time" id="startTime" name="startTime" required />
            </div>
            <div>
              <input type="time" id="endTime" name="endTime" required />
            </div>
          </div>
          <div className="container" style={{ marginTop: "10px" }}>
            <button onClick={addMeetingDateandTime} id="addBookingBtn">
              Add More Bookings
            </button>
          </div>
          <div className="container" style={{ marginTop: "10px" }}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
