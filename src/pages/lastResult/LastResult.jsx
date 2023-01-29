import React from 'react';
import './LastResult.css';
import useFetch from "../../hooks/useFetch";
import dateFormat from "../../helpers/dateFormat";
import Result from "../../components/result/Result";

function LastResult(props) {
  const {data: race, loading, error} = useFetch({endpoint: 'races', keys: '?last=1'})

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
            <table className="table table-last-result">
              <thead>
              <tr>
                <th>Pos</th>
                <th>Name</th>
                <th>Time</th>
              </tr>
              </thead>
              <tbody>
              <Result raceId={race[0].id}/>
              </tbody>
            </table>
          </div>
        </div>
      }
    </>
  );
}

export default LastResult;