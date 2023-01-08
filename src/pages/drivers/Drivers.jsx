import React, {useEffect, useState} from 'react';
import './Drivers.css';
import axios from "axios";
import useFetch from "../../hooks/useFetch";

function Drivers() {
  const { data: drivers, loading, error } = useFetch({ endpoint: 'rankings/drivers', keys: '?season=2022'})
  return (
    <>
      {loading && <span>Loading...</span>}
      {error && <span>An error occurred while loading the data</span>}
      <h1 className="drivers-header">Drivers</h1>
      <h2 className="season-header">Season: 2022</h2>
      <div className="container">
        {drivers &&
          <table className="table table-drivers">
            <thead>
            <tr>
              <th>Pos</th>
              <th>Name</th>
              <th>Picture</th>
              <th>Team</th>
              <th>Points</th>
            </tr>
            </thead>
            <tbody>
            {drivers.map((driver) => {
              return (
                <tr>
                  <td>{driver.position}</td>
                  <td><img src={driver.driver.image} alt=""/></td>
                  <td>{driver.driver.name}</td>
                  <td>{driver.team.name}</td>
                  <td>{driver.points}</td>
                </tr>
              )
            })}
            </tbody>
          </table>
        }
      </div>
    </>
  );
}

export default Drivers;