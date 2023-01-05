import React, {useEffect, useState} from 'react';
import './Teams.css';
import axios from "axios";
import noImageAvailable from '../../assets/No_image_available.svg.png'

function Teams() {
  const [teams, setTeams] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchDrivers() {
      setLoading(true);
      try {
        setError(false);
        const response = await axios.get("https://v1.formula-1.api-sports.io/teams", {
          headers: {
            "x-rapidapi-host": "v1.formula-1.api-sports.io",
            "x-apisports-key": "2f029cd04292f27980387238737fd319",
          }
        })
        // const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(response.data.response);
        setTeams(response.data.response);
        // console.log(drivers);
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
      <h1 className="teams-header">Teams</h1>
      <div className="container">
        {teams &&
          <table className="table table-teams">
            <thead>
            <tr>
              <th></th>
              <th>Team</th>
              <th>Director</th>
              <th>Championships</th>
            </tr>
            </thead>
            <tbody>
            {teams.map((team) => {
              return (
                <tr>
                  <td><img src={team.logo} alt=""/></td>
                  <td>{team.name}</td>
                  <td>{team.director}</td>
                  <td>{team.world_championships ? team.world_championships : 0}</td>
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

export default Teams;