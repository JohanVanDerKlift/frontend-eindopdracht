import React from 'react';
import './Result.css';
import useFetch from "../../hooks/useFetch";

function Result({raceId}) {
  const {data: result} = useFetch({endpoint: 'rankings/races', keys: `?race=${raceId}`});

  console.log(result);

  return (
    <>

      {result && result.map((driver) => (
        <tr>
          <td>{driver.position}</td>
          <td>{driver.driver.name}</td>
          <td>{driver.time}</td>
        </tr>
      ))}
    </>
  );
}

export default Result;