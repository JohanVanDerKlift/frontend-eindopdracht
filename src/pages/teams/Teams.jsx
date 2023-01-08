import React from 'react';
import './Teams.css';
import useFetch from "../../hooks/useFetch";

function Teams() {
  const { data: teams, loading, error } = useFetch({ endpoint: 'rankings/teams', keys: '?season=2022'})

  return (
    <>
      {loading && <span>Loading...</span>}
      {error && <span>An error occurred while loading the data</span>}
      <h1 className="teams-header">Teams</h1>
      <h2 className="season-header">Season: 2022</h2>
      <div className="container">
        {teams &&
          <table className="table table-teams">
            <thead>
            <tr>
              <th>Pos</th>
              <th>Logo</th>
              <th>Team</th>
              <th>Points</th>
            </tr>
            </thead>
            <tbody>
            {teams.map((team) => {
              return (
                <tr>
                  <td>{team.position}</td>
                  <td><img src={team.team.logo} alt=""/></td>
                  <td>{team.team.name}</td>
                  <td>{team.points}</td>
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