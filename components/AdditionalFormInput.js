export const addMeetingDateandTime = () => {
  const lastDiv = document.getElementById("lastDiv");
  let div = document.createElement("div");
  div.setAttribute("class", "flex");
  let date = document.createElement("input");
  date.setAttribute("type", "date");
  date.setAttribute("date", "date");
  let startTime = document.createElement("input");
  startTime.setAttribute("type", "time");
  startTime.setAttribute("name", "startTime");
  let endTime = document.createElement("input");
  endTime.setAttribute("type", "time");
  endTime.setAttribute("name", "endTime");
  lastDiv.after(div);
  div.append(date, startTime, endTime);
};
