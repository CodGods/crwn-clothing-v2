import { createContext, useState } from "react";

export const User = createContext();

 const  UserContext = ({children})=>{
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser};
    return <User.Provider value={value}>
        {children}
    </User.Provider>
}

export default UserContext;