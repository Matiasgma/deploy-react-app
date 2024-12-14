import Advice from "./components/Advice"
import UserFinder from "./components/UserFinder"

function App() {

  return (
    <>
      <UserFinder />
      <Advice />
    </>
  )
}

export default App

// EJERCICIO 2
// - Crea un componente llamado Advice.jsx e importalo desde App.jsx. 
// - El componente debe consumir la API https://api.adviceslip.com/advice que entrega consejos aleatorios, utilizando el customHook useFetch.jsx. 
// - Crea una variable de entorno que almacene la url de la API de consejos.
// - Muestra la frase en una etiqueta HTML o algun componente de texto de Material UI. (15 minutos).
