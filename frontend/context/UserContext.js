import { createContext, useEffect, useState } from "react";

export const usersContext = createContext({});

usersContext.displayName = "UsersContext";

export const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function validateData(username, email, password, confirmpassword) {
        if (password === confirmpassword && validatePassword(password)) {
            console.log("password");
            if (username.length > 3 && username.length < 16) {
                console.log("username");
                if (validateEmail(email)) {
                    console.log("email")
                    return true;
                }
            }
        }
        return false;
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const validatePassword = (password) => {
        return String(password)
            .match(
                /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/
            );
    };

    function addUser() {
        if (validateData()) {
            var user = {
                username: username,
                age: age,
                gender: gender,
                email: email,
                password: password
            }

            setUsers([...users, user]);
            reset();

            return user;
        }
        return null;
    }

    const reset = () => {
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    const verifyLogin = (email, password) => {
        var res = false;

        users.map(user => {
            console.log(user);
            if (user.email === email && user.password === password) {
                res = true;
            }
        })

        return res;
    }

    return (
        <usersContext.Provider value={{
            users, setUsers,
            username, setUsername,
            email, setEmail,
            password, setPassword,
            confirmPassword, setConfirmPassword,
            reset,
            addUser,
            validateData,
            verifyLogin,
            validateEmail,
            validatePassword
        }}>
            {children}
        </usersContext.Provider>
    );
}