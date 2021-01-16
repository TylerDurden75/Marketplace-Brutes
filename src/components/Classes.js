import React from 'react'

function Classes({classes}) {
    return (
        <div className="classes">
            {
                classes.map((classes, index) =>(
                    <button key={index}>{classes}</button>
                ))
            }
        </div>
    )
}

export default Classes
