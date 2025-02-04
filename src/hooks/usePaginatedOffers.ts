import { useMemo } from 'react';
import { Offer } from '../types/listings';

export const usePaginatedOffers = (
  offers: Offer[],
  currentPage: number,
  pageSize: number,
) => {
  const paginatedOffers = useMemo(() => {
    const start = currentPage * pageSize;
    const end = start + pageSize;

    return offers.slice(start, end);
  }, [offers, currentPage, pageSize]);

  return paginatedOffers;
};
