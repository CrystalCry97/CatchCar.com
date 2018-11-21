import React from 'react';
import BlankHeader from '../components/BlankHeader';
import CarListFilters from '../components/CarListFilters';
import CarList from '../components/CarList';

const DashboardPage = () => (
    <div >
        <BlankHeader/>
        <CarListFilters />
        <CarList />
    </div>
);

export default DashboardPage;