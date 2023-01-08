// import React, {useEffect, useState} from 'react';
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
  // const [races, setRaces] = useState();
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   async function fetchDrivers() {
  //     setLoading(true);
  //     try {
  //       setError(false);
  //       const response = await axios.get("https://v1.formula-1.api-sports.io/races?season=2022", {
  //         headers: {
  //           "x-rapidapi-host": "v1.formula-1.api-sports.io",
  //           "x-apisports-key": "2f029cd04292f27980387238737fd319",
  //         }
  //       })
  //       console.log(response.data.response);
  //       const mainRaces = response.data.response.filter((race) => {
  //         return race.type === 'Race';
  //       });
  //       setRaces(mainRaces);
  //     } catch (e) {
  //       console.error(e);
  //       setError(true);
  //     }
  //     setLoading(false);
  //   }
  //
  //   void fetchDrivers();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  //
  // function dateFormat(date) {
  //   return new Date(date).toDateString().slice(4);
  // }

  return (
    <>
      {console.log(races)}
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