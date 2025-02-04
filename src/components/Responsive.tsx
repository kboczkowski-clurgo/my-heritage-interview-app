import { ReactNode } from 'react';
import MediaQuery from 'react-responsive';

type ScreenType = 'mobile' | 'tablet' | 'desktop';
type ScreenSize = {
  min?: number;
  max?: number;
};

const sizes: Record<ScreenType, ScreenSize> = {
  mobile: {
    min: 0,
    max: 767,
  },
  tablet: {
    min: 768,
    max: 991,
  },
  desktop: {
    min: 992,
  },
};

interface ResponsiveProps {
  size: ScreenType;
  condition: 'upTo' | 'from' | 'equal';
  children: ReactNode;
}

export const Responsive = ({
  size,
  condition = 'upTo',
  children,
}: ResponsiveProps) => {
  switch (condition) {
    case 'upTo': {
      return (
        <MediaQuery maxWidth={sizes[size as ScreenType].max}>
          {children}
        </MediaQuery>
      );
    }

    case 'equal':
      return (
        <MediaQuery minWidth={sizes[size].min} maxWidth={sizes[size].max}>
          {children}
        </MediaQuery>
      );

    case 'from':
    default:
      return (
        <MediaQuery minWidth={sizes[size as ScreenType].min}>
          {children}
        </MediaQuery>
      );
  }
};
