# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2026-07-28

### Added
- Initial public release as an npm package: `all-pakistan-cities-list`
- Comprehensive dataset of **279 cities and towns** across Pakistan, organized by region:
  - Islamabad Capital Territory (1)
  - Punjab (104)
  - Sindh (56)
  - Khyber Pakhtunkhwa, including former FATA merged districts (57)
  - Balochistan (32)
  - Azad Jammu & Kashmir (17)
  - Gilgit-Baltistan (12)
- `data/cities.json` — structured JSON dataset, grouped by region
- `data/cities.html` — ready-to-use HTML `<select>` dropdown with semantic `<optgroup>` sections
- Helper API (`index.js`):
  - `getAllCities()`
  - `getRegions()`
  - `getCitiesByRegion(region, options)`
  - `searchCities(query)`
  - `isValidCity(city)`
  - `raw` — full underlying dataset
- TypeScript type definitions (`index.d.ts`)
- CC0 1.0 (public domain) license

### Changed
- Renamed "Khyber Cities" section to "Khyber Pakhtunkhwa (KPK) Cities"
- Fixed spelling errors:
  - `Fateh Jang` → `Fateh Jhang`
  - `Shikarpaur` → `Shikarpur`
  - `Pishin Valley` → `Pishin`
- Disambiguated similarly-named towns by district:
  - `Jalalpur Pirwala (Multan)`
  - `Jalalpur Jattan (Gujrat)`
  - `Jalalpur Bhattian (Hafizabad)`
- Restructured city groupings from flat `<option disabled>` dividers to semantic `<optgroup>` elements for accessibility

### Fixed
- Removed a duplicate `Darya Khan` entry that had been incorrectly listed under both Punjab and the former Khyber Cities section (correct location: Bhakkar, Punjab)

[1.0.1]: https://github.com/speedytangent/all-Pakistan-cities-list/releases/tag/v1.0.0
