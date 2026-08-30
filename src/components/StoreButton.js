import { APP_STORE_URL } from '../config';

/// The download call to action.
///
/// While the listing is not live the button says so rather than disappearing:
/// a missing store link is a fact about the product today, and a button that
/// pretends to lead somewhere is worse than one that admits it does not.
function StoreButton({ className = '' }) {
  if (!APP_STORE_URL) {
    return (
      <span className={`cta cta-pending ${className}`.trim()}>
        Coming to the App Store
      </span>
    );
  }

  return (
    <a
      className={`cta cta-primary ${className}`.trim()}
      href={APP_STORE_URL}
      target="_blank"
      rel="noreferrer"
    >
      Download on the App Store
    </a>
  );
}

export default StoreButton;
