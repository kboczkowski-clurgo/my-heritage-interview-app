import * as React from 'react';
import './NavigationBar.style.scss';
import { Search } from '../search';
import { Responsive } from '../Responsive';

export const NavigationBar = () => {
  const [showSearch, setShowSearch] = React.useState(false);

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  return (
    <>
      <nav>
        <Responsive condition="from" size="tablet">
          <div className="logo">Opendoor</div>
        </Responsive>
        <Responsive condition="upTo" size="mobile">
          <div className="logo">O</div>
        </Responsive>
        <div className="nav__links-wrapper"></div>
        <div className="nav__links center">
          <Responsive condition="from" size="tablet">
            <a className="link" onClick={handleSearchClick}>
              Search
            </a>
          </Responsive>
          <a className="link">Recommended listings</a>
        </div>

        <div className="nav__links">
          <Responsive condition="from" size="tablet">
            <a className="link">Also selling?</a>
            <a className="link">More</a>
          </Responsive>
          <a className="link sign-in">Sign in</a>
        </div>
      </nav>
      <Responsive condition="from" size="tablet">
        {showSearch && <Search onClose={() => setShowSearch(false)} />}
      </Responsive>
    </>
  );
};
