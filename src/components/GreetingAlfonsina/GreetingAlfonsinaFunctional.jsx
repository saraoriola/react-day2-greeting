import React, { useEffect, useState } from 'react'

const GreetingAlfonsinaFunctional = () => {
    const [name, setName] = useState("Euralio");

    useEffect(() => {
      console.log("componente montado");
      setTimeout(() => {
        setName("Alfonsina");
      }, 3000);
    }, []);
  
    useEffect(() => {
      console.log("componente actualizado");
    });
    return <h1>Hola {name}</h1>;
  };
  
  export default GreetingAlfonsinaFunctional;