import './Races.css';
import useFetch from "../../hooks/useFetch";
import dateFormat from "../../helpers/dateFormat";

function Races() {
  const {data, loading, error} = useFetch({endpoint: 'races', keys: '?season=2022'});
  let races;
  console.log(data);
  if (data) {
    races = data.filter((race) => {
      return race.type === 'Race';
    });
  }

  return (
    <>
      {loading && <span>Loading...</span>}
      {error && <span>An error occurred while loading the data</span>}
      <h1 className="drivers-header">Races</h1>
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
                  <td>{dateFormat(race.date)}</td>
                  <td>{race.circuit.name}</td>
                  <td><img src={race.circuit.image} alt=""/></td>
                  <td>{race.competition.location.country}</td>
                  <td>{race.laps.total}</td>
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