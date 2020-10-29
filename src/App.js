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
    }
    this.handleCount = this.handleCount.bind(this)
  }
  handleCount(){
    this.setState((prev) => {
      return {count: prev.count + 1}
      }
    )
  }
  
  render(){
   return (
      <div>
        <div className='mainContainer'>
          <Education />
          <Experience />
          <General />
          <p>{this.state.count}</p>
        </div>
        <button onClick={this.handleCount}>Add!</button>
      </div>
      )
    }
}




export default App
