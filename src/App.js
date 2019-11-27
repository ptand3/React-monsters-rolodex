// <!--Class  component comes up with some in built function that
// we can use and also helps to defines the state in that component!-->

import React, { Component } from 'react';
import { CardList } from "./Components/card-list/card-list.component";
import { SearchBox } from "./Components/search-box/search-box";
import { LifeCycles } from "./lifecycles"
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
      text: "Hello",
    }
  }

  componentDidMount() {   //The method used by react to mount our application on the root of the page
    fetch("https://jsonplaceholder.typicode.com/users")  //Fetching some API from the server
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {  //In order to use custom functions we need to use this.functionname because this function is not bound to the current context component
    this.setState({ searchField: e.target.value })
  }

  handleClick = () => {
    this.setState({
      text: this.state.text + "Hello"
    })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
        <button onClick={this.handleClick}>Update Text</button>
        <LifeCycles text={this.state.text} />
      </div>
    );
  }
}

export default App;
