import React from 'react';
import './Result.css';
import useFetch from "../../hooks/useFetch";
import {Link} from "react-router-dom";

function Result({raceId}) {
  const {data: result} = useFetch({endpoint: 'rankings/races', keys: `?race=${raceId}`});

  console.log(result);

  return (
    <>

      {result && result.map((driver) => (
        <tr className="table-row">
          <td className="table-last-result"><Link className="link" to={`/driver/${driver.driver.id}`}>{driver.position}</Link></td>
          <td className="table-last-result"><Link className="link" to={`/driver/${driver.driver.id}`}>{driver.driver.name}</Link></td>
          <td className="table-last-result"><Link className="link" to={`/driver/${driver.driver.id}`}>{driver.time}</Link></td>
        </tr>
      ))}
    </>
  );
}

export default Result;