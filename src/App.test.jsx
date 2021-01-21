import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('renders layout', () => {
    expect(component.find('Layout').exists()).toBe(true);
  });

  it('renders content', () => {
    expect(component.find('Content').exists()).toBe(true);
  });
});
