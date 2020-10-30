import './App.css';
import React, {useState} from 'react'
import Education from './component/Education'
import Experience from './component/Experience'
import General from './component/General'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      count: 0,
      personalDetails: {
        dateBirth: 'Yesterday',
        placeBirth: 'Kosovo',
        gender: false,
        nationality: 'Serbian',
        address: 'Jaroszewskiego 15',
        telephone: '5714875',
        email: 'jokerhahaha@gmail.com'
      },
    }
    this.handleCount = this.handleCount.bind(this)
    this.buttonHandler = this.buttonHandler.bind(this)
    this.handlePersonalChange = this.handlePersonalChange.bind(this)
  }

  handleCount(){
    this.setState((prev) => {
      return {count: prev.count + 1}
      }
    )
  }

  buttonHandler(event){
    event.preventDefault();
    event.stopPropagation();
    const {name, value} = event.target
    this.setState((prev) => {
      return{
        // spread operator, spreads the entire prev.personal details while modifying one value
        // that value being ofc dateBirth here
        // and here we first access the object, and then within that object we access another
        // object and spread it 
        personalDetails: {
          ...prev.personalDetails,
          [name]: value,
        }
      }
    })
  }
  
  handlePersonalChange(event){
    event.preventDefault();
    event.stopPropagation();
    const {name, value} = event.target
    this.setState((prev) => {
     return { personalDetails: 
        {
        ...prev.personalDetails,
        [name]: value,
        }
      }
    })
  }

  render(){
   return (
      <div>
        <div className='mainContainer'>
          <General personalDetails={this.state.personalDetails} stateChanger= {this.handlePersonalChange}/>
          <Education />
          <Experience />
        </div>
      </div>
      )
    }
}




export default App
