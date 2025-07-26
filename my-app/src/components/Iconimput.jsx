import React from "react"

export default function IconInput() {
    return (
        <div className='iconimput'>
            <div className='icon'>
                <i className="fa fa-globe" aria-hidden="true"></i>
                <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            <div className='input'>
                <input type='text' placeholder='Search' className='text' />
            </div>
        </div>
    )
}