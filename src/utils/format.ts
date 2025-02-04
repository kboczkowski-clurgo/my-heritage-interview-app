export const formatPrice = (price?: number) => {
  return (
    price &&
    Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price)
  );
};

export const formatArea = (area: number) => {
  return Intl.NumberFormat('en-US').format(area);
};
