import React, { Component } from 'react';
import './App.css';
import data from './data';
import { getAirlineById, getAirportByCode } from './data';

const App = () => {
  console.log(data)
  return (
  <div className="app">
    <header className="header">
      <h1 className="title">Airline Routes</h1>
    </header>
    <section>
      <p>
        Welcome to the app!
      </p>
    </section>
    <div>
      <table>
        <tbody>
          {data.routes.map((route, idx) =>
            <tr key={idx}>
              <td>{getAirlineById(route.airline).name}</td>
              <td>{getAirportByCode(route.src).name}</td>
              <td>{getAirportByCode(route.dest).name}</td>
            </tr>)}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default App;