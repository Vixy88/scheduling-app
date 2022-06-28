import { bookingInstance } from "./BookingInstance";

export const addMeetingDateandTime = () => {
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

  let bookingList = [];

  function inputValues() {
    bookingList.push(bookingInstance("1", "1", "1", "1"));
    bookingList.push(bookingInstance("2", "2", "2", "2"));
    console.log(bookingList);
  }

  inputValues();
};
