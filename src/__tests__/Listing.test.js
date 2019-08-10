import React from 'react';
import renderer from 'react-test-renderer';
import { shallow} from 'enzyme';
import Listing from '../components/Listing';
import configureMockStore from 'redux-mock-store';
import Thunk from 'redux-thunk'

const middleware = [Thunk]
const mockStore = configureMockStore(middleware);
const store = mockStore()

describe('Tests Listing component', ()=>{
    const wrapper = shallow(<Listing/>, {context:{store}})
    it('renders properly',()=>{
        shallow(<Listing/>, {context:{store}})
        expect(wrapper).toMatchSnapshot()
    });
});