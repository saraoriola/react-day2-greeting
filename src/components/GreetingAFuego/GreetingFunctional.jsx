import React from 'react'

const GreetingFunctional = (props) => {
    const { name } = props;

  return (
    <p>Hola {name}</p>
  )
}
export default GreetingFunctional;