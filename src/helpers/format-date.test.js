import { formatDate } from './format-date';

describe('formatDate', () => {
  const mockDate = new Date('2020-02-02');
  let result;

  beforeEach(() => {
    result = formatDate(mockDate);
  });

  it('formats date to default format', () => {
    expect(result).toBe('February 2, 2020');
  });

  describe('when the format is provided', () => {
    beforeEach(() => {
      result = formatDate(mockDate, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      });
    });

    it('formats date to provided format', () => {
      expect(result).toBe('2/2/2020');
    });
  });
});
