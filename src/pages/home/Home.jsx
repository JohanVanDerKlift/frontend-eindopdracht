import React from 'react';
import './Home.css';
import useFetch from "../../hooks/useFetch";
import dateFormat from "../../helpers/dateFormat";

function Home(props) {
  const {data: race, loading, error} = useFetch({endpoint: 'races', keys: '?last=1'})
  // const {data: results} = reFetch({ endpoint: 'rankings/races', keys: `?race=${race[0].id}`})
  // console.log(results);

  return (
    <>
      {loading && <span>Loading...</span>}
      {error && <span>An error occurred while loading the data</span>}

      <h1 className="home-header">Last Results</h1>
      {race &&
        <div className="container">
          <div className="last-race-container">
            <p className="date">{dateFormat(race[0].date)}</p>
            <h2>{race[0].competition.name}</h2>
            <img src={race[0].circuit.image} alt="Circuit"/>
            <table>
              <thead>
              <tr>
                <th>Pos</th>
                <th>Name</th>
                <th>Points</th>
              </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>
        </div>
      }
    </>
  );
}

export default Home;