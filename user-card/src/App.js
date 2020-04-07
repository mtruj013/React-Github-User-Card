import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from "./UserCard"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    };
  }

  //step1 fetch user data DONE
  componentDidMount() {
    axios.get("https://api.github.com/users/mtruj013")
      .then(response => {
        console.log(response.data)
        this.setState({
          user: response.data//set response to state
        })
      })
      .catch(error => {
        console.log("couldn't get the data", error);
      })
    axios.get("https://api.github.com/users/mtruj013/followers")
      .then(response => {
        console.log(response.data)
        this.setState({
          followers: response.data
        })
      })
  }






  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UserCard
            user={this.state.user}//passing props to component
          />

          {this.state.followers.map(follower => (
            <div className="followers" key={follower.id}>

              <h1>{follower.login}</h1>
            </div>
          ))}
        </header>
      </div>
    )
  }

}


export default App;