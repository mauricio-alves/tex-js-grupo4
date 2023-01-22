const getDateForInput = () => {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

//   const checkIn = new Date(`${year},${month},${day}`);
//   const checkIn = `${year}-
//                    ${(month+1).toString().length === 1 ? '0' + (month+1).toString() : month+1}-
//                    ${(day).toString().length === 1 ? '0' + day.toString() : day}`;
  
  const checkIn = year + '-' +
                  ((month+1).toString().length === 1 ? '0' + (month+1).toString() : month+1) + '-' +
                  ((day).toString().length === 1 ? '0' + day.toString() : day);
  
  const checkOut = year + '-' +
                   ((month+1).toString().length === 1 ? '0' + (month+1).toString() : month+1) + '-' +
                   ((day+1).toString().length === 1 ? '0' + (day+1).toString() : day+1);

  return { checkIn, checkOut };
};

export { getDateForInput };
