import { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { ErrorPanel } from './error-panel';

const mockRetry = jest.fn();

describe('ErrorPanel', () => {
  let component;

  beforeEach(() => {
    component = shallow(
        <ErrorPanel text="text" onRetry={mockRetry} />
    );
  });

  it('renders error message', () => {
    expect(component.children().at(0).text())
        .toBe('Error: text');
  });

  it('renders retry button', () => {
    expect(component.find('Button').children().text())
        .toBe('Retry');
  });

  describe('when the user clicks the retry button', () => {
    beforeEach(() => {
      act(() => {
        component.find('Button').simulate('click');
      });
    });

    it('calls the provided handler', () => {
      expect(mockRetry).toHaveBeenCalledTimes(1);
    });
  });
});
