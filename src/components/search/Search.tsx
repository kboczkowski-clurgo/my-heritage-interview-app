import { useMemo, useState } from 'react';
import { useOfferListingsStore } from '../../store/useOfferListings';
import { Input } from './Input';
import './Search.style.scss';
import { formatPrice } from '../../utils/format';

interface SearchProps {
  onClose: () => void;
}

export const Search = ({ onClose }: SearchProps) => {
  const { offers } = useOfferListingsStore();
  const [keyword, setKeyword] = useState('');

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const filteredOffers = useMemo(() => {
    return offers.filter((offer) =>
      offer.address.formattedAddress
        .toLocaleLowerCase()
        .includes(keyword.toLocaleLowerCase()),
    );
  }, [keyword, offers]);

  const getHighlightedText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <mark key={index}>{part}</mark>
          ) : (
            part
          ),
        )}
      </span>
    );
  };

  return (
    <div className="search" onClick={handleOutsideClick}>
      <div className="search__input">
        <Input value={keyword} onChange={setKeyword} />
      </div>
      {keyword && (
        <div className="search__results">
          <div className="search__results-header">Listings</div>
          <div className="search__results-list">
            {filteredOffers.map((offer, index) => (
              <div key={index} className="search__results-item">
                <div>
                  {getHighlightedText(offer.address.formattedAddress, keyword)}{' '}
                  <span className="search__result-price">
                    {formatPrice(offer.userData.askingPrice)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
