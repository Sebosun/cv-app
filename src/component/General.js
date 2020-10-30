import React from 'react'

class General extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display: false,
        }
        // console.log(this.props)
        this.visibilityHandler = this.visibilityHandler.bind(this)

    }

    visibilityHandler(){
        this.setState(prev =>{
            return {display: !prev.display }
            }
        )
    }



    render(){
        const {dateBirth, placeBirth, gender, nationality, address , telephone, email} = this.props.personalDetails
        let displayState = this.state.display ? {display: 'inline'} : {display: 'none'};
        return (
            <div className="personalDisplay">
                <h1>Personal details</h1>
                <div className='personalData'>
                    <hr />
                    <p>Date of Birth:  {dateBirth}</p>
                    <p>Place of Birth:  {placeBirth}</p>
                    <p>Gender:  {gender ? "male" : "female"}</p>
                    <p>Nationality: {nationality}</p>
                    <p>Adress: {address}</p>
                    <p>Telephone: {telephone}</p>
                    <p>E-mail: {email}</p>
                    <hr />
                    <button onClick={this.props.stateChanger}/>
                </div>
                <form  className="personalForm">
                    <input
                        placeholder="Enter your birth date"
                        value={this.dateBirth}
                        id="dateBirth"
                        type="text"
                        onChange={this.props.handlePersonalChange}
                    />

                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default General;