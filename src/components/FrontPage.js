import React from 'react';
import { connect } from 'react-redux';
import FrontHeader from '../components/FrontHeader';
import SearchForm from './SearchForm';
import { setPickupLocationFilter} from '../actions/filters';

const FrontPage = (props) => (
    <div >
        <FrontHeader />
        <SearchForm 
            onSubmit= {(filterData)=> {
                console.log(filterData.pickupLocation);
                props.dispatch(setPickupLocationFilter(filterData.pickupLocation));
                props.history.push('/dashboard'); 
            }}
        />
    </div>
);

const mapStatetoProps = (state) => {
    return {
        filters:state.filters
    };
};


export default connect(mapStatetoProps)(FrontPage);