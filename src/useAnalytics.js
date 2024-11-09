
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useAnalytics = () => {
    const location = useLocation();

    useEffect(() => {
        if (typeof window.gtag === 'function') {
            window.gtag('config', 'G-T4HP1V3RYS', {
                page_path: location.pathname,
            });
        }
    }, [location]);
};

export default useAnalytics;
