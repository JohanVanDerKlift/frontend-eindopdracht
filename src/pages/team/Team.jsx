import React from 'react';
import './Team.css';
import {useParams} from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Team(props) {
  const {teamId} = useParams();
  const {data: team, loading, error} = useFetch({endpoint: 'teams', keys: `?id=${teamId}`});

  return (
    <>
      {loading && <span>Loading...</span>}
      {error && <span>An error occurred while loading the data</span>}
      {team ?
        <div className="container driver-container">
          <img className="team-image" src={team[0].logo} alt=""/>
          <div className="info-container">
            <h2 className="driver-name">{team[0].name}</h2>
            <div className="driver-info">
              <p>Basis: {team[0].base}</p>
              <p>Director: {team[0].director}</p>
              <p>In GP sinds: {team[0].first_team_entry}</p>
              <p>Kampioenschappen: {team[0].world_championships}</p>
              <p>Motor: {team[0].engine}</p>
            </div>
          </div>
        </div>
        :
        <span className="missing-data-message">Unfortunately this team information was not found</span>
      }
    </>
  );
}

export default Team;