import { createStore, combineReducers} from 'redux';
import carsReducer from '../reducers/cars';
import filtersReducer from '../reducers/filters';

// Store Creation

export default () => {
    const store= createStore(
        combineReducers({
            cars: carsReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
    return store;
};



