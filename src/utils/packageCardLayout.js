// Shared display-only helpers for PackageCard grids — used by both the homepage
// teaser (PackagesSection.jsx) and the /packages page (Packages.jsx) so the
// "center the popular tier" and "stagger outward from it" behavior is identical
// in both places. Pure re-render-order helpers; packages.js itself is untouched.

// Moves a `popular: true` item into the middle column of a 3-column grid's
// first row (index 1) so it reads as the row's visual focal point on desktop.
// No-ops for short lists (nothing meaningful to center) or when it's already there.
export const centerPopular = (list) => {
  const popularIndex = list.findIndex((item) => item.popular);
  if (popularIndex <= 1 || list.length < 3) return list;
  const reordered = [...list];
  const [popularItem] = reordered.splice(popularIndex, 1);
  reordered.splice(1, 0, popularItem);
  return reordered;
};

// Staggers a 3-column grid's scroll-in entrance outward from the center column
// (where centerPopular puts the popular card) instead of strictly left-to-right.
export const getRowStaggerDelay = (index, columns = 3) => {
  const rowPos = index % columns;
  const centerCol = Math.floor((columns - 1) / 2);
  const row = Math.floor(index / columns);
  return row * 0.15 + Math.abs(rowPos - centerCol) * 0.08;
};
