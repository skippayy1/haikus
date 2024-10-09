import React from 'react';
import { icons } from '../_data/icons';

const IconComponent = ({ icon_index }) => {

  const selectedIcon = icons[icon_index % icons.length].icon; // Ensure index is within bounds

  return (
    <>{selectedIcon}</>
  );
};

export default IconComponent;