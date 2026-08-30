/// The WorthLater mark: a small point lifted along the app's exponential to a
/// large one. The same drawing as the app icon, reduced to what survives at
/// 28px — the curve and its two ends.
function Mark({ size = 28 }) {
  return (
    <svg
      className="mark"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label="WorthLater"
    >
      <path
        d="M1 28.5C7.5 28.5 14 25 18.5 17.5C22 11.7 25.5 6 31 1"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <circle cx="9.6" cy="27" r="2.6" fill="currentColor" />
      <circle cx="24.4" cy="8" r="4.4" fill="currentColor" />
    </svg>
  );
}

export default Mark;
