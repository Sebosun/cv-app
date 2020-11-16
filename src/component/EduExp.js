import React, {useState} from 'react'

function EduExp(props){

    const [showForm, changeShowForm] = useState(false)

    return (
        <div className="education">
            <h1>{props.mode}</h1>
            <hr />
            <div>
                {props.stateData.map((value, index) =>{
                    return <div>
                        <div className="educationDisplay">
                            <div>{value[0]}</div>
                            <div>{value[1]}</div>
                            <div>{value[2]}</div>
                            <div>{value[3]}</div>
                            {/* just calling handleDisplayChange(index) wont work, we have to do () = > handleDisplayChange(index) */}
                            <button onClick={()=>props.handleDisplayChange(index, props.mode)}>Edit</button>
                            <button onClick={()=>props.deleteItem(index, props.mode)}>Delete</button>
                            {/* #TODO ADD A DELETE BUTTON  */}
                        </div>
                        <form style={{display: value[4] ? 'grid':'none'}} className="educationDisplay">
                            <input 
                                value={value[0]}
                                name="0"
                                id={index}
                                type="text"
                                onChange={(e) => {
                                    props.handleEduChanges(e, props.mode)
                                }}
                            />
                            <input 
                                value={value[1]}
                                name="1"
                                id={index}
                                type='date'
                                onChange={(e) => {
                                    props.handleEduChanges(e, props.mode)
                                }}
                            />
                            <input 
                                value={value[2]}
                                name="2"    
                                id={index}
                                type='date'
                                onChange={(e) => {
                                    props.handleEduChanges(e, props.mode)
                                }}
                            />
                            <input 
                                value={value[3]}
                                name="3"
                                id={index}
                                type='text'
                                onChange={(e) => {
                                    props.handleEduChanges(e, props.mode)
                                }}
                            />

                        </form>
                      
                    </div>
                    
                })}
                 <button onClick={() => changeShowForm(showForm ? false : true)}>Add</button> 
                 <div style={{display: showForm ? 'grid': 'none'}}>
                    <form className="educationDisplay" onSubmit={(e) => {
                        props.submitEdu(e, props.mode)}}
                    >
                        <label for="institution">Institution
                                <input 
                                        value={props.newState[0]}
                                        name='institution'
                                        id='0'
                                        type="text"
                                        onChange={(e) => {
                                            props.changeNew(e, props.mode)
                                        }}
                                />
                            </label>
                            <label for="date-started">Date started
                                <input 
                                        value={props.newState[1]}
                                        name='date-started'
                                        id='1'
                                        type='date'
                                        onChange={(e) => {
                                            props.changeNew(e, props.mode)
                                        }}
                                />
                            </label>
                            <label for="2">Date ended
                                <input 
                                        value={props.newState[2]}
                                        name='date-ended'
                                        id='2'
                                        type='date'
                                        onChange={(e) => {
                                            props.changeNew(e, props.mode)
                                        }}
                                />
                                </label>
                            <label for="major">Major
                                <input 
                                        value={props.newState[3]}
                                        name="major"
                                        id='3'
                                        type='text'
                                        onChange={(e) => {
                                            props.changeNew(e, props.mode)
                                        }}
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

export default EduExp;  