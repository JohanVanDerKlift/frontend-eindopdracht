import React from 'react';
import './RaceWeekend.css';
import useFetch from "../../hooks/useFetch";
import localTimeFormat from "../../helpers/localTimeFormat";
import trackTimeFormat from "../../helpers/trackTimeFormat";

function RaceWeekend({season, circuitName, localTime}) {
  console.log(season + circuitName);
  const {data: races} = useFetch({endpoint: 'races', keys: `?season=${season}`})
  let raceWeekend;
  // let sprint = false;
  if (races) {
    raceWeekend = (races.filter((race) => {
      return race.circuit.name === circuitName;
    }))
    console.log(raceWeekend);
    // sprint = races.filter((race) => {
    //   return race.type === 'Sprint';
    // })
  }

  return (
    <>
      {raceWeekend &&
        <div className="race-weekend-container">
          {/*<img className="circuit-image" src={raceWeekend[0].circuit.image} alt="Circuit"/>*/}
          <div className="race-weekend-schema-container">
            <div className="left-container">
              <p>1st Practice</p>
              <p>2nd Practice</p>
              <p>3rd Practice</p>
              <p>Qualifying</p>
              <p>Race</p>
            </div>
            <div className="right-container">
              {/*{sprint && <span>Sprint</span>}*/}
              <p>{localTime
                ? localTimeFormat(raceWeekend[4].date)
                : trackTimeFormat(raceWeekend[4].date)
              }</p>
              <p>{localTime
                ? localTimeFormat(raceWeekend[3].date)
                : trackTimeFormat(raceWeekend[3].date)
              }</p>
              <p>{localTime
                ? localTimeFormat(raceWeekend[2].date)
                : trackTimeFormat(raceWeekend[2].date)
              }</p>
              <p>{localTime
                ? localTimeFormat(raceWeekend[1].date)
                : trackTimeFormat(raceWeekend[1].date)
              }</p>
              <p>{localTime
                ? localTimeFormat(raceWeekend[0].date)
                : trackTimeFormat(raceWeekend[0].date)
              }</p>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default RaceWeekend;