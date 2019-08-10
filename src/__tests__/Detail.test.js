import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Detail from '../components/Detail';
import configureMockStore from 'redux-mock-store';
import { StaticRouter } from 'react-router'
import Thunk from 'redux-thunk'

const middleware = [Thunk]
const mockStore = configureMockStore(middleware);
const store = mockStore()

describe('Test Detail Component',()=>{
    const wrapper = shallow(<Detail/>, {context:{store}})
    it('renders properly',()=>{
        shallow(<Detail/>, {context:{store}})
        expect(wrapper).toMatchSnapshot()
    });

})