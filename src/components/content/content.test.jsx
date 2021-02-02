import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';

import { useAsync } from '../../hooks';

import { Content } from './content';

const mockData = Array(15).fill('data');
jest.mock('../../hooks/use-async', () => ({
  useAsync: jest.fn()
}));

const mockPostsService = {
  getAllPosts: jest.fn()
};
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => mockPostsService,
  useEffect: (fn) => fn()
}));

describe('Content', () => {
  let component;

  beforeEach(() => {
    mockStatus();
    renderComponent();
  });

  it('requests the posts', () => {
    expect(mockPostsService.getAllPosts).toBeCalledTimes(1);
  });

  describe('when the status is "loading"', () => {
    beforeEach(() => {
      mockStatus('loading');
      renderComponent();
    });

    it('renders Spinner', () => {
      expect(component.find('Spinner').exists()).toBe(true);
    });
  });

  describe('when the status is "error"', () => {
    beforeEach(() => {
      mockStatus('error');
      renderComponent();
    });

    it('renders ErrorPanel', () => {
      expect(component.find('ErrorPanel').prop('text'))
          .toBe('Failed to fetch data');
    });

    describe('and the user activates retry action', () => {
      beforeEach(() => {
        act(() => {
          component.find('ErrorPanel').prop('onRetry');
        });
      });

      it('requests the posts', () => {
        expect(mockPostsService.getAllPosts).toBeCalledTimes(2);
      });
    });
  });

  describe('when the status is "ready"', () => {
    beforeEach(() => {
      mockStatus('ready');
      renderComponent();
    });

    it('renders Posts', () => {
      expect(component.find('Posts').prop('data'))
          .toEqual(mockData.slice(0, 10));
    });
  });

  function renderComponent() {
    component = shallow(
        <Content />
    );
  }
});

function mockStatus(status) {
  useAsync.mockImplementationOnce((cb) => ({
    data: mockData,
    execute: cb,
    status
  }));
}
