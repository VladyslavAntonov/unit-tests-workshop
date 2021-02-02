import { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { Button } from './button';

const mockOnClick = jest.fn();
const mockContent = 'test';
const mockClass = 'class';

describe('Button', () => {
  let component;

  beforeEach(() => {
    renderComponent();
  });

  it('renders provided content', () => {
    expect(component.text()).toBe(mockContent);
  });

  it('applies provided class name', () => {
    expect(component.prop('className')).toContain(mockClass);
  });


  describe('when the user clicks the button', () => {
    beforeEach(() => {
      act(() => {
        component.find('button').simulate('click');
      });
    });

    it('calls the provided handler', () => {
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });

  function renderComponent() {
    component = shallow(
        <Button
          className={mockClass}
          onClick={mockOnClick}
        >
          {mockContent}
        </Button>
    );
  }
});
