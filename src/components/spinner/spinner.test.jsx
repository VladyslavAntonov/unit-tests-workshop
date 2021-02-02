import { shallow } from 'enzyme';

import { Spinner } from './spinner';

describe('Spinner', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Spinner />);
  });

  it('matches the snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
