import React from 'react'

const Heading = (props) => {
    return (
        <div className="container-fluid">
            <div className="row text-center py-5">
                <p className='fs-5 fw-semibold m-0 p-0'>
                    <img className='mx-2' src="public\assets\dot.png" alt="dot" />
                    {props.superheading}
                </p>
                <p className="display-5 fw-bold m-0 p-0">{props.heading}</p>
            </div>
        </div>
    )
}

export default Heading