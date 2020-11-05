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
      education: [
        ['Szkola Piulsudzkiego nr 11','2011', '2015', 'Klepanie Betonu', true],
        ['Institution2','Year started2', 'Year completed2', 'Major2', false],
        ['Institution3','Year started3', 'Year completed3', 'Major3', false],
      ],
      experience: [
        ['Pieczarki sp. zoo', '2012', '2014', 'Ledzwiowy',],
        ['Spawarka zmywarko suszarka', '1001', '2015', 'Kierownik'],
        ['Ciasowianka', '2016', '2018', 'Bagaz']
      ],
    }
    this.handlePersonalChange = this.handlePersonalChange.bind(this)
    this.handleDisplayChange = this.handleDisplayChange.bind(this);
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

  handleDisplayChange(index){
    console.log(index)
    let eduCopy = JSON.parse(JSON.stringify(this.state.education))
      this.setState((prev) =>{
      eduCopy[index][4] = prev.education[index][4] ? false : true
        return{
          education: eduCopy
        }
    })
  }

  render(){
   return (
      <div>
        <div className='mainContainer'>
          {/* <General personalDetails={this.state.personalDetails} stateChanger={this.handlePersonalChange}/> */}
          <Education eduChange={this.handleDisplayChange} edu={this.state.education}/>
          <Experience exp={this.state.experience}/>
        </div>
      </div>
      )
    }
}




export default App
