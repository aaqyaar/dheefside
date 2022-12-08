export const fDate = (date: Date) => {
  const convertToDate = new Date(date);
  const day = convertToDate.getDate();
  const month = convertToDate.getMonth() + 1;
  const year = convertToDate.getFullYear();
  return `${day}/${month}/${year}`;
};

export const fTime = (date: Date) => {
  // calculate the time difference between now and the date
  const diff = new Date().getTime() - new Date(date).getTime();
  // get the number of days between the two dates
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  // get the number of hours between the two dates
  const hours = Math.floor(diff / (1000 * 60 * 60));
  // get the number of minutes between the two dates
  const minutes = Math.floor(diff / (1000 * 60));
  // get the number of seconds between the two dates
  const seconds = Math.floor(diff / 1000);
  if (days > 0) {
    return `${days} days ago`;
  }
  if (hours > 0) {
    return `${hours} hours ago`;
  }
  if (minutes > 0) {
    return `${minutes} minutes ago`;
  }
  if (seconds > 0) {
    return `${seconds} seconds ago`;
  }
  return "Just now";
};
