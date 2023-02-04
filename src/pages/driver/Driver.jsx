import React from 'react';
import './Driver.css';
import useFetch from "../../hooks/useFetch";
import {useParams} from "react-router-dom";

function Driver() {
  const {driverId} = useParams();
  const {data: driver, loading, error} = useFetch({endpoint: 'drivers', keys: `?id=${driverId}`});


  console.log(driverId);

  return (
    <>
      {loading && <span>Loading...</span>}
      {error && <span>An error occurred while loading the data</span>}
      {driver &&
        <div className="container driver-container">
          <img className="driver-image" src={driver[0].image} alt=""/>
          <div className="info-container">
            <h2 className="driver-name">{driver[0].name}</h2>
            <div className="driver-info">
              <p>Born in {driver[0].birthplace}, {driver[0].birthdate}</p>
              <p>Nationality: {driver[0].country.code}</p>
              <p>Number of Grand Prix: {driver[0].grands_prix_entered}</p>
              <p>Number of podiums: {driver[0].podiums}</p>
              <p>Current team: {driver[0].teams[0].team.name}</p>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Driver;