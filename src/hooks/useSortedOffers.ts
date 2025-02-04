import { useMemo } from 'react';
import { Offer } from '../types/listings';

export const useSortedOffers = (offers: Offer[], sortParam: string) => {
  const sortByYearBuildAsc = (a: Offer, b: Offer) => {
    return (
      new Date(a.zillowData?.yearBuilt || Date.now()).getTime() -
      new Date(b.zillowData?.yearBuilt || Date.now()).getTime()
    );
  };

  const sortByYearBuildDesc = (a: Offer, b: Offer) => {
    return (
      new Date(b.zillowData?.yearBuilt || Date.now()).getTime() -
      new Date(a.zillowData?.yearBuilt || Date.now()).getTime()
    );
  };

  const sortSoldFirst = (a: Offer, b: Offer) => {
    return (a.zillowData?.dateSold || 0) - (b.zillowData?.dateSold || 0);
  };

  const sortSoldLast = (a: Offer, b: Offer) => {
    return (b.zillowData?.dateSold || 0) - (a.zillowData?.dateSold || 0);
  };

  const sortedOffers = useMemo(() => {
    switch (sortParam) {
      case 'newest':
        return [...offers].sort(sortByYearBuildDesc);
      case 'oldest':
        return [...offers].sort(sortByYearBuildAsc);
      case 'soldFirst':
        return [...offers].sort(sortSoldFirst);
      case 'soldLast':
        return [...offers].sort(sortSoldLast);
      default:
        return offers;
    }
  }, [offers, sortParam]);

  return sortedOffers;
};
