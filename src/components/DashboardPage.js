import React, {lazy, Suspense} from 'react';
import BlankHeader from '../components/Header/BlankHeader';
import CarListFilters from '../components/CarListFilters';
import CarList from '../components/CarList';
//const CarList = lazy(()=>  System.import ('./CarList') );

const DashboardPage = () => (
    <div className="dashboard">
        <BlankHeader/>
        <CarListFilters />
        {/** <Suspense fallback={<div>Loading ...</div>}>*/}
            <CarList />
        {/** </Suspense>*/}
        
    </div>
);

export default DashboardPage;