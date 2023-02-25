import getGmt from "./getGmt";

function trackTimeFormat(date, city) {
  const newDate =  new Date(date);
  // console.log(newDate);
  const trackTime = newDate.toLocaleString("nl-NL", {timeZone: getGmt(city)});
  // console.log(trackTime);
  return trackTime.slice(0, -3);
}

export default trackTimeFormat;