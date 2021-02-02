import { mount } from 'enzyme';

import { Posts } from './posts';

const mockData = [
  { id: 1, userId: 'i1', title: 't1', body: 'b1' },
  { id: 2, userId: 'i2', title: 't2', body: 'b2' },
  { id: 3, userId: 'i3', title: 't3', body: 'b3' }
];

describe('Posts', () => {
  let component;

  beforeEach(() => {
    component = mount(<Posts data={mockData} />);
  });

  it('matches the snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
