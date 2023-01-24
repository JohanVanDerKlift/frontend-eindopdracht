import React, {useState} from 'react';
import './Drivers.css';
import useFetch from "../../hooks/useFetch";
import {Link} from "react-router-dom";

function Drivers() {
  const [seasonState, setSeasonState] = useState('2022');
  const {data: drivers, loading, error} = useFetch({endpoint: 'rankings/drivers', keys: `?season=${seasonState}`});
  const {data: seasons} = useFetch({endpoint: 'seasons', keys: ''});

  function handleChange(e) {
    setSeasonState(e.target.value);
  }

  return (
    <>
      {loading && <span>Loading...</span>}
      {error && <span>An error occurred while loading the data</span>}
      <h1 className="drivers-header">Drivers</h1>
      <h2 className="season-header">Season: {seasonState}</h2>
      <div className="season-select-container">
        {seasons &&
          <select className="season-select" value={seasonState} id="seasons-select" onChange={handleChange}>
            {seasons.map((season) => (
              <option value={season}>{season}</option>
            ))}
          </select>
        }
      </div>
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
                    <td><Link className="link" to={`/driver/${driver.driver.id}`}>{driver.position}</Link></td>
                    <td><Link className="link" to={`/driver/${driver.driver.id}`}><img src={driver.driver.image} alt=""/></Link></td>
                    <td><Link className="link" to={`/driver/${driver.driver.id}`}>{driver.driver.name}</Link></td>
                    <td><Link className="link" to={`/driver/${driver.driver.id}`}>{driver.team.name}</Link></td>
                    <td><Link className="link" to={`/driver/${driver.driver.id}`}>{driver.points}</Link></td>
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