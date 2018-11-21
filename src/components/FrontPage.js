import React from 'react';
import { connect } from 'react-redux';
import FrontHeader from '../components/FrontHeader';
import SearchForm from './SearchForm';

const FrontPage = (props) => (
    <div >
        <FrontHeader />
        <SearchForm 
            onSubmit= {(filterData)=> {
                props.history.push('/dashboard'); 
                // TODO: send filterData to DashboardPage
            }}
        />
    </div>
);

export default connect()(FrontPage);