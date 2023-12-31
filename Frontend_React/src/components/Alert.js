import React from 'react'

function Alert(props) {
  return (
    <>
    <div className={`alert alert-${props.alertType} alert-dismissible fade show`} role="alert">
        <strong>{props.alertStatus}</strong> {props.alertMssg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    </>
  )
}

export default Alert