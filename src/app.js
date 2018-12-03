import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import {firebase} from './firebase/firebase';
import {login,logout} from './actions/auth';
import {startSetCars} from './actions/cars';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'; // see SingleDatePicker airbnb github

const store = configureStore();

const jsx =(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp=() => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered= true;
    }
};

ReactDOM.render(<p>Loading . . .</p>, document.getElementById('app'));

store.dispatch(startSetCars()).then(() => {
    renderApp();
});


// firebase.auth().onAuthStateChanged((user) => {
//     console.log(history.location.pathname);
//     //console.log(user.email);
//     if(user){
//         // store.dispatch(login(user.uid));
//         renderApp();
       
//         // if(history.location.pathname === '/company-login'){
//              history.push('/company-login/dashboard');
//         //     console.log('auth')
//         // }
//         console.log('auth');
//     }else{
//         // store.dispatch(logout());
//         renderApp();
//          history.push('/');
//         console.log('no auth');
//     }
// });
