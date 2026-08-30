import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/// A hash route change keeps the browser's scroll position, so following
/// "Privacy Policy" from the bottom of the home page lands you in the middle
/// of the policy. Put the reader at the top of whatever they just opened.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
