import './App.css';
import React, {useState} from 'react'
import Education from './component/Education'
import Experience from './component/Experience'
import General from './component/General'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
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
        ['Szkola Piulsudzkiego nr 11','2011', '2015', 'Klepanie Betonu', false],
        ['Institution2','Year started2', 'Year completed2', 'Major2', false],
        ['Institution3','Year started3', 'Year completed3', 'Major3', false],
      ],
      eduNew: [' ', ' ', ' ', ' ', false],
      experience: [
        ['Pieczarki sp. zoo', '2012', '2014', 'Ledzwiowy',],
        ['Spawarka zmywarko suszarka', '1001', '2015', 'Kierownik'],
        ['Ciasowianka', '2016', '2018', 'Bagaz']
      ],
      expNew: [' ', ' ', ' ', ' ', false],
    }
    this.handlePersonalChange = this.handlePersonalChange.bind(this)
    this.handleDisplayChange = this.handleDisplayChange.bind(this);
    this.handleEduChanges = this.handleEduChanges.bind(this);
    this.changeNew = this.changeNew.bind(this);
    this.submitEdu = this.submitEdu.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  // handles the change of personal display
  handlePersonalChange(event){
    event.preventDefault();
    event.stopPropagation();
    const {name, value} = event.target
    this.setState((prev) => {
     return { 
       personalDetails: {
        ...prev.personalDetails,
        [name]: value,
       }               
      }
    })
  }

  // handles the display change of the 'change' window in the given module
  handleDisplayChange(index, mode){
    console.log(index)
    let stateCopy = JSON.parse(JSON.stringify(this.state[mode]))
      this.setState((prev) =>{
      stateCopy[index][4] = prev[mode][index][4] ? false : true
        return{
          [mode]: stateCopy
        }
    })
  }

  // changes the value of an already existing entry directly in the state
  handleEduChanges(event){
    const {id, value, name} = event.target
    console.log(id, name, value)
    let eduCopy = JSON.parse(JSON.stringify(this.state.education))
    eduCopy[id][name] = value
    this.setState((prev) =>{

      return {
        education: eduCopy
      }
    })
  }

  // changes the value of a current NEW entry directly in the state
  changeNew(event){
    const {value, name, id} = event.target
    this.setState((prev) =>{
      prev.eduNew[id] = value
      return {
        eduNew: prev.eduNew
      }
    })
  }

  //submits new content into the edu array
  submitEdu(event){
    event.preventDefault()
    // console.log(this.state.education.push(this.state.eduNew[1]))
    console.log(this.state.eduNew)
    console.log(this.state.education)
    this.setState((prev) => {


      return{
        // needed to nest here ...prev.eduNew into a new his own array - took me quite a bit to realize that
        education: [...prev.education, [...prev.eduNew]],
        eduNew: [' ', ' ', ' ', ' ', false],
      }
    }
  )
  }

  //deleted an item from a certain index, mode is used to know if it's exp or edu
  deleteItem(index, itemClass, mode){
    // console.log(index, itemClass)
    // console.log(itemClass[index])
    this.setState((prev) => {
        // using ...prev[mode] here actually allows me to use string to call an object
        let newEdu = [...prev[mode]]
        newEdu.splice(index, 1)
        return { [mode]: newEdu }
      }
    )
  }




  render(){
   return (
      <div>
        <div className='mainContainer'>
          {/* <General 
            personalDetails={this.state.personalDetails}
            stateChanger={this.handlePersonalChange}
          /> */}
          <Education
            mode='education'
            deleteItem={this.deleteItem}
            stateChange={this.handleEduChanges}
            submitEdu={this.submitEdu}
            handleDisplayChange={this.handleDisplayChange}
            eduNewChange={this.changeNew}
            eduNew={this.state.eduNew}
            edu={this.state.education}
          />
          {/* <Education
            mode='experience'
            deleteItem={this.deleteItem}
            stateChange={this.handleEduChanges}
            submitEdu={this.submitEdu}
            handleDisplayChange={this.handleDisplayChange}
            eduNewChange={this.changeNew}
            eduNew={this.state.eduNew}
            edu={this.state.education}
          /> */}
          {/* <Experience exp={this.state.experience}/> */}
        </div>
      </div>
      )
    }
}




export default App
