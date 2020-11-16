import React, {useState} from 'react'

function Experience(props){

    const [showForm, changeShowForm] = useState(false)

    return (
        <div className="experience">
            <h1>Experience</h1>
            <hr />
            <div>
                {props.exp.map((value, index) => {
                    return (
                        <div className='expDisplay'>
                            <div>{value[0]}</div>
                            <div>{value[1]}</div>
                            <div>{value[2]}</div>
                            <div>{value[3]}</div>
                            
                        </div>
                    )
                    })
                }
                    
                    
            </div>
        </div>
    )
}

export default Experience; 