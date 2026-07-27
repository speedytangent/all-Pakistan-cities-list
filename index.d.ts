export interface Region {
  /** Name of the province/region, e.g. "Punjab" */
  region: string;
  /** Cities/towns belonging to this region */
  cities: string[];
  /** Only present on the Khyber Pakhtunkhwa (KPK) region entry */
  former_fata_merged_districts?: string[];
}

export interface CitiesData {
  country: string;
  total_cities: number;
  regions: Region[];
}

export interface GetCitiesByRegionOptions {
  /**
   * Whether to include former FATA towns when requesting the KPK region.
   * Defaults to true.
   */
  includeFormerFata?: boolean;
}

/** The full underlying dataset. */
export const raw: CitiesData;

/** Returns a flat array of every city/town in the dataset. */
export function getAllCities(): string[];

/** Returns the list of all region/province names in the dataset. */
export function getRegions(): string[];

/**
 * Returns the cities belonging to a given region.
 * Matching is case-insensitive.
 */
export function getCitiesByRegion(
  region: string,
  options?: GetCitiesByRegionOptions
): string[];

/** Case-insensitive substring search across all cities. */
export function searchCities(query: string): string[];

/**
 * Returns true if the given string matches a known city name exactly
 * (case-insensitive).
 */
export function isValidCity(city: string): boolean;
