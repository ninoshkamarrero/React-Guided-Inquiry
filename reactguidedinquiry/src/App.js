import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import BasicInfo from './BasicInfo'


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      person:[
        {
          name:'Ninoshka',
          phoneNumber:'555-555-555',
          birthDate: '11/17/1995'
        },
        {
          name:'Anthony',
          phoneNumber:'123-456-789',
          birthDate: '07/01/1998'
        },
        {
          name:'Iveleese',
          phoneNumber:'777-777-777',
          birthDate: '10/22/1973'
        },
        {
          name:'Walter',
          phoneNumber:'456-789-123',
          birthDate: '10/12/1973'
        },
      ]
    }
    }
  render() {
    const P = this.state.person.map((person, i) =>{
      return(
        <BasicInfo 
        key ={i}
      name={person.name}
      phoneNumber={person.phoneNumber}
      birthDate={person.birthDate} />
      )
    })
    return (
      <div className = "App">
      <h1> People Basic Information </h1>
      {P}
      </div>

    )
  }
}












export default App;