import { Offer } from '../../types/listings';
import emptyImage from '../../assets/empty.jpg';
import './OfferItem.style.scss';
import { formatArea, formatPrice } from '../../utils/format';

export const OfferItem = ({ userData, address, zillowData }: Offer) => {
  const getDetails = () => {
    return [
      zillowData?.bedrooms && `${zillowData.bedrooms} bd`,
      zillowData?.bathrooms && `${zillowData.bathrooms} ba`,
      zillowData?.livingAreaValue &&
        `${formatArea(zillowData.livingAreaValue)} ft²`,
    ]
      .filter(Boolean)
      .join(' ');
  };

  return (
    <div className="offer__item">
      <div className="offer__item-images">
        <img src={emptyImage} alt="house" />
      </div>
      <div className="offer__item-details">
        <p className="price">
          {userData.askingPrice ? formatPrice(userData.askingPrice) : '-'}
        </p>
        <p>{getDetails()}</p>
        <p>
          {address.streetNumber} {address.route},
        </p>
        <p>
          {address.locality}, {address.stateCode}
        </p>
      </div>
    </div>
  );
};
