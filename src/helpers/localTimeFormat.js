function localTimeFormat(date) {
  const newDate =  new Date(date);
  const localTime = newDate.toLocaleString("nl-NL");
  return localTime.slice(0, -3);
}

export default localTimeFormat;