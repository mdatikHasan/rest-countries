import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <Footer></Footer>
      
    </div>
  );
}



export default App;










/* import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h1>Traveling counriteis</h1>
      <h4>Countries Available: {countries.length}</h4>
      {
        countries.map(country => <Countries name={country.name.common} capital={country.capital}></Countries>)
      }

    </div>
  )
}

function Countries(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Capital: {props.capital}</h2>
    </div>
  )
}


export default App;
 */