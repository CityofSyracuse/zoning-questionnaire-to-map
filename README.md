# Syracuse Zoning Wizard

A public-facing prototype web tool for helping users explore possible zoning districts for a proposed business in Syracuse, NY.

The wizard asks a series of plain-language questions about the user’s business type and returns a likely zoning use category, permitted zoning districts, special-use districts, and a link placeholder for an ArcGIS Experience Builder map.

## Project Purpose

This tool is intended to help business owners, commercial tenants, realtors, and city staff better understand where certain business uses may be allowed under Syracuse zoning.

It is a discovery tool only. It does not provide zoning approval, permit approval, certificate of occupancy approval, building code review, fire review, or legal determination.

## Features

- Step-by-step business use wizard
- Plain-language questions and answers
- Result screen showing:
  - likely zoning use type
  - permitted zoning districts
  - special-use districts
  - important disclaimer
- Placeholder ArcGIS Experience Builder URL integration
- Syracuse logo and simple public-facing layout
- Built with plain HTML, CSS, and JavaScript

## File Structure

```text
zoning-wizard/
├── index.html
├── styles.css
├── app.js
├── data.js
└── assets/
    └── syracuse-logo.webp
