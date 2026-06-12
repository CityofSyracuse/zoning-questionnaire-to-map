# Syracuse Zoning Business Wizard - Starter Prototype

This is a small HTML/CSS/JavaScript prototype for a public-facing zoning business wizard.

## What it does

- Asks step-by-step business-use questions.
- Maps plain-English answers to zoning Use Types.
- Looks up permitted and special-use zoning districts.
- Builds a placeholder ArcGIS Experience Builder URL.
- Shows a disclaimer and result screen.

## How to run

Open `index.html` in your browser.

No build tools are required.

## Files

- `index.html` - page structure
- `styles.css` - visual styling
- `data.js` - decision tree, allowed uses lookup, ArcGIS config
- `app.js` - wizard logic and result rendering

## Next configuration step

In `data.js`, replace:

```js
experienceBuilderUrl: "https://experience.arcgis.com/experience/YOUR_APP_ID",
dataSourceId: "YOUR_DATA_SOURCE_ID",
zoningDistrictField: "ZONE_DISTRICT"
```

with the real values from GIS/ArcGIS Experience Builder.

## Important note

The ArcGIS URL format is a placeholder. The GIS team should confirm the final Experience Builder URL parameter format.
