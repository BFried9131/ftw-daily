/*
 * Marketplace specific configuration.
 */

export const amenities = [
  {
    key: 'detox',
    label: 'Detox',
  },
  {
    key: 'brain_boosters',
    label: 'Brain boosters',
  },
  {
    key: 'probiotics',
    label: 'Probiotics',
  },
  {
    key: 'immunity_builder',
    label: 'Immunity builder',
  },
  {
    key: 'workout_fuel',
    label: 'Workout fuel',
  },
  {
    key: 'indulgence',
    label: 'Indulgence',
  },
];

export const categories = [
  { key: 'salads', label: 'Salads' },
  { key: 'bowls', label: 'Bowls' },
  { key: 'sandwiches', label: 'Sandwiches' },
  { key: 'smoothies', label: 'Smoothies' },
  { key: 'juices', label: 'Juices' },
  { key: 'desserts', label: 'Desserts' },
];

export const benefits = [
  {
    key: 'detox',
    label: 'Detox',
  },
  {
    key: 'brain_boosters',
    label: 'Brain boosters',
  },
  {
    key: 'probiotics',
    label: 'Probiotics',
  },
  {
    key: 'immunity_builder',
    label: 'Immunity builder',
  },
  {
    key: 'workout_fuel',
    label: 'Workout fuel',
  },
  {
    key: 'indulgence',
    label: 'Indulgence',
  },
];

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 1000,
  step: 5,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,
};

// Activate keyword filter on search page

// NOTE: If you are ordering search results by distance the keyword search can't be used at the same time.
// You can turn off ordering by distance in config.js file
export const keywordFilterConfig = {
  active: true,
};

export const sortConfig = {
  // Enable/disable the sorting control in the SearchPage
  active: true,

  // Internal key for the relevance option, see notes below.
  relevanceKey: 'relevance',

  options: [
    { key: 'createdAt', label: 'Newest' },
    { key: '-createdAt', label: 'Oldest' },
    { key: '-price', label: 'Lowest price' },
    { key: 'price', label: 'Highest price' },

    // The relevance is only used for keyword search, but the
    // parameter isn't sent to the Marketplace API. The key is purely
    // for handling the internal state of the sorting dropdown.
    { key: 'relevance', label: 'Relevance', longLabel: 'Relevance (Keyword search)' },
  ],
};
