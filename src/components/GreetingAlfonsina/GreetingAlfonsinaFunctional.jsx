import React, { useEffect, useState } from 'react'

const GreetingAlfonsinaFunctional = () => {
    const [name, setName] = useState("Euralio");

    useEffect(() => {
      setTimeout(() => {
        setName("Alfonsina");
      }, 3000);
    }, []);
  
    useEffect(() => {
    });
    return <h1>Hola {name}</h1>;
  };
  
  export default GreetingAlfonsinaFunctional;