'use client';

import { useEffect, useState } from 'react';

type DeviceType = {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
};

const useDeviceType = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>({
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 0 && width <= 600) {
        setDeviceType({ isMobile: true, isLaptop: false, isTablet: false, isDesktop: false });
      } else if (width > 600 && width < 1280) {
        setDeviceType({ isMobile: false, isTablet: true, isDesktop: false, isLaptop: false });
      } else if (width > 1280 && width < 1366) {
        setDeviceType({ isMobile: false, isTablet: false, isDesktop: false, isLaptop: true });
      } else {
        setDeviceType({ isMobile: false, isTablet: false, isDesktop: true, isLaptop: false });
      }
    };

    // Set initial values
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType;
};

export default useDeviceType;
