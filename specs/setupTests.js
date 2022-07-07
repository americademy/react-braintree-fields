import { configure } from 'enzyme'
import React18Adapter from '@zarconontol/enzyme-adapter-react-18'

configure({ adapter: new React18Adapter() })
