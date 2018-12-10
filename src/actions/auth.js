import { firebase } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = (userAuth) => {
    return() => {
        return firebase.auth().signInWithEmailAndPassword(userAuth.email,userAuth.password).then((u)=>{
            console.log("login success");
            console.log(u);
        }).catch((error) => {
            console.log(error);
            // console.log("email get here: "+ userAuth.email);
            // console.log("password get here: "+ userAuth.password);
        });
  };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return() => {
        return firebase.auth().signOut().then(() => {
            console.log("logout success");
        }).catch((error) => {
            console.log(error);
        });
    };
};