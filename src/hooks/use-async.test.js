import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';

import { useAsync } from './use-async';

describe('useAsync', () => {
  let hook;
  let resolve;
  let reject;

  beforeEach(() => {
    const cb = async () => await new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    hook = renderHook(() => useAsync(cb));
  });

  it('returns no data', () => {
    expect(hook.result.current.data).toBe(null);
  });

  describe('when the callback is executed', () => {
    beforeEach(() => {
      act(() => {
        hook.result.current.execute();
      });
    });

    it('sets status to loading', () => {
      expect(hook.result.current.status).toBe('loading');
    });

    describe('and the request was successful', () => {
      beforeEach(async () => {
        await act(async () => {
          await resolve('data');
        });
      });

      it('sets status to ready', () => {
        expect(hook.result.current.status).toBe('ready');
      });

      it('sets the data', () => {
        expect(hook.result.current.data).toBe('data');
      });
    });

    describe('and the request failed', () => {
      beforeEach(async () => {
        await act(async () => {
          await reject();
        });
      });

      it('sets status to ready', () => {
        expect(hook.result.current.status).toBe('error');
      });
    });
  });
});
