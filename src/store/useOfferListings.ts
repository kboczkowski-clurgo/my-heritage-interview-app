import { create } from 'zustand';
import { Offer, OffersListing } from '../types/listings';

interface OfferListingsStore {
  offers: Offer[];
  loading: boolean;
  isError: boolean;
  currentPage: number;
}

export const useOfferListingsStore = create<OfferListingsStore>(() => ({
  offers: [],
  loading: false,
  isError: false,
  currentPage: 0,
}));

export const getOfferListings = async () => {
  useOfferListingsStore.setState({ loading: true, isError: false });

  try {
    const response = await fetch(
      'https://u2oyhiwlmc.execute-api.us-east-1.amazonaws.com/production/get-listings',
    );
    const result = (await response.json()) as OffersListing;

    useOfferListingsStore.setState({
      offers: result.deals,
      loading: false,
      isError: false,
    });
  } catch {
    useOfferListingsStore.setState({ isError: true });
  } finally {
    useOfferListingsStore.setState({ loading: false });
  }
};

export const setCurrentPage = (page: number) => {
  useOfferListingsStore.setState({ currentPage: page });
};
