// Se importa las dependencia de React, en este caso useContext 
import { useContext } from "react";

// Se importa el contexto 
import UserContext from "../Context/UserContext";

// Se define el componente funcional llamado "userContext", en el que se utiliza el hook 'useContext' que 
// accederá al valor del contexto. 
export default () => useContext(UserContext);