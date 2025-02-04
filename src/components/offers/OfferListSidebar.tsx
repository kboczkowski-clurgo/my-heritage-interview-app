import { ReactNode, useState } from 'react';
import './OfferListSidebar.style.scss';
import classNames from 'classnames';

interface OfferListSidebarProps {
  children: ReactNode;
}

export const OfferListSidebar = ({ children }: OfferListSidebarProps) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <aside
        className={classNames('offer__list-sidebar', { show: showSidebar })}
      >
        {children}
      </aside>
      <div className="fab__wrapper">
        <button className="fab" onClick={() => setShowSidebar((prev) => !prev)}>
          {showSidebar ? 'Map' : 'List'}
        </button>
      </div>
    </>
  );
};
