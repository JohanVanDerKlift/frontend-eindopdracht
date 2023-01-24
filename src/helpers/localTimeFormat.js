function localTimeFormat(date) {
  const newDate =  new Date(date);
  let minutes = null;
  if (newDate.getMinutes() === 0) {
    minutes = '00';
  } else {
    minutes = newDate.getMinutes();
  }
  return `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}   ${newDate.getHours()}:${minutes}`;
}

export default localTimeFormat;