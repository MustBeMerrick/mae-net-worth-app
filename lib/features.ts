// Toggle any of these to bring a hidden feature back — routes and code stay
// in place either way, this just controls nav visibility and dashboard widgets.
export const FEATURES = {
  plaidSync: false,
  takeSnapshot: false,
  allocationChart: false,
  trendChart: false,
  snapshotsPage: false,
  annualReturnsPage: false,
  chartsPage: false,
} as const;
