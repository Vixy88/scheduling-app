import { Router } from "next/router";
import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabaseClient.js";

export default function Schedule() {
  const handleFormInputCreation = () => {
    const lastDiv = document.getElementById("lastDiv");
    let date = document.createElement("input");
    let div = document.createElement("div");
    date.setAttribute("type", "date");
    date.setAttribute("date", "date");
    date.setAttribute("placeholder", "Date");
    let startTime = document.createElement("input");
    startTime.setAttribute("type", "time");
    startTime.setAttribute("name", "startTime");
    startTime.setAttribute("placeholder", "Start Time");
    let endTime = document.createElement("input");
    endTime.setAttribute("type", "time");
    endTime.setAttribute("name", "endTime");
    endTime.setAttribute("placeholder", "End Time");
    lastDiv.after(div);
    div.append(date, startTime, endTime);
  };

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
          <div className="container" style={{ display: "flex" }}>
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
          <div className="container">
            <button onClick={handleFormInputCreation}>Add More Bookings</button>
          </div>
          <div className="container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
