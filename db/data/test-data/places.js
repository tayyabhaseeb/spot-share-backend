const places = [
  {
    creator: 1, // reference to user inserted first
    title: "Heaton Park",
    description:
      "A peaceful historic park with green landscapes and family activities.",
    created_at: 1720100000000,
    likes: 25,
    images: [1, 2], // these reference image indexes, not IDs
    address: "Middleton Rd, Manchester M25 2SW, UK",
    location: { lat: 53.5339, lon: -2.2635 },
  },
  {
    creator: 2,
    title: "Manchester Central Library",
    description: "A stunning circular library in the heart of Manchester.",
    created_at: 1720103600000,
    likes: 30,
    images: [3, 4],
    address: "St Peter's Square, Manchester M2 5PD, UK",
    location: { lat: 53.4774, lon: -2.2446 },
  },
  {
    creator: 3,
    title: "Salford Quays",
    description:
      "A waterfront with galleries, shopping, and the iconic MediaCityUK.",
    created_at: 1720107200000,
    likes: 18,
    images: [5, 6],
    address: "Salford Quays, Salford M50, UK",
    location: { lat: 53.47, lon: -2.297 },
  },
];
