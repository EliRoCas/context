// Creando los elementos modularizados 
// import './App.css'

// // Se importa el contexto
// import UserContext from './Context/UserContext'

// // Se importa el "esquema"
// import Information from './Components/Information'

// function App() {

//   const userData = {
//     name: "Julio Marín",
//     age: 23,
//     email: "julio@gmail.com",
//     gender: "masculino"
//   };

//   return (

//     <UserContext.Provider value={userData}>
//       <div className='App'>
//         <h1> Ejercicio usando Context</h1>
//         <Information />

//       </div>
//     </UserContext.Provider>
//   )
// }

// export default App;



// ------------------------------------------------------------------------------------------------------------
// EJEMPLO 2 DE useContext 
// En este caso, en lugar de tener los elementos mudolarizados, estos se incluyen dentro del código de la APP.js

import { createContext, useContext } from 'react';

const ThemeContext = createContext(null);

export default function MyApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  )
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Registrarse</Button>
      <Button>Iniciar sesión</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}

