import React from 'react';
import './App.css';
import axios from 'axios';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      user: []
    };
  }

//step1 fetch user data DONE
componentDidMount(){
  axios.get("https://api.github.com/users/mtruj013")
  .then(response => {
    console.log(response.data)
    this.setState({
      user: response.data.message//set response to state
    })
  })
  .catch(error =>{
    console.log("couldn't get the data", error);
  })
}




  render(){
    return (
      <div className = "App">
        <header className="App-header"></header>
      </div>
    )
  }

}


export default App;