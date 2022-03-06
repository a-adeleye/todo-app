export const isToday = (date) => {
  let today = new Date().getDate();
  let dueDate = new Date(date).getDate();
  return today === dueDate;
};

export const isThisMonth = (date) => {
  let thisMonth = new Date().getMonth();
  let dueDateMonth = new Date(date).getMonth();
  return thisMonth === dueDateMonth;
};

export const isThisWeek = (date) => {
  return currentWeek() === dateWeek(date);
};

const currentWeek = () => {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil((currentDate.getDay() + 1 + days) / 7);
  return weekNumber;
};

const dateWeek = (date) => {
  const currentDate = new Date(date);
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil((currentDate.getDay() + 1 + days) / 7);
  return weekNumber;
};
