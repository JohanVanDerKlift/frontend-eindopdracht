import React, {useEffect, useState} from 'react';
import './Drivers.css';
import axios from "axios";

function Drivers() {
  const [drivers, setDrivers] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchDrivers() {
      setLoading(true);
      try {
        setError(false);
        const response = await axios.get("https://v1.formula-1.api-sports.io/rankings/drivers?season=2022", {
          headers: {
            "x-rapidapi-host": "v1.formula-1.api-sports.io",
            "x-apisports-key": "2f029cd04292f27980387238737fd319",
          }
        })
        console.log(response.data.response);
        setDrivers(response.data.response);
      } catch (e) {
        console.error(e);
        setError(true);
      }
      setLoading(false);
    }

    void fetchDrivers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {loading && <span>Loading...</span>}
      {error && <span>An error occurred while loading the data</span>}
      <h1 className="drivers-header">Drivers</h1>
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