import React from 'react'

export default function Alert(props) {
  return (
    <div style={{ height: '50px', backgroundColor: props.mode === 'dark' ? 'black' : 'white' }}>
      {props.alert && <div className={`alert mb-0 alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong >Hey!</strong> {`${props.alert.message}`}
      </div>}
    </div>
  )
}
