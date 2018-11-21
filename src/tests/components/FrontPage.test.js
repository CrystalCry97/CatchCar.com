import React from 'react';
import { shallow } from 'enzyme';
import FrontPage from '../../components/FrontPage';

test('should render FrontPage correctly', () =>{
    const wrapper= shallow(<FrontPage />);
    expect(wrapper).toMatchSnapshot();
});