import React, {useState} from 'react';
import './Race.css';
import useFetch from "../../hooks/useFetch";
import {useParams} from "react-router-dom";
import RaceWeekend from "../../components/raceWeekend/RaceWeekend";

function Race(props) {
  const [localTime, setLocalTime] = useState(true);
  const {raceId} = useParams();
  console.log(raceId)
  const {data: race, loading, error} = useFetch({endpoint: 'races', keys: `?id=${raceId}`})
  console.log(race);
  console.log(localTime);

  return (
    <>
      {loading && <span>Loading...</span>}
      {error && <span>An error occurred while loading the data</span>}
      {race &&
        <>
          <h1 className="drivers-header">{race[0].circuit.name}</h1>
        </>
      }
      <div className="slider-container">
        <span>Track time</span>
        <label className="switch" htmlFor="time-switch">
          <input type="checkbox" id="time-switch" checked={localTime} onChange={() => setLocalTime(!localTime)}/>
          <span className="slider round"></span>
        </label>
        <span>Local time</span>
      </div>
      <div className="container">
        {race &&
          <RaceWeekend
            season={race[0].season}
            circuitName={race[0].circuit.name}
            localTime={localTime}
          />
        }
      </div>
    </>
  )
}

export default Race;