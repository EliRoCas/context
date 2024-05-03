// Lo primero que se debe hacer, crear el contexto 
import { createContext } from "react";

const UserContext = createContext({
    name: null,
    age: null,
    email: null,
    gender: null,
});

export default UserContext; 
