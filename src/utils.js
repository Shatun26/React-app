export function formattedDate(d = new Date()) {
  let month = String(d.getMonth() + 1);
  let day = String(d.getDate());
  const year = String(d.getFullYear());
  
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  
  return `${day}.${month}.${year}`;
  }
  
  export function formattedTime(d = new Date()) {
  let hours = String(d.getHours());
  let minutes = String(d.getMinutes());
  
  if (hours.length < 2) hours = "0" + hours;
  if (minutes.length < 2) minutes = "0" + minutes;
  
  return `${hours}:${minutes}`;
  }