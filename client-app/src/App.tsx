import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {cars} from './demo';
import {CarItem} from './Caritem'
import axios from "axios";
import {Header, Icon, List} from 'semantic-ui-react'

class App extends Component {
    state = {
        values: []
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/api/values")
            .then((response) => {
                this.setState({values: response.data})
            });
    }
    render() {
        return (
            <div>
                {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> */}
                <Header as='h2'>
                    <Icon name='users'/>
                    <Header.Content>Reactivities</Header.Content>
                </Header>
                <List>
                {this.state.values.map((value : any) => (
                                <List.Item key={value.id}>{value.name}</List.Item>
                            ))}
                </List>
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

                {/* <ul>
          {/* {cars.map((car) => (
            <li>{car.manufacturer} {car.model}</li>
            ))} */
            }
            {/* {cars.map((car) => (
          <CarItem car={car} />
            ))}
        </ul> */
            } 
    </div>
    );
  }
}
export default App;
