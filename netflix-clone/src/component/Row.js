import React from 'react'
import "../styles/row.css"

function Row(props) {
  return (
    <div className='row'>
        <h2 className='t'>{props.title}</h2>
    </div>
  )
}

export default Row