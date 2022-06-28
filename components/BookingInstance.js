export const bookingInstance = (
  firstname,
  lastname,
  date,
  starttime,
  endtime,
  employeeid
) => {
  return {
    firstname: firstname,
    lastname: lastname,
    date: date,
    starttime: starttime,
    endtime: endtime,
    employeeid: employeeid,
  };
};
