// slice date yyyy-mm-dd
const sliceDate = (date) => {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);

  return { year, month, day };
};

const getDateInput = () => {
  const monthUTC = new Date().getUTCMonth();
  const dayUTC = new Date().getUTCDate();

  const year = new Date().getUTCFullYear();
  const month = (monthUTC+1).toString().length === 1 ? '0' + (monthUTC+1).toString() : (monthUTC)+1;
  const day = (dayUTC).toString().length === 1 ? '0' + (dayUTC).toString() : dayUTC;
  
  return { year, month, day };
};

export { getDateInput, sliceDate };
