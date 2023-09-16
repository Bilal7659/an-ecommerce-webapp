import React from 'react'
import '../Product/ProductStyle.css'
export default function CustomAlert({message}) {
  return (
    <div>
      <div className="custom-alert">
        <div className="custom-alert-content">
            <p>{message}</p>
        </div>
      </div>
    </div>
  )
}
