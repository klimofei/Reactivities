import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { cars } from './demo';
import { CarItem } from './Caritem'
import axios from "axios";

class App extends Component {
  state = {
    values: []
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/values")
          .then((response) => {
            console.log(response);
            this.setState({
            values: response.data })}
            );
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {this.state.values.map((value: any) => (
              <li key={value.id}>{value.name}</li>
            ))}
          </ul>
          {/* <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
  
        {/* <ul>
          {/* {cars.map((car) => (
            <li>{car.manufacturer} {car.model}</li>
            ))} */}
          {/* {cars.map((car) => (
          <CarItem car={car} />
            ))}
        </ul> */}
      </div>
  
  );}
}
export default App;
