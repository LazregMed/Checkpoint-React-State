import React, {Component} from 'react'
import './App.css';
import Profil  from './Profile';


class App extends Component {

  constructor(){
    super()
      this.state ={
      
      show : false
    }
  }
  Toggle =()=>{
    this.setState({
      show : !this.state.show
    })
  }
  render(){
    
    return (
      <div className="App">
      <h1>This is a Checkpoint of state -- class</h1>
      {this.state.show && <Profil/>}
      <button onClick={()=>this.Toggle()}>{this.state.show? 'Hide Profile' : 'Show Profile'}</button>
      </div>
    );
  }

}



export default App;