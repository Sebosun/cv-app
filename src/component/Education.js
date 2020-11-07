import React, {useState} from 'react'

function Education(props){

    const [showForm, changeShowForm] = useState(false)

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
                            <button>Delete</button>
                            {/* #TODO ADD A DELETE BUTTON  */}
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
                                id=''
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
                 <button onClick={() => changeShowForm(showForm ? false : true)}>Add</button> 
                 <div style={{display: showForm ? 'grid': 'none'}}>
                    <form className="educationDisplay" onSubmit={props.submitEdu}>
                        <label for="institution">Institution
                                <input 
                                        value={props.eduNew[0]}
                                        name='institution'
                                        id='0'
                                        type="text"
                                        onChange={props.eduNewChange}
                                />
                            </label>
                            <label for="date-started">Date started
                                <input 
                                        value={props.eduNew[1]}
                                        name='date-started'
                                        id='1'
                                        type='date'
                                        onChange={props.eduNewChange}
                                />
                            </label>
                            <label for="2">Date ended
                                <input 
                                        value={props.eduNew[2]}
                                        name='date-ended'
                                        id='2'
                                        type='date'
                                        onChange={props.eduNewChange}
                                />
                                </label>
                            <label for="major">Major
                                <input 
                                        value={props.eduNew[3]}
                                        name="major"
                                        id='3'
                                        type='text'
                                        onChange={props.eduNewChange}
                                />
                            </label>
                            <button>Confirm</button>
                            </form>
                 </div>
            </div>
            <hr />
        </div>
    )
}

export default Education;  