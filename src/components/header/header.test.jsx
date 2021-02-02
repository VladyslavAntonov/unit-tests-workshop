import { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { Header } from './header';

const mockDate = new Date('2019-01-02');

jest.mock('../../helpers/format-date', () => ({
  formatDate: (date) => `formatted ${date.toString()}`
}));

describe('Header', () => {
  let component;

  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(mockDate.getTime());
  });

  beforeEach(() => {
    component = shallow(<Header />);
  });

  afterAll(() => {
    jest.restoreAllMocks();
    jest.useRealTimers();
  });

  it('renders title', () => {
    expect(component.find('[data-test-id="header-title"]').text())
        .toBe('Unit Tests');
  });

  it('renders current date', () => {
    expect(component.find('[data-test-id="header-date"]').text())
        .toBe(`formatted ${mockDate.toString()}`);
  });

  it('renders refresh button', () => {
    expect(component.find('Button').find('RefreshIcon').exists())
        .toBe(true);
  });

  describe('when the user clicks the refresh button', () => {
    const location = window.location;

    beforeAll(() => {
      delete window.location;
      window.location = {
        ...location,
        reload: jest.fn()
      };
    });

    beforeEach(() => {
      act(() => {
        component.find('Button').simulate('click');
      });
    });

    afterAll(() => {
      window.location = location;
    });

    it('refreshes the browser', () => {
      expect(window.location.reload).toBeCalledTimes(1);
    });
  });
});
