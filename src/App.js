import React, { useState } from 'react';
import './App.css';
import data, { getAirlineById, getAirportByCode } from './data';
import Table from './components/Table';
import Select from './components/Select';

const App = () => {
  const [airline, setAirline] = useState('all')
  const [airport, setAirport] = useState('all')
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
    return (route.airline === airline || airline === 'all') &&
      (route.src === airport || route.dest === airport || airport === 'all')
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

  const selectAirport = (e) => {
    e.preventDefault()
    setAirport(e.target.value)    
  }

  const clearFilters = () => {
    setAirport('all')
    setAirline('all')
  }

  const filteredAirlines = data.airlines.map(airline => {
    const disabled = !filteredRoutes.find(
      route => route.airline === airline.id
      )
    return { ...airline, disabled}
  })

  const filteredAirports = data.airports.map(airport => {
    const disabled = !filteredRoutes.find(route =>
      route.src === airport.code || route.dest === airport.code
      )
    return { ...airport, disabled}
  })

  return (
    <div className='app'>
      <header className='header'>
        <h1 className='title'>Airline Routes</h1>
      </header>
      <section>
        <Select options={filteredAirlines} valueKey='id' titleKey='name'
          allTitle='All Airlines' value={airline} onSelect={selectAirline} />
        <Select options={filteredAirports} valueKey={'code'} titleKey={'name'}
          allTitle={'All Airports'} value={airport} onSelect={selectAirport} />
        <button onClick={clearFilters}>Clear Filters</button>
      </section>
      <div>
        <Table className='routes-table' columns={columns}
          rows={filteredRoutes} format={formatValue} perPage={49} /> 
      </div>
    </div>
  )
}

export default App;