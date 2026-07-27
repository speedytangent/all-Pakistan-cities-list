# All-Pakistan-cities-list
![npm version](https://img.shields.io/npm/v/all-pakistan-cities-list.svg)
![license](https://img.shields.io/badge/license-CC0--1.0-blue.svg)
![npm downloads](https://img.shields.io/npm/dm/all-pakistan-cities-list.svg)
![GitHub stars](https://img.shields.io/github/stars/speedytangent/all-Pakistan-cities-list.svg?style=social)


A comprehensive, up-to-date list of 279 cities and towns across Pakistan, organized by province and region — including Punjab, Sindh, Khyber Pakhtunkhwa (with former FATA merged districts), Balochistan, Azad Jammu & Kashmir, Gilgit-Baltistan, and the Islamabad Capital Territory.
📦 View on npm · 🐙 View on GitHub
Ships as structured JSON data plus a lightweight helper API, along with a ready-to-use HTML `<select>` dropdown for forms — ideal for e-commerce checkouts, delivery/CRM apps, registration forms, and location pickers targeting a Pakistani audience.
Why this package
✅ Complete — all provinces and territories, including regions often missing from other lists (AJK, Gilgit-Baltistan, former FATA)
✅ Corrected — fixed common spelling errors (e.g. Shikarpur, Fateh Jhang, Pishin) and de-duplicated ambiguous town names
✅ Disambiguated — similarly-named towns are labeled by district (e.g. `Jalalpur Pirwala (Multan)` vs `Jalalpur Jattan (Gujrat)`)
✅ Framework-agnostic — plain JSON + a small helper API, works in Node, browsers, React, Vue, or any backend
✅ TypeScript-ready — includes type definitions
✅ Public domain — CC0 licensed, no attribution required
Install
```bash
npm install all-pakistan-cities-list
```
```bash
yarn add all-pakistan-cities-list
```
```bash
pnpm add all-pakistan-cities-list
```
Usage
Get all cities
```js
const { getAllCities } = require('all-pakistan-cities-list');

console.log(getAllCities());
// ['Ahmed Nager Chatha', 'Ahmadpur East', ..., 'Yasin']
```
Get all region/province names
```js
const { getRegions } = require('all-pakistan-cities-list');

console.log(getRegions());
// ['Islamabad Capital Territory', 'Punjab', 'Sindh', 'Khyber Pakhtunkhwa (KPK)', 'Balochistan', 'Azad Jammu & Kashmir', 'Gilgit-Baltistan']
```
Get cities in a specific region
```js
const { getCitiesByRegion } = require('all-pakistan-cities-list');

console.log(getCitiesByRegion('Sindh'));
// ['Badin', 'Bhirkan', 'Rajo Khanani', ..., 'Warah']
```
Search cities (autocomplete-friendly)
```js
const { searchCities } = require('all-pakistan-cities-list');

console.log(searchCities('jalal'));
// ['Jalalpur Pirwala (Multan)', 'Jalalpur Jattan (Gujrat)', 'Jalalpur Bhattian (Hafizabad)']
```
Access the raw structured data
```js
const { raw } = require('all-pakistan-cities-list');

console.log(raw.total_cities); // 279
console.log(raw.regions[0]);
// { region: 'Islamabad Capital Territory', cities: ['Islamabad'] }
```
ES Modules / TypeScript
```ts
import { getAllCities, getCitiesByRegion, searchCities, raw } from 'all-pakistan-cities-list';

```
```

HTML dropdown
A ready-to-use `<select>` element with semantic `<optgroup>` sections is included at `data/cities.html` — drop it directly into any form.
City counts by region
Region	Cities
Islamabad Capital Territory	1
Punjab	104
Sindh	56
Khyber Pakhtunkhwa (incl. former FATA)	57
Balochistan	32
Azad Jammu & Kashmir	17
Gilgit-Baltistan	12
Total	279
API Reference
Function	Description	Returns
`getAllCities()`	Flat list of every city in the dataset	`string[]`
`getRegions()`	List of all region/province names	`string[]`
`getCitiesByRegion(region)`	Cities within a given region (case-insensitive match)	`string[]`
`searchCities(query)`	Case-insensitive substring search across all cities	`string[]`
`raw`	The full underlying JSON data structure	`CitiesData`
Data source & maintenance
This list is manually compiled and periodically corrected for spelling, duplicates, and administrative changes (e.g. former FATA districts merged into KPK in 2018). Contributions and corrections are welcome — see below.
Contributing
Found a missing city, an incorrect spelling, or an outdated administrative boundary? Contributions are welcome:
Fork the repository: speedytangent/all-Pakistan-cities-list
Clone it: `git clone https://github.com/speedytangent/all-Pakistan-cities-list.git`
Update `data/cities.json` (and `data/cities.html` if applicable)
Open a pull request with a short description of the change
License
Released under CC0 1.0 — public domain. Use freely in personal, open-source, or commercial projects with no attribution required.
Related
If you're building a location picker, delivery app, or registration form for Pakistan, this package pairs well with:
Postal code / zip code datasets
Province/district boundary GeoJSON files
Urdu-language city name transliterations (planned for a future release — contributions welcome)
---
If this package is useful to you, consider starring the repo on GitHub — it helps others discover it.