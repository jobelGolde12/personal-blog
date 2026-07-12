import { useEffect, useState } from 'react';
import { fetchInfo } from '../services/infoService';

export const useInfo = () => {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadInfo = async () => {
      try {
        setLoading(true);
        const data = await fetchInfo();
        setInfo(data);
      } catch (err) {
        setError(err);
        console.error('Failed to load info:', err);
      } finally {
        setLoading(false);
      }
    };

    loadInfo();
  }, []);

  return { info, loading, error };
};
