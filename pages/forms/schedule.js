import { supabase } from "../../utils/supabaseClient.js";
import { addMeetingDateandTime } from "../../components/AdditionalFormInput.js";
import { bookingInstance } from "../../components/BookingInstance.js";

export default function Schedule() {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    let bookingList = [];

    function inputValues() {
      bookingList.push(
        bookingInstance(
          event.target.firstName.value,
          event.target.lastName.value,
          event.target.datePicker.value,
          event.target.startTime.value,
          event.target.endTime.value,
          event.target.empId.value
        )
      );
      console.log(bookingList);
    }

    inputValues();

    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Post data to supabase bookings table
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

    // Logs the error in the console
    console.log("Error:", error);

    // Logs the data submitted in the console
    console.log("Data Inserted:", data);
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
            <div>
              <label htmlFor="empId">Employer ID</label>
              <input type="text" id="empId" name="empId" required />
            </div>
            <div className="flex" id="lastDiv">
              <div className="w-33">
                <label htmlFor="datePicker">Date</label>
                <input type="date" id="datePicker" name="datePicker" required />
              </div>
              <div className="w-33">
                <label htmlFor="startTime">Start Time</label>
                <input type="time" id="startTime" name="startTime" required />
              </div>
              <div className="w-33">
                <label htmlFor="endTime">End Time</label>
                <input type="time" id="endTime" name="endTime" required />
              </div>
            </div>
          </div>

          <div className="container" style={{ marginTop: "10px" }}>
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className="container" style={{ marginTop: "10px" }}>
          <button onClick={addMeetingDateandTime} id="addBookingBtn">
            Add More Bookings
          </button>
        </div>
      </div>
    </div>
  );
}
