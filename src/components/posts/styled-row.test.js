import { shallow } from 'enzyme';

import { StyledRow } from './styled-row';

describe('StyledRow', () => {
  let component;

  beforeEach(() => {
    component = shallow(<StyledRow>content</StyledRow>);
  });

  it('matches the snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

