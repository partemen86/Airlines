import React, { useState } from 'react';
import './App.css';
import data from './data';
import { getAirlineById, getAirportByCode } from './data';
import Table from './components/Table';
import Select from './components/Select';

const App = () => {
  const [airline, setAirline] = useState('all')
  const columns = [
    {name: 'Airline', property: 'airline'},
    {name: 'Source Airport', property: 'src'},
    {name: 'Destination Airport', property: 'dest'},
  ];
  
  const formatValue = (property, value) => {
    if (property === 'airline') {
      return getAirlineById(value).name
    } else {
      return getAirportByCode(value).name
    }
  }

  const filteredRoutes = data.routes.filter(route => {  
    return route.airline === airline || airline === 'all'
  })

  const selectAirline = (e) => {
    e.preventDefault()
    const value = e.target.value
    if (value === 'all') {
      setAirline(value)
    } else {    
      setAirline(Number(value))
    }
  }

  return (
    <div className='app'>
      <header className='header'>
        <h1 className='title'>Airline Routes</h1>
      </header>
      <section>
        <Select options={data.airlines} valueKey='id' titleKey='name'
          allTitle='All Airlines' value={airline} onSelect={selectAirline} />
      </section>
      <div>
        <Table className='routes-table' columns={columns}
          rows={filteredRoutes} format={formatValue} perPage={49} /> 
      </div>
    </div>
  )
}

export default App;