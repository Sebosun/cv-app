import React, {useState} from 'react'

function Education(props){

    return (
        <div className="education">
            <h1>Education</h1>
            <hr />
            <div>
                {props.edu.map((value, index) =>{
                    return <div>
                        <div className="educationDisplay">
                            <div>{value[0]}</div>
                            <div>{value[1]}</div>
                            <div>{value[2]}</div>
                            <div>{value[3]}</div>
                            {/* just calling eduChange(index) wont work, we have to do () = > educhange(index) */}
                            <button onClick={()=>props.eduChange(index)}>Edit</button>
                        </div>
                        <form style={{display: value[4] ? 'grid':'none'}} className="educationDisplay">
                            <input 
                                value={value[0]}
                                name="0"
                                id={index}
                                type="text"
                                onChange={props.stateChange}/>
                            <input 
                                value={value[1]}
                                name="1"
                                id={index}
                                type='date'
                                onChange={props.stateChange}/>
                            <input 
                                value={value[2]}
                                name="2"    
                                id={index}
                                type='date'
                                onChange={props.stateChange}
                            />
                            <input 
                                value={value[3]}
                                name="3"
                                id={index}
                                type='text'
                                onChange={props.stateChange}
                            />

                        </form>
                    </div>
                })}
                
            </div>
            <hr />
        </div>
    )
}

export default Education;  