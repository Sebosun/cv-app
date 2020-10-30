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
        let displayState = this.state.display ? {display: 'inline'} : {display: 'none'};
        return (
            <div className="personalDisplay">
                <h1>Personal details</h1>
                <div className='personalData'>
                <hr />
                    <p>Date of Birth: {this.props.personalDetails.dateBirth}</p>
                    <p>Place of Birth:  {this.props.personalDetails.placeBirth}</p>
                    <p>Gender:  {this.props.personalDetails.gender ? "male" : "female"}</p>
                    <p>Nationality: {this.props.personalDetails.nationality}</p>
                    <p>Adress: {this.props.personalDetails.address}</p>
                    <p>Telephone: {this.props.personalDetails.telephone}</p>
                    <p>E-mail: {this.props.personalDetails.email}</p>
                    <hr />
                    <button onClick={this.props.stateChanger}/>
                </div>
            </div>
        )
    }
}

export default General;