import { useState } from 'react';
import {
  setCurrentPage,
  useOfferListingsStore,
} from '../../store/useOfferListings';
import { Dropdown } from '../dropdown';
import { OfferItem } from './OfferItem';
import './OfferList.style.scss';
import { useSortedOffers } from '../../hooks/useSortedOffers';
import { Pagination } from '../pagination';
import { usePagination } from '../../hooks/usePagination';
import { Footer } from '../footer';
import { Loader } from '../loader';
import { usePaginatedOffers } from '../../hooks/usePaginatedOffers';

const options = {
  newest: 'Newest',
  oldest: 'Oldest',
  soldLast: 'Active',
  soldFirst: 'Sold',
};

const PAGE_SIZE = 30;

export const OfferList = () => {
  const { offers, loading, currentPage } = useOfferListingsStore();

  const [selectedOption, setSelectedOption] = useState<string>('newest');

  const sortedOffers = useSortedOffers(offers, selectedOption);
  const { pages, totalPages } = usePagination(sortedOffers.length, PAGE_SIZE);
  const pageOfOffers = usePaginatedOffers(sortedOffers, currentPage, PAGE_SIZE);

  return (
    <>
      <div className="offer__list">
        <Dropdown
          options={options}
          selectedOption={selectedOption}
          onChange={setSelectedOption}
        />
        {pageOfOffers.map((offer, index) => (
          <OfferItem key={index} {...offer} />
        ))}
        {loading && (
          <>
            <div className="offer__placehoder"></div>
            <Loader />
          </>
        )}
        {!loading && !sortedOffers.length && (
          <>
            <div className="no-offers">No offers</div>
          </>
        )}
        {!loading && (
          <>
            <Pagination
              pages={pages}
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <Footer />
          </>
        )}
      </div>
    </>
  );
};
