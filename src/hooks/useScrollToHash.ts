import { useEffect } from 'react';

export default function useScrollToHash() {
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
}
