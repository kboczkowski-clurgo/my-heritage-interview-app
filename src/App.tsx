import { NavigationBar } from './components/navigation';
import { OfferList, OfferListSidebar } from './components/offers';
import { Map } from './components/map';
import { Responsive } from './components/Responsive';
import { useFetchOfferListings } from './hooks/useFetchOfferListings';

function App() {
  useFetchOfferListings();

  return (
    <>
      <NavigationBar />
      <div className="map-offer-list--container">
        <Map />
        <Responsive condition="from" size="tablet">
          <div className="page-content">
            <OfferList />
          </div>
        </Responsive>
        <Responsive condition="upTo" size="mobile">
          <OfferListSidebar>
            <OfferList />
          </OfferListSidebar>
        </Responsive>
      </div>
    </>
  );
}

export default App;
