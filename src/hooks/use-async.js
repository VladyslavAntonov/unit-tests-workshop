import { useCallback, useState } from 'react';

export function useAsync(request) {
  const [status, setStatus] = useState();
  const [data, setData] = useState(null);

  const execute = useCallback(async () => {
    try {
      setStatus('loading');
      const result = await request;
      setData(result);
      setStatus('ready');
    } catch (e) {
      setStatus('error');
    }
  }, []);

  return { status, data, execute };
}
