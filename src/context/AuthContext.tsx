import { createContext, useContext } from "react";
const authState:{[key:string]:any} = {};

export const AuthContext = createContext(authState);

export const AuthState = (props: any) => (
    <AuthContext.Provider value={authState} >
        {props.children}
    </AuthContext.Provider>
)

export const useAuth = () => {
    return useContext(AuthContext);
}