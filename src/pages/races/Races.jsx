import './Races.css';
import useFetch from "../../hooks/useFetch";
import dateFormat from "../../helpers/dateFormat";
import {useState} from "react";
import {Link} from "react-router-dom";

function Races() {
  const [seasonState, setSeasonState] = useState('2022');
  const {data, loading, error} = useFetch({endpoint: 'races', keys: `?season=${seasonState}`});
  const {data: seasons} = useFetch({endpoint: 'seasons', keys: ''});
  let races;
  console.log(data);
  if (data) {
    races = data.filter((race) => {
      return race.type === 'Race';
    });
  }

  function handleChange(e) {
    setSeasonState(e.target.value);
  }

  return (
    <>
      {loading && <span>Loading...</span>}
      {error && <span>An error occurred while loading the data</span>}
      <h1 className="drivers-header">Races</h1>
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
        {races &&
          <table className="table table-drivers">
            <thead>
            <tr>
              <th>Race</th>
              <th>Track</th>
              <th>Picture</th>
              <th>Country</th>
              <th>Laps</th>
            </tr>
            </thead>
            <tbody>
            {races.map((race) => {
              return (
                <tr>
                  <td><Link className="link" to={`/race/${race.id}`}>{dateFormat(race.date)}</Link></td>
                  <td><Link className="link" to={`/race/${race.id}`}>{race.circuit.name}</Link></td>
                  <td><Link className="link" to={`/race/${race.id}`}><img src={race.circuit.image} alt=""/></Link></td>
                  <td><Link className="link" to={`/race/${race.id}`}>{race.competition.location.country}</Link></td>
                  <td><Link className="link" to={`/race/${race.id}`}>{race.laps.total}</Link></td>
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

export default Races;