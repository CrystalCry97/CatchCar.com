import React from 'react';
import { shallow } from 'enzyme';
import FrontHeader from '../../components/Header/FrontPageHeader';

test('should render FrontHeader correctly', () =>{
    const wrapper= shallow(<FrontHeader />);
    expect(wrapper).toMatchSnapshot();
});