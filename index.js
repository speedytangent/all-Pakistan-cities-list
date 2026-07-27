'use strict';

const data = require('./data/cities.json');

/**
 * Returns a flat array of every city/town in the dataset.
 * @returns {string[]}
 */
function getAllCities() {
  return data.regions.reduce((acc, region) => {
    acc.push(...region.cities);
    if (region.former_fata_merged_districts) {
      acc.push(...region.former_fata_merged_districts);
    }
    return acc;
  }, []);
}

/**
 * Returns the list of all region/province names in the dataset.
 * @returns {string[]}
 */
function getRegions() {
  return data.regions.map((region) => region.region);
}

/**
 * Returns the cities belonging to a given region.
 * Matching is case-insensitive and trims whitespace.
 * @param {string} region
 * @param {{ includeFormerFata?: boolean }} [options]
 * @returns {string[]}
 */
function getCitiesByRegion(region, options) {
  if (!region || typeof region !== 'string') return [];

  const opts = options || {};
  const includeFormerFata = opts.includeFormerFata !== false;

  const target = region.trim().toLowerCase();
  const match = data.regions.find(
    (r) => r.region.trim().toLowerCase() === target
  );

  if (!match) return [];

  const cities = [...match.cities];
  if (includeFormerFata && match.former_fata_merged_districts) {
    cities.push(...match.former_fata_merged_districts);
  }
  return cities;
}

/**
 * Case-insensitive substring search across all cities.
 * @param {string} query
 * @returns {string[]}
 */
function searchCities(query) {
  if (!query || typeof query !== 'string') return [];
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return getAllCities().filter((city) => city.toLowerCase().includes(q));
}

/**
 * Returns true if the given string matches a known city name exactly
 * (case-insensitive).
 * @param {string} city
 * @returns {boolean}
 */
function isValidCity(city) {
  if (!city || typeof city !== 'string') return false;
  const target = city.trim().toLowerCase();
  return getAllCities().some((c) => c.toLowerCase() === target);
}

module.exports = {
  raw: data,
  getAllCities,
  getRegions,
  getCitiesByRegion,
  searchCities,
  isValidCity
};
