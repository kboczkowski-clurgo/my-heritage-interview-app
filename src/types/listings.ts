interface OfferAddress {
  country: string;
  formattedAddress: string;
  friendlyUrl: string;
  googlePlaceId: string;
  kind: string;
  locality: string;
  location: number[];
  route: string;
  state: string;
  stateCode: string;
  streetNumber: string;
  zipcode: string;
}

interface OfferUserData {
  arv: number;
  askingPrice: number;
  description: string;
  foundationIssues: boolean;
  hoaFee: unknown;
  hoaPeriod: unknown;
  inspectionAvailability: unknown[];
  isUnderContract: boolean;
  linkToPhotos: string;
  occupancy: string;
  rehabCost: number;
  relationship: string;
  rent: number;
  sellerCommision: unknown;
  updatedAskingPrice: unknown[];
  wastewaterType: string;
}

interface OfferZillowData {
  bathrooms: number;
  bedrooms: number;
  dateSold: number;
  hasPool: boolean;
  hdpUrl: string;
  hoeFee: number;
  homeStatus: string;
  homeType: string;
  listing_sub_type: unknown;
  livingAreaValue: number;
  lotSize: unknown;
  parkingSpaces: number;
  rentZestimate: number;
  schoolRating: number;
  yearBuilt: number;
  zestimate: number;
}

export interface Offer {
  address: OfferAddress;
  userData: OfferUserData;
  zillowData: OfferZillowData;
}

export interface OffersListing {
  success: boolean;
  deals: Offer[];
}
