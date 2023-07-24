import { createContext, useState } from "react";

export const UserContext = createContext({
    user: null,
    login: (user) => {},
    logout: () => {},
});

function UserContextProvider(props) {
    const [user, setUser] = useState(null);

    function loginHandler(user) {
        setUser(user);
    }

    function logoutHandler() {
        setUser(null);
    }

    const context = {
        user: user,
        login: loginHandler,
        logout: logoutHandler,
    };

    return (
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;