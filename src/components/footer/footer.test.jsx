import { shallow } from 'enzyme';

import { Footer } from './footer';

describe('Footer', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Footer />);
  });

  it('renders text', () => {
    expect(component.text())
        .toBe('React Application tested with Jest and Enzyme');
  });
});
