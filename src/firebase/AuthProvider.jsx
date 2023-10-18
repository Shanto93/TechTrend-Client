import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "./firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    
    const userCreate = (email, password) => {
        return createUs

    }
    const AuthInfo = {
        userCreate,
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;