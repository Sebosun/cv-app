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
        gender: "male",
        nationality: 'Serbian',
        address: 'Jaroszewskiego 15',
        telephone: '5714875',
        email: 'jokerhahaha@gmail.com'
      },
      experience: [
        ['Pieczarki sp. zoo', '2012', '2014', 'Ledzwiowy'],
        ['Spawarka zmywarko suszarka', '1001', '2015', 'Kierownik'],
        ['Ciasowianka', '2016', '2018', 'Bagaz']
      ],
    }
    this.handlePersonalChange = this.handlePersonalChange.bind(this)
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
          <General personalDetails={this.state.personalDetails} stateChanger={this.handlePersonalChange}/>
          <Education exp={this.state.experience}/>
          <Experience />
        </div>
      </div>
      )
    }
}




export default App
