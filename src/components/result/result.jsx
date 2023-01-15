import React from 'react';
import './result.css';
import useFetch from "../../hooks/useFetch";

function Result({raceId}) {
  const {data: result} = useFetch({endpoint: 'rankings/races', keys: `?race=${raceId}`});

  console.log(result);

  return (
    <div></div>
  );
}

export default Result;