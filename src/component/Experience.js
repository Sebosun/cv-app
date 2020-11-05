import React from 'react'

function Experience(props){

    // here we would use .map on props.exp to print out the complete gowniak
    let printGowno = () => {
        for (let i; i < 15; i++){
            return(
                <h1>Dupa</h1>
            
            )
        }
    }

    return (
        <div className="experience">
            <h1>Experience</h1>
            <div>
                <hr />
                {/* {console.log(printGowno())} */}
                <hr />
            </div>
        </div>
    )
}

export default Experience; 