import { useEffect, useRef } from 'react';
import { getOfferListings } from '../store/useOfferListings';

export const useFetchOfferListings = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      getOfferListings();
    }
  }, []);
};
