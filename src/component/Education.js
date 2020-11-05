import React from 'react'

function Education(props){

    return (
        <div className="education">
            <h1>Education</h1>
            <hr />
            <div>
                {props.edu.map((value, index) =>{
                    return <div className="educationDisplay">
                        <div>{value[0]}</div>
                        <div>{value[1]}</div>
                        <div>{value[2]}</div>
                        <div>{value[3]}</div>
                        <button onClick={}>Edit</button>
                    </div>
                })}
                
            </div>
            <hr />
        </div>
    )
}

export default Education;  