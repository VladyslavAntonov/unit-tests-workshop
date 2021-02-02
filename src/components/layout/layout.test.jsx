import { shallow } from 'enzyme';

import { Layout } from './layout';

jest.mock('../footer', () => ({
  Footer: jest.fn(() => <span>footer</span>)
}));

describe('Layout', () => {
  const mockContent = <span>Test</span>;
  let component;

  beforeEach(() => {
    component = shallow(<Layout>{mockContent}</Layout>);
  });

  it('renders Header', () => {
    expect(component.find('Header').exists()).toBe(true);
  });
});
