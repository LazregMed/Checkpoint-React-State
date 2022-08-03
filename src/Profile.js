
import React, {Component} from 'react'
class Profil extends Component {

    constructor(){
      super()
        this.state ={
        FullName:'Mohamed Lazreg',
        Age :30,
        Bio : 'Mohamed Lazreg devellopeur Full-Stack JavaScript',
        Profession : 'Ingenieur'
      }
    }
  
    render(){
      
      return (
        <div className="App">
          
        <hr/>
        <h2> FullName: {this.state.FullName}</h2>
        <hr/>
        <h2> Age: {this.state.Age}</h2>
        <hr/>
        <h3> Bio: {this.state.Bio}</h3>
        <hr/>
        <h4> Profession: {this.state.Profession}</h4>
  
        </div>
      );
    }
  
  }
export default Profil
