import { shallow } from 'enzyme';

import { StyledCell } from './styled-cell';

describe('StyledCell', () => {
  let component;

  beforeEach(() => {
    component = shallow(<StyledCell>content</StyledCell>);
  });

  it('matches the snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
