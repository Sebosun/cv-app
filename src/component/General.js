/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

class General extends React.Component{
    constructor(){
        super();
        this.state = {
            display: false,
        }
        // console.log(this.props)
        this.visibilityHandler = this.visibilityHandler.bind(this)

    }

    visibilityHandler(event){
        event.preventDefault()
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
                <h1>personal details</h1>
                <div className='personalData'>
                    <hr />
                    <p>Date of Birth:  {dateBirth}</p>
                    <p>Place of Birth:  {placeBirth}</p>
                    <p>Gender:  {gender}</p>
                    <p>Nationality: {nationality}</p>
                    <p>Adress: {address}</p>
                    <p>Telephone: {telephone}</p>
                    <p>E-mail: {email}</p>
                    <button onClick={this.visibilityHandler}>{this.state.display ? 'Close':'Edit'}</button>
                    <hr />
                </div>
                <form  className="personalForm" style={{display: this.state.display ? "grid": "none"}}>
                {/* Default values here will be those dateBirth etc - so that it's autofilled */}
                    <label>Birth date:  
                        <input
                        placeholder="Enter your birth date"
                        value={dateBirth}
                        name="dateBirth"
                        type="text"
                        onChange={this.props.stateChanger}
                    />
                    </label>

                    <label>Place of birth 
                        <input
                        placeholder="Enter your birth place"
                        value={placeBirth}
                        name="placeBirth"
                        type="text"
                        onChange={this.props.stateChanger}
                    />
                    </label>

                    <label>Female
                        <input
                        value="Female"
                        name="gender"
                        type="radio"
                        checked={gender === "female"}
                        onChange={this.props.stateChanger}
                    />
                        <label>Male  
                        <input
                            value="Male"
                            name="gender"
                            checked={gender === "male"}
                            type="radio"
                            onChange={this.props.stateChanger}
                        /></label></label>

                    <label>Nationality 
                        <input
                        placeholder="Enter your nationality"
                        value={nationality}
                        name="nationality"
                        type="text"
                        onChange={this.props.stateChanger}
                    /></label>
                    <label>Adress:  
                        <input
                        placeholder="Enter your adress"
                        value={address}
                        name="address"
                        type="text"
                        onChange={this.props.stateChanger}
                    /></label>


                    <label >Telephone:  
                        <input
                        placeholder="Enter your phone number"
                        value={telephone}
                        name="telephone"
                        type="text"
                        onChange={this.props.stateChanger}
                    /></label>

                    <label>E-mail
                    <input
                        placeholder="Enter your email adress"
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.props.stateChanger}
                    /></label>
                </form>
            </div>
        )
    }
}

export default General;