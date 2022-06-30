import { createContext, useEffect, useState } from "react";
import { authOnChangeListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const User = createContext();

 const  UserContext = ({children})=>{
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
      const unsub = authOnChangeListener((user)=>{
        setCurrentUser(user)
        if(user){
            createUserDocumentFromAuth(user);
        }
      })
    console.log("jkks")
    
    //   return unsub;
    }, [])
    
    const value = {currentUser,setCurrentUser};
    return <User.Provider value={value}>
        {children}
    </User.Provider>
}

export default UserContext;