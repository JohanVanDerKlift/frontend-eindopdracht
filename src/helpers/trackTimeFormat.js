function trackTimeFormat(date) {
  const newDate =  new Date(date);
  let minutes = null;
  if (newDate.getUTCMinutes() === 0) {
    minutes = '00';
  } else {
    minutes = newDate.getUTCMinutes();
  }
  return `${newDate.getUTCDate()}-${newDate.getUTCMonth()}-${newDate.getUTCFullYear()}   ${newDate.getUTCHours()}:${minutes}`;
}

export default trackTimeFormat;