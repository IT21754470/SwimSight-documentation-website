This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.gitignore
.repomixignore
eslint.config.mjs
next.config.ts
package.json
postcss.config.js
public/file.svg
public/globe.svg
public/next.svg
public/tech/flask.svg
public/tech/flutter.svg
public/tech/googlemaps.svg
public/tech/opencv.svg
public/tech/openmeteo.svg
public/tech/python.svg
public/tech/supabase.svg
public/tech/tensorflow.svg
public/tech/whatsapp.svg
public/vercel.svg
public/window.svg
README.md
repomix.config.json
src/app/documents/page.tsx
src/app/globals.css
src/app/layout.tsx
src/app/page.tsx
src/app/project/disease-detection/page.tsx
src/app/project/harvest-prediction/page.tsx
src/app/project/market-prediction/page.tsx
src/app/project/weather-recommendations/page.tsx
src/app/tailwind.css
src/components/AboutSection.tsx
src/components/Banner.tsx
src/components/ContactSection.tsx
src/components/DocumentsSection.tsx
src/components/DomainSection.tsx
src/components/FeaturesSection.tsx
src/components/Footer.tsx
src/components/Header.tsx
src/components/MilestonesSection.tsx
src/components/ResearchResultsSection.tsx
src/components/ScrollToTop.tsx
src/components/TeamSection.tsx
src/components/VideoSection.tsx
src/lib/utils.ts
tsconfig.json
```

# Files

## File: .gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
````

## File: .repomixignore
````
# Add patterns to ignore here, one per line
# Example:
# *.log
# tmp/

ui/
components/ui
````

## File: eslint.config.mjs
````
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
````

## File: postcss.config.js
````javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
````

## File: public/file.svg
````
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
````

## File: public/globe.svg
````
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
````

## File: public/next.svg
````
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
````

## File: public/tech/flask.svg
````
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px"><linearGradient id="path2900_1_" x1="14.099" x2="14.099" y1="16.277" y2="43.569" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path id="path2900" fill="url(#path2900_1_)" d="M8.4,41.8c-1.1-0.8-2.2-1.7-3-2.8c-1.6-2-2.9-4.3-3.8-6.8c-0.5-1.6-0.7-3.3-1.4-4.8	c-0.7-1.1,0.1-2.3,1.3-2.7c0.5-0.1,1.5-0.6,0.3-0.2c-1,0.8-1.1-0.7-0.1-0.8c0.7-0.1,1-0.7,0.7-1.2c-0.8-0.5,1.9-1.1,0.5-1.8	c-1.4-1.5,1.9-1.8,1.1-0.1c-0.2,1.3,2.3-0.2,1.7,1.3C6.6,22.6,8.3,22,8.2,23c0.9,0.1,1.2,0.8,2,0.8c0.8,0.4,2.4,0.7,2.7,1.6	C12,26.2,10.1,24.2,10,26c0.3,2.7,0.2,5.5,1.2,8.1c0.5,1.6,1.6,2.8,2.6,4c1,1.2,2.3,2,3.7,2.7c1.2,0.6,2.5,0.9,3.8,1.2	c0.5-0.4,1.5-1.9,2.3-1.3c0,0.7-1.6,1.5-0.1,1.4c0.9-0.3,1.5,0.7,2.3-0.2c0.7,0.8,2.9-0.5,2.4,1.2c-0.7,0.4-1.6,0.2-2.3,0.8	c-1.1-0.5-2,0.5-3.2,0.4c-1.4,0.2-2.7,0.3-4.1,0.3c-2.2-0.2-4.5-0.3-6.7-1C10.7,43.2,9.5,42.5,8.4,41.8L8.4,41.8z M10.3,42.6	c1.2,0.5,2.3,1,3.6,1.2c2,0.3,4.2,0.7,6.2,0.3c-0.9-0.4-1.9,0.2-2.8-0.3c-1.1,0.2-2.3-0.1-3.4-0.2c-1.3-0.6-2.7-1-3.9-1.7	c-1.5-0.5,0.8,0.7,1.2,0.8c0.9,0.5-1-0.3-1.3-0.5c-0.8-0.4-0.9-0.3-0.1,0.1C10,42.5,10.2,42.6,10.3,42.6L10.3,42.6z M8.1,41.1	c1.1,0.4,0-0.8-0.5-0.7c-0.2-0.4-0.9-0.7-0.4-0.9c-0.8,0.3-0.9-1.1-1.3-0.9c-0.9-0.3-0.3-1.3-1.4-1.9c-0.1-0.6-1-1.2-1.3-2.1	C3,34.1,2.1,32.7,2.7,34c0.5,1.3,1.3,2.3,2.1,3.4c0.6,1,1.2,2.1,2.2,2.7C7.3,40.5,7.6,41,8.1,41.1L8.1,41.1z M4.8,37.5 M9.5,41.6 M10.1,41.8 M10.8,42.1 M12.2,42.9 M9.6,41.1 M10.2,41.4 M13.1,43.2c0.5,0.3,2.7,0.6,1.3,0.1C14.2,43.4,11.8,42.6,13.1,43.2z M8.5,39.6 M9.8,40.4 M11,41.1 M7.9,39c0.5,0.4,2.2,0.1,0.8-0.3c-0.6-0.3-2-0.6-1.1,0.2L7.9,39L7.9,39z M11.8,41.3 M10.6,40.4	c1.3,0.4-1.1-0.8-0.3-0.1l0.2,0.1L10.6,40.4L10.6,40.4z M12.9,41.7C14.2,41.8,11.8,41.6,12.9,41.7L12.9,41.7z M7.5,38.3 M15.1,42.9 M9.6,39.6 M7.6,38.1 M5.2,36.5 M11.5,40.6 M15.5,43 M11.2,40.2 M8.2,38.4 M13.2,41.4 M10.6,39.7c1,0.1-1.2-0.7-0.2-0.1L10.6,39.7	L10.6,39.7z M14,41.8c0.9-0.5,0.6,1.3,1.5,0.2c0.9-0.7-0.8,0.8,0.3,0.1c0.8-0.5,2,0.3,2.8,0.5c0.5,0,1.1,0.5,1.6,0.2	c1.1-0.3-2.1-0.4-1.3-1c-1,0.3-1.7-0.3-2.2-1c-1.1-0.3-2.4-0.8-3-1.8c-0.2-0.4,0.3,0.1-0.2-0.6c-0.7-0.6-1-1.3-1.5-2	c-0.5-0.3-0.6-1.1-0.7,0c0-0.7-0.6-1.2-0.8-1c0-0.7,0.7-0.3,0.2-0.8c-0.1-0.7-0.5-1.4-0.6-2.2c-0.2-0.4,0-1.2-0.6-0.3	C9.6,33,9.8,31,10.1,31.6c0.4-0.7-0.1-0.6-0.2-0.5c0.3-0.6,0.2-1.4-0.1-1.1c0.1-0.6,0.2-2.2-0.2-1.9c0.3-0.6,0.5-2.9-0.6-2	c-0.5,0-1.2,0.2-1.6,0.3c1.2,0.6-0.1,0.2-0.6,0.1c-0.1,0.6-0.5,0.3-1.1,0.3c0.9,0.1-0.5,1-1,0.6c-0.7,0.3,0.6,1.2,0,1.4	c0.1,0.4-1.1-0.1-1,0.8c-0.7-0.3-0.1,1.1,0.2,0.6c1.1,0.3,0.8,1,0.8,1.7c-0.2,0.4-0.9-0.9-0.2-0.9c-0.6-1-0.7-0.4-1.2,0.1	c-0.1,0,1.3,0.6,0.4,0.9c0.8,0.1,0.8,0.8,0.9,1.2c0.5,0.5,0.4-0.5,0.9,0c-0.3-0.5-1.8-1.4-0.6-1.1c0-0.5-0.2-0.9,0.2-0.9	c0.4-0.7-0.4,1.6,0.4,0.8C6,32,6,31.5,6.4,32.2c0.6,0.6,0.2,1-0.6,0.5c0.1,0.5,1.1,0.7,0.9,1.5c0.2,0.7,0.5,0.4,0.7,0.4	c0.2,0.7,0.3,0.2,0.3-0.1c0.8,0.2,0.6,0.7,0.9,1c0.6,0.3-0.8-1.8,0.2-0.6c1.1,1,0.4,1.4-0.6,1.2c0.6,0,0.8,0.8,1.5,0.8	c0.7,0.3,1.1,1.6,0,1.1c-0.4-0.4-1.9-0.8-0.7-0.1c1.1,0.5,2,0.8,3,1.4c0.8,0.5,1.1,1.2,1.4,1.3c-0.6,0.3-1.9-0.2-1-0.4	c-0.6-0.1-1.3-0.4-0.7,0.3c0.5,0.4,1.7,0.4,1.9,0.4c-0.2,0.4-0.5,0.4,0,0.5C13.2,41.5,13.9,41.6,14,41.8L14,41.8z M12.8,38.5	c-0.3-0.4-0.4-1-0.1-0.5C13,38.1,13.4,39.1,12.8,38.5L12.8,38.5z M16.6,40.9 M12.3,37.6 M11.9,37.1 M7.3,33.9 M11,35.9 M8.4,34.1 M10.6,34.8c-0.4-0.9,0.3-0.5,0.1,0.2L10.6,34.8L10.6,34.8z M6.8,32.3c-0.2-0.3-0.5-1.2-0.4-1.5c0.1,0.4,0.9,1.9,0.4,0.6	c-0.6-1.1,0.7,0.4,0.8,0.6c0.1,0.3-0.4-0.1-0.1,0.6C7,31.9,7.3,33,6.8,32.3z M5.6,31.4 M6.1,31.6 M4.9,30.6c-0.4-0.4-0.8-0.8,0-0.3	c0.3,0-0.7-0.9,0.1-0.3C5.7,30.2,5.3,31.3,4.9,30.6z M5.5,30.6 M5.9,30.8 M5.1,30c-1.3-1.1,1.6,0.6,0.2,0.2L5.1,30L5.1,30z M8.8,32.1c-0.6-0.3-0.1-2.3,0-1c0.5-0.2,0,0.7,0.4,0.7C9.1,32.4,8.9,32.6,8.8,32.1z M10.1,32.9 M9.9,32.7 M5.4,29.6	c-0.8-1.1,2.4,1.1,0.5,0.3C5.7,29.8,5.5,29.8,5.4,29.6z M8,31C7.9,30,8.1,31.1,8,31L8,31z M9.9,32.2 M5.5,29.2	c0.5-0.1,2,0.9,0.6,0.3C5.9,29.3,5.6,29.3,5.5,29.2z M9.7,31.3c0.1-1,0.3-0.6,0,0.1L9.7,31.3L9.7,31.3L9.7,31.3z M5.9,28.8	c0.2-0.3-0.5-1.3,0.1-0.4c0.3,0.2,0.8,0.4,0.3,0.5C7,29.5,6.1,29.1,5.9,28.8z M9.5,30.9 M5.4,27.8 M6.4,28.4 M9,29.8 M8.9,29.5 M8.7,28.9C8.6,28.5,8.9,29.4,8.7,28.9L8.7,28.9z M9,28.3c-0.3-0.4,0.3-2,0.4-1c-0.3,0.7-0.1,1.1,0.1,0.2C9.9,26.7,9.4,29,9,28.3	L9,28.3z M9.4,26 M8.8,38.5 M10.1,39.2c0.7,0.2,0.7-0.1,0.1-0.2c-0.4-0.3-1.5-0.7-0.5,0C9.7,39.1,10,39.1,10.1,39.2L10.1,39.2z M7.5,37.5c0.4,0.3,1.5,0.8,0.6,0.1c0.3-0.4-0.6-0.6-0.3-0.8c-0.8-0.5-0.6-0.4-0.1-0.4c-0.9-0.4,0.1-0.4,0.1-0.6	c-0.4-0.1-1.8-0.6-0.9,0C6,35.4,6.6,36,6.4,35.9c-0.9-0.2,0.8,0.7-0.1,0.4c0.5,0.4,1.3,1,0.2,0.4C6.3,37,7.3,37.3,7.5,37.5L7.5,37.5	z M8.9,38.2 M15.8,42.5 M16.6,42.8c0.4-0.4,0,0.6,0.6-0.1c0-0.5,0-0.8-0.7-0.2C16.3,42.6,16.2,43.1,16.6,42.8L16.6,42.8z M5.2,35.6 M5.9,36.1 M10.3,38.8c0.4,0.4,2,0.3,0.5,0C10.6,38.5,9.5,38.6,10.3,38.8z M16.3,42.5 M17.7,43.4 M17.7,43.1	C18.4,42.4,17,43.2,17.7,43.1L17.7,43.1z M3.3,34c-0.6-0.9-0.4-1.3-1-2c-0.1-0.6-1-1.8-0.5-0.5C2.4,32.3,2.5,33.5,3.3,34z M17.4,42.9 M18.4,43.3 M5,34.7 M18.2,43c0.6-0.4-0.1-0.4-0.1,0L18.2,43L18.2,43z M9.5,37.5 M10,37.8 M19.3,43.3	c0.8-0.6-0.5-0.1-0.2,0.1L19.3,43.3L19.3,43.3z M19,43.2 M20.6,44.2 M5.4,34.4c0.6,0.1,2.4,1.5,1.4,0.1c-0.6-0.2-0.2-1.5-0.8-1.3	c0.4,0.6,0.3,0.9-0.5,0.5c-1-0.5-0.6,0.2-0.4,0.4C4.8,34.3,5.4,34.4,5.4,34.4L5.4,34.4z M2.6,32.3c0.1-0.4-1-2.5-0.5-1	C2.2,31.6,2.2,32.1,2.6,32.3z M7.7,35.4 M8.5,35.6 M15.1,39.8C15,39.5,14.6,39.8,15.1,39.8L15.1,39.8z M15.4,40 M18.1,41.7 M4,32.6 M14.5,39.3 M3.7,31.9 M5.1,32.6 M21.6,42.8c0.6-0.1,2,0.3,2.2-0.2c-0.7,0-2.5-0.5-2.6,0.1l0.2,0L21.6,42.8L21.6,42.8L21.6,42.8z M5.5,32.7 M1.9,30.2 M2.8,30.4 M3.3,30.7 M6.3,32.6 M2.9,30.1 M1.2,29 M1.4,28.8 M2.9,29.7c0.6-0.2-1.1-0.5-0.1,0L2.9,29.7z M22.1,41.5 M24.4,42.7 M3,28.9 M1,27.6c-0.1-0.6-0.1-1.7,1-1.4c-1.4,0.3,1,1.7,0.7,0.6c0.6,0,1.2-0.3,0.8,0.2c1.2-0.1,2-1.1,3.1-1	c0.9-0.1,1.8-0.2,2.8-0.6c0.8-0.1,1.5-0.9,1.1-1.4c-1.1-0.1-2.2,0-3.3,0.3c-1.3,0.3-2.5,0.8-3.8,1c-1.3,0.2,0.3,0.5-0.1,0.5	c-0.7,0.2,0.8,0.4-0.1,0.6c-0.5-0.1-1.1-0.3-0.9-0.9C1,25.8,0,26.3,1,27.6L1,27.6L1,27.6L1,27.6z M3.9,26.1c0.3-1.1,1.5,0.9,0.5,0.1	C4.3,26.1,4,26,3.9,26.1z M4,25.6 M4.5,25.6c0-0.5,1.2,0.3,0.2,0.2L4.5,25.6L4.5,25.6z M5.2,25.3 M5.4,25.2c0.4-0.5,2.5-0.3,1-0.1	C6,24.8,5.7,25.3,5.4,25.2z M8,24.7 M8.8,24.7c0.3-0.7,1.1-0.3,0.1-0.1C8.9,24.7,8.9,25,8.8,24.7z M2.7,28.6	C3.5,28.1,1.9,28.1,2.7,28.6L2.7,28.6z M3.3,28.7 M1.5,27.5 M25.8,42.6 M23.3,40.9 M26.4,42.8c0.7,0,2-0.2,0.6-0.2	C26.8,42.6,25.7,42.6,26.4,42.8L26.4,42.8z M3.9,28.4c0.5,0,0.8-0.6-0.1-0.6c-1.4-0.1,1.3,0.5-0.2,0.3C3.4,28.3,3.9,28.5,3.9,28.4z M4.3,28.7 M4.9,27.2 M3.1,24.2c0.9-0.3,2.2-0.7,2.7,0.2c-0.5-0.5-0.2-1.1,0.2-0.3c0.6,0.8,0.9-0.4,0.5-0.6c0.4,0.6,1,0.8,0.3,0	c0.7-0.9-1.4,0.1-1.9,0.1C4.7,23.7,2.5,24.2,3.1,24.2z M3.7,23.2c0.5-0.4,1.9,0.2,1-0.4C4.6,22.7,2.8,23.3,3.7,23.2z M5.6,23.3	c0.6,0-0.3-0.8,0.5-0.5c-0.1-0.4-0.9-0.5-1.2-0.6C4.7,22.5,5.3,23.3,5.6,23.3z M4,21.5 M4.8,21.7c1-0.1-0.3-0.4-0.2,0L4.8,21.7	L4.8,21.7z M3.3,20.5c-0.7-0.9,1.3,0.2,0.6-0.8C3.3,19.2,2.7,20.2,3.3,20.5z M12.5,25.4c0.3-0.6-1.4-0.8-0.2-0.2	C12.4,25.3,12.4,25.5,12.5,25.4z"/><g id="text3850"><linearGradient id="path2830_1_" x1="23.312" x2="23.312" y1="18.872" y2="35.284" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path id="path2830" fill="url(#path2830_1_)" d="M28,21.4c-0.1,0.5-0.2,1.2-0.2,2.3c0,0.2-0.1,0.3-0.3,0.3c-0.2,0-0.3-0.1-0.4-0.3 c-0.2-0.5-0.4-0.9-0.6-1.1c-0.2-0.2-0.5-0.4-0.9-0.4c-0.4-0.1-1.4-0.1-2.9-0.1c-0.4,0-0.6,0-0.7,0.1c-0.1,0-0.1,0.2-0.1,0.3v4.7 c0,0.2,0.1,0.2,0.3,0.2c0.6,0,1.5,0,2.7-0.1c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.4,0.2-0.9c0-0.3,0.2-0.4,0.5-0.3 c0.2,0,0.3,0.2,0.3,0.3c-0.2,0.9-0.3,2.2-0.2,3.7c0,0.2-0.1,0.3-0.3,0.3c-0.2,0-0.3-0.1-0.4-0.3c-0.2-0.9-0.5-1.3-1-1.4 c-0.5-0.1-1.3-0.1-2.4-0.1c-0.1,0-0.2,0-0.2,0.1v4.7c0,0.3,0.1,0.6,0.4,0.7c0.2,0.1,0.6,0.2,1.3,0.3c0.3,0,0.5,0.2,0.4,0.4 c0,0.2-0.3,0.3-0.9,0.3c-1.6-0.1-3-0.1-4.1,0c-0.3,0-0.4-0.1-0.4-0.4c0-0.2,0.1-0.3,0.4-0.3c0.7-0.1,1-0.7,1-1.8v-8.9 c0-0.5-0.1-0.8-0.2-1.1c-0.2-0.2-0.5-0.5-0.9-0.7c-0.3-0.1-0.4-0.3-0.3-0.5c0-0.1,0.1-0.2,0.2-0.2c0.1,0,0.3,0,0.5,0 c0.4,0.1,1.5,0.1,3.1,0.1c1.9,0,3.6,0,4.9-0.1C27.8,21.2,28,21.2,28,21.4C28,21.4,28,21.4,28,21.4L28,21.4z"/><linearGradient id="path2832_1_" x1="32.309" x2="32.309" y1="18.872" y2="35.284" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path id="path2832" fill="url(#path2832_1_)" d="M34.8,34.6c0,0.3-0.2,0.4-0.5,0.4c-1-0.1-2.1-0.1-3.5,0c-0.3,0-0.5,0-0.5,0 c-0.1,0-0.1-0.2-0.1-0.3c0-0.2,0.2-0.3,0.6-0.4c0.4-0.1,0.6-0.5,0.6-1v-9.4c0-0.6-0.1-1-0.2-1.2c-0.2-0.3-0.4-0.5-0.9-0.6 c-0.2-0.1-0.3-0.2-0.3-0.3c0-0.2,0.2-0.4,0.5-0.5c0.5-0.2,1-0.4,1.5-0.7c0.4-0.2,0.7-0.4,0.8-0.4c0.3,0,0.4,0.2,0.4,0.5 c0,0,0,0.3,0,1c0,0.7,0,1.4,0,2l0,9.3c0,0.4,0.1,0.7,0.3,0.9c0.2,0.2,0.6,0.3,1.1,0.4C34.6,34.3,34.8,34.4,34.8,34.6z"/><linearGradient id="path2834_1_" x1="40.213" x2="40.213" y1="18.872" y2="35.284" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path id="path2834" fill="url(#path2834_1_)" d="M44.2,33.9c0,0.1-0.3,0.4-0.8,0.7c-0.5,0.3-1,0.4-1.3,0.4c-0.3,0-0.5-0.1-0.7-0.4 c-0.2-0.3-0.4-0.4-0.4-0.4c-0.1,0-0.4,0.1-1,0.4c-0.6,0.3-1.2,0.4-1.8,0.4c-0.6,0-1-0.2-1.4-0.5c-0.4-0.4-0.6-0.9-0.6-1.5 c0-1.2,1.4-2.1,4.1-2.6c0.5-0.1,0.7-0.3,0.7-0.6l0-0.7c0-1.1-0.5-1.7-1.5-1.7c-0.3,0-0.6,0.3-0.8,0.8c-0.3,0.5-0.6,0.8-1.1,0.9 c-0.6,0.1-0.9-0.2-0.9-0.7c0-0.3,0.4-0.7,1.3-1.2c0.9-0.5,1.7-0.7,2.6-0.7c1.4,0,2.1,0.7,2.1,2l0,4.3c0,0.4,0.2,0.7,0.6,0.7 c0.1,0,0.2,0,0.4-0.1c0.2,0,0.3-0.1,0.4-0.1C44.1,33.5,44.2,33.6,44.2,33.9L44.2,33.9z M41,31.6c0-0.2,0-0.3-0.1-0.3 c-0.1-0.1-0.2-0.1-0.4,0C38.8,31.5,38,32,38,32.8c0,0.8,0.4,1.2,1.3,1.2c0.3,0,0.7-0.1,1.1-0.2c0.4-0.2,0.6-0.3,0.6-0.5L41,31.6z"/><linearGradient id="path2836_1_" x1="48.889" x2="48.889" y1="18.872" y2="35.284" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path id="path2836" fill="url(#path2836_1_)" d="M52,32.7c0,0.7-0.3,1.3-0.8,1.7c-0.6,0.4-1.3,0.6-2.3,0.6c-0.6,0-1.3-0.1-1.9-0.2 c-0.6-0.1-0.9-0.2-1-0.3c-0.1-0.1-0.1-0.6-0.1-1.4c0-0.4,0.1-0.6,0.2-0.6c0.2,0,0.3,0.1,0.4,0.3c0.5,0.9,1.4,1.4,2.5,1.4 c1,0,1.5-0.3,1.5-1c0-0.3-0.1-0.5-0.3-0.7c-0.2-0.2-0.7-0.5-1.4-0.8c-1-0.4-1.7-0.8-2-1.2c-0.4-0.4-0.5-0.8-0.5-1.5 c0-0.7,0.3-1.3,0.9-1.7c0.5-0.4,1.2-0.6,2.1-0.6c0.6,0,1.1,0,1.5,0.1c0.5,0.1,0.8,0.2,0.8,0.3c0.1,0.4,0.2,0.9,0.3,1.7 c0,0.1-0.1,0.2-0.3,0.2c-0.2,0-0.4,0-0.5-0.1c-0.5-0.9-1.2-1.3-2.1-1.3c-0.9,0-1.4,0.3-1.4,0.9c0,0.3,0.1,0.6,0.4,0.8 c0.2,0.2,0.8,0.4,1.6,0.8c0.9,0.4,1.5,0.7,1.8,1C51.8,31.5,52,32,52,32.7z"/><linearGradient id="path2838_1_" x1="58.783" x2="58.783" y1="18.872" y2="35.284" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path id="path2838" fill="url(#path2838_1_)" d="M64,34.5c0,0.2-0.2,0.4-0.5,0.4c-0.5,0-1.1,0-1.9,0.1c-0.4,0.1-0.7,0-0.8-0.1 c-1.1-1.2-2-2.4-2.8-3.7c-0.1-0.1-0.1-0.2-0.2-0.2c-0.1,0-0.3,0.1-0.6,0.3c-0.3,0.2-0.5,0.4-0.5,0.8c0,0.2,0,0.6,0,1 c0,0.4,0.1,0.7,0.3,0.9c0.1,0.1,0.5,0.2,1,0.2c0.3,0,0.5,0.2,0.5,0.4c0,0.2,0,0.3-0.1,0.3c-0.1,0-0.2,0-0.4,0 c-0.7-0.1-1.9,0-3.5,0.1c-0.4,0-0.6,0-0.7-0.2c0,0,0-0.1,0-0.2c0-0.2,0.2-0.4,0.6-0.5c0.4-0.1,0.6-0.5,0.6-1.3v-9.1 c0-0.6-0.1-1-0.2-1.2c-0.2-0.3-0.5-0.5-1-0.7c-0.2-0.1-0.3-0.2-0.3-0.3c0-0.2,0.2-0.4,0.5-0.5c0.5-0.2,1-0.4,1.5-0.7 c0.4-0.2,0.6-0.4,0.7-0.4c0.3,0,0.4,0.2,0.4,0.5c0,0,0,0.3,0,1c0,0.5,0,1.2,0,2l0,6.5c0,0.2,0,0.3,0.1,0.3c0.1,0,0.3-0.1,0.5-0.3 c0.6-0.4,1.3-1,2.1-1.8c0.2-0.2,0.2-0.3,0.2-0.4c0-0.2-0.3-0.3-0.8-0.4c-0.2,0-0.4-0.2-0.3-0.4c0-0.2,0.1-0.3,0.4-0.3 c0.5,0.1,1.2,0.1,2.2,0.1c0.7,0,1.3,0,2,0c0.2,0,0.3,0.1,0.3,0.4c0,0.2-0.2,0.4-0.5,0.4c-0.5,0-1,0.1-1.5,0.4 c-0.7,0.3-1.4,0.8-2.1,1.6c-0.1,0-0.1,0.1-0.1,0.2c0,0.1,0.1,0.3,0.4,0.7c0.9,1.3,1.7,2.3,2.4,3c0.5,0.4,1,0.6,1.4,0.6 c0.3,0,0.5,0,0.6,0.1C64,34.2,64,34.4,64,34.5L64,34.5z"/></g></svg>
````

## File: public/tech/flutter.svg
````
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="flutter">
  <path fill="#42A5F5" fill-opacity=".8" d="m6 15.695-3.696-3.696L14.305 0h7.391L6 15.695zm15.695-4.622h-7.391l-2.768 2.768 3.696 3.696 6.463-6.464z"></path>
  <path fill="#0D47A1" d="M11.536 21.232 14.305 24h7.391l-6.463-6.463-3.697 3.695z"></path>
  <path fill="#42A5F5" d="m7.849 17.539 3.69-3.691 3.69 3.69-3.69 3.691-3.69-3.69z"></path>
  <linearGradient id="a" x1="-2075.633" x2="-2075.633" y1="-1590.528" y2="-1590.518" gradientTransform="matrix(380.4042 -380.4175 53.104 53.1021 874056.25 -705127.375)" gradientUnits="userSpaceOnUse">
    <stop offset=".2" stop-opacity=".15"></stop>
    <stop offset=".85" stop-color="#616161" stop-opacity=".01"></stop>
  </linearGradient>
  <path fill="url(#a)" d="m11.539 21.229 3.69-3.69.515.515-3.69 3.69-.515-.515z"></path>
  <linearGradient id="b" x1="-2078.999" x2="-2078.99" y1="-1580.155" y2="-1580.155" gradientTransform="matrix(565.291 0 0 380.9571 1175251.25 601990.813)" gradientUnits="userSpaceOnUse">
    <stop offset=".2" stop-opacity=".55"></stop>
    <stop offset=".85" stop-color="#616161" stop-opacity=".01"></stop>
  </linearGradient>
  <path fill="url(#b)" d="m11.536 21.232 5.483-1.894-1.788-1.801-3.695 3.695z"></path>
</svg>
````

## File: public/tech/googlemaps.svg
````
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="50px" height="50px"><path fill="#48b564" d="M35.76,26.36h0.01c0,0-3.77,5.53-6.94,9.64c-2.74,3.55-3.54,6.59-3.77,8.06	C24.97,44.6,24.53,45,24,45s-0.97-0.4-1.06-0.94c-0.23-1.47-1.03-4.51-3.77-8.06c-0.42-0.55-0.85-1.12-1.28-1.7L28.24,22l8.33-9.88	C37.49,14.05,38,16.21,38,18.5C38,21.4,37.17,24.09,35.76,26.36z"/><path fill="#fcc60e" d="M28.24,22L17.89,34.3c-2.82-3.78-5.66-7.94-5.66-7.94h0.01c-0.3-0.48-0.57-0.97-0.8-1.48L19.76,15	c-0.79,0.95-1.26,2.17-1.26,3.5c0,3.04,2.46,5.5,5.5,5.5C25.71,24,27.24,23.22,28.24,22z"/><path fill="#2c85eb" d="M28.4,4.74l-8.57,10.18L13.27,9.2C15.83,6.02,19.69,4,24,4C25.54,4,27.02,4.26,28.4,4.74z"/><path fill="#ed5748" d="M19.83,14.92L19.76,15l-8.32,9.88C10.52,22.95,10,20.79,10,18.5c0-3.54,1.23-6.79,3.27-9.3	L19.83,14.92z"/><path fill="#5695f6" d="M28.24,22c0.79-0.95,1.26-2.17,1.26-3.5c0-3.04-2.46-5.5-5.5-5.5c-1.71,0-3.24,0.78-4.24,2L28.4,4.74	c3.59,1.22,6.53,3.91,8.17,7.38L28.24,22z"/></svg>
````

## File: public/tech/opencv.svg
````
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#448aff" d="M35,43c-5.514,0-10-4.486-10-10c0-3.562,1.916-6.88,5-8.66l3,5.196c-1.233,0.712-2,2.039-2,3.464 c0,2.168,1.832,4,4,4s4-1.832,4-4c0-1.425-0.767-2.752-2-3.464l3-5.196c3.084,1.78,5,5.099,5,8.66C45,38.514,40.514,43,35,43z"/><path fill="#ff1744" d="M29,22.629l-3-5.196c1.233-0.712,2-2.04,2-3.464c0-2.168-1.832-4-4-4s-4,1.832-4,4 c0,1.425,0.767,2.752,2,3.464l-3,5.196c-3.084-1.781-5-5.1-5-8.661c0-5.514,4.486-10,10-10s10,4.486,10,10 C34,17.53,32.084,20.849,29,22.629z"/><path fill="#9ccc65" d="M13.001,43.028c-3.459,0-6.827-1.793-8.678-4.997c-2.757-4.776-1.115-10.903,3.66-13.661 c3.085-1.781,6.917-1.781,10,0l-3,5.196c-1.234-0.713-2.766-0.713-4,0c-1.878,1.084-2.548,3.586-1.465,5.464 c1.084,1.877,3.586,2.549,5.465,1.464c1.233-0.712,2-2.04,2-3.464h6c0,3.561-1.916,6.879-5,8.66 C16.413,42.598,14.695,43.028,13.001,43.028z"/></svg>
````

## File: public/tech/openmeteo.svg
````
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" id="weather">
  <defs>
    <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
      <stop offset="0%" stop-color="#1E64F0"></stop>
      <stop offset="100%" stop-color="#1AD3FC"></stop>
    </linearGradient>
    <linearGradient id="b" x1="50%" x2="50%" y1="0%" y2="100%">
      <stop offset="0%" stop-color="#FFC700"></stop>
      <stop offset="100%" stop-color="#FFEA00"></stop>
    </linearGradient>
    <linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%">
      <stop offset="0%" stop-color="#FFF" stop-opacity=".8"></stop>
      <stop offset="100%" stop-color="#FFF"></stop>
    </linearGradient>
  </defs>
  <g fill="none" fill-rule="evenodd">
    <circle cx="20" cy="20" r="20" fill="url(#a)"></circle>
    <circle cx="13.5" cy="16.5" r="6.5" fill="url(#b)"></circle>
    <path fill="url(#c)" d="M14.4967105,28.4934211 C12.2893883,28.4934211 10.5,26.7040328 10.5,24.4967105 C10.5,22.4792488 11.9948021,20.8109168 13.9372778,20.5388431 C13.9091812,20.297341 13.8947368,20.0516731 13.8947368,19.8026316 C13.8947368,16.3217843 16.7165211,13.5 20.1973684,13.5 C22.8567494,13.5 25.131434,15.1470811 26.0569553,17.4767765 C26.1977419,17.466009 26.340007,17.4605263 26.4835526,17.4605263 C29.5302024,17.4605263 32,19.9303239 32,22.9769737 C32,26.0236234 29.5302024,28.4934211 26.4835526,28.4934211 C26.4362622,28.4934211 26.3891107,28.492826 26.3421053,28.4916429 L26.3421053,28.4934211 L14.4967105,28.4934211 Z"></path>
  </g>
</svg>
````

## File: public/tech/python.svg
````
<svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2490" preserveAspectRatio="xMinYMin meet" viewBox="0 0 256 255" id="python">
  <defs>
    <linearGradient id="a" x1="12.959%" x2="79.639%" y1="12.039%" y2="78.201%">
      <stop offset="0%" stop-color="#387EB8"></stop>
      <stop offset="100%" stop-color="#366994"></stop>
    </linearGradient>
    <linearGradient id="b" x1="19.128%" x2="90.742%" y1="20.579%" y2="88.429%">
      <stop offset="0%" stop-color="#FFE052"></stop>
      <stop offset="100%" stop-color="#FFC331"></stop>
    </linearGradient>
  </defs>
  <path fill="url(#a)" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"></path>
  <path fill="url(#b)" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"></path>
</svg>
````

## File: public/tech/supabase.svg
````
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><g id="Слой_1"><path fill="#71c674" d="M43.9,22.5L27.5,43.3c-1.2,1.4-3.5,0.6-3.5-1.2V30H6.6c-2.1,0-3.3-2.5-2-4.1L20.7,5.1c1.1-1.5,3.4-0.7,3.4,1.2 v12.1h17.7C44.1,18.4,45.3,20.8,43.9,22.5z"/></g></svg>
````

## File: public/tech/tensorflow.svg
````
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><polygon fill="#ffa000" points="16,39.609 23,43.609 23,4 16,8"/><polygon fill="#ffa000" points="23,12.433 6,22.25 6,13.75 23,3.933"/><polygon fill="#ffb300" points="32,39.609 25,43.609 25,4 32,8"/><polygon fill="#ffb300" points="25,12.433 42,22.25 42,13.75 25,3.933"/><polygon fill="#ffb300" points="29,19.732 29,27.365 36,31.407 36,23.775"/></svg>
````

## File: public/tech/whatsapp.svg
````
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2500" height="2500" viewBox="0 0 1024 1024" id="whatsapp">
  <defs>
    <path id="b" d="M1023.941 765.153c0 5.606-.171 17.766-.508 27.159-.824 22.982-2.646 52.639-5.401 66.151-4.141 20.306-10.392 39.472-18.542 55.425-9.643 18.871-21.943 35.775-36.559 50.364-14.584 14.56-31.472 26.812-50.315 36.416-16.036 8.172-35.322 14.426-55.744 18.549-13.378 2.701-42.812 4.488-65.648 5.3-9.402.336-21.564.505-27.15.505l-504.226-.081c-5.607 0-17.765-.172-27.158-.509-22.983-.824-52.639-2.646-66.152-5.4-20.306-4.142-39.473-10.392-55.425-18.542-18.872-9.644-35.775-21.944-50.364-36.56-14.56-14.584-26.812-31.471-36.415-50.314-8.174-16.037-14.428-35.323-18.551-55.744-2.7-13.378-4.487-42.812-5.3-65.649-.334-9.401-.503-21.563-.503-27.148l.08-504.228c0-5.607.171-17.766.508-27.159.825-22.983 2.646-52.639 5.401-66.151 4.141-20.306 10.391-39.473 18.542-55.426C34.154 93.24 46.455 76.336 61.07 61.747c14.584-14.559 31.472-26.812 50.315-36.416 16.037-8.172 35.324-14.426 55.745-18.549 13.377-2.701 42.812-4.488 65.648-5.3 9.402-.335 21.565-.504 27.149-.504l504.227.081c5.608 0 17.766.171 27.159.508 22.983.825 52.638 2.646 66.152 5.401 20.305 4.141 39.472 10.391 55.425 18.542 18.871 9.643 35.774 21.944 50.363 36.559 14.559 14.584 26.812 31.471 36.415 50.315 8.174 16.037 14.428 35.323 18.551 55.744 2.7 13.378 4.486 42.812 5.3 65.649.335 9.402.504 21.564.504 27.15l-.082 504.226z"></path>
  </defs>
  <linearGradient id="a" x1="512.001" x2="512.001" y1=".978" y2="1025.023" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#61fd7d"></stop>
    <stop offset="1" stop-color="#2bb826"></stop>
  </linearGradient>
  <use xlink:href="#b" fill="url(#a)" overflow="visible"></use>
  <path fill="#FFF" d="M783.302 243.246c-69.329-69.387-161.529-107.619-259.763-107.658-202.402 0-367.133 164.668-367.214 367.072-.026 64.699 16.883 127.854 49.017 183.522l-52.096 190.229 194.665-51.047c53.636 29.244 114.022 44.656 175.482 44.682h.151c202.382 0 367.128-164.688 367.21-367.094.039-98.087-38.121-190.319-107.452-259.706zM523.544 808.047h-.125c-54.767-.021-108.483-14.729-155.344-42.529l-11.146-6.612-115.517 30.293 30.834-112.592-7.259-11.544c-30.552-48.579-46.688-104.729-46.664-162.379.066-168.229 136.985-305.096 305.339-305.096 81.521.031 158.154 31.811 215.779 89.482s89.342 134.332 89.312 215.859c-.066 168.243-136.984 305.118-305.209 305.118zm167.415-228.515c-9.177-4.591-54.286-26.782-62.697-29.843-8.41-3.062-14.526-4.592-20.645 4.592-6.115 9.182-23.699 29.843-29.053 35.964-5.352 6.122-10.704 6.888-19.879 2.296-9.176-4.591-38.74-14.277-73.786-45.526-27.275-24.319-45.691-54.359-51.043-63.543-5.352-9.183-.569-14.146 4.024-18.72 4.127-4.109 9.175-10.713 13.763-16.069 4.587-5.355 6.117-9.183 9.175-15.304 3.059-6.122 1.529-11.479-.765-16.07-2.293-4.591-20.644-49.739-28.29-68.104-7.447-17.886-15.013-15.466-20.645-15.747-5.346-.266-11.469-.322-17.585-.322s-16.057 2.295-24.467 11.478-32.113 31.374-32.113 76.521c0 45.147 32.877 88.764 37.465 94.885 4.588 6.122 64.699 98.771 156.741 138.502 21.892 9.45 38.982 15.094 52.308 19.322 21.98 6.979 41.982 5.995 57.793 3.634 17.628-2.633 54.284-22.189 61.932-43.615 7.646-21.427 7.646-39.791 5.352-43.617-2.294-3.826-8.41-6.122-17.585-10.714z"></path>
</svg>
````

## File: public/vercel.svg
````
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
````

## File: public/window.svg
````
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
````

## File: repomix.config.json
````json
{
  "$schema": "https://repomix.com/schemas/latest/schema.json",
  "input": {
    "maxFileSize": 52428800
  },
  "output": {
    "filePath": "repomix-output.md",
    "style": "markdown",
    "parsableStyle": false,
    "fileSummary": true,
    "directoryStructure": true,
    "files": true,
    "removeComments": false,
    "removeEmptyLines": false,
    "compress": false,
    "topFilesLength": 5,
    "showLineNumbers": false,
    "copyToClipboard": false,
    "git": {
      "sortByChanges": true,
      "sortByChangesMaxCommits": 100,
      "includeDiffs": false
    }
  },
  "include": [],
  "ignore": {
    "useGitignore": true,
    "useDefaultPatterns": true,
    "customPatterns": []
  },
  "security": {
    "enableSecurityCheck": true
  },
  "tokenCount": {
    "encoding": "o200k_base"
  }
}
````

## File: src/app/tailwind.css
````css
@import 'tailwindcss';

@plugin 'tailwindcss-animate';

@theme {
  --color-primary: #2E7D32;
  --color-primary-light: #4CAF50;
  --color-primary-dark: #1B5E20;
  --color-accent: #FFD700;
  --color-background: #ffffff;
  --color-foreground: #171717;
}
````

## File: src/components/Footer.tsx
````typescript
// Footer.tsx
"use client";

import Link from "next/link";
import { Leaf, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-white">Betel</span>
                <span style={{ color: 'var(--color-accent)' }}>Care</span>
              </span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              An AI-powered mobile application designed to help Sri Lankan betel farmers improve crop yield,
              manage diseases, predict market prices, and receive weather-based recommendations.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:betelcare@research.edu" className="text-gray-400 hover:text-white">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Research", href: "/research" },
                { name: "Documents", href: "/documents" },
                { name: "Team", href: "/team" },
                { name: "Contact", href: "/contact" }
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Project Details */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Project Details</h3>
            <ul className="space-y-3">
              {[
                { name: "Disease Detection", href: "/project/disease-detection" },
                { name: "Harvest Prediction", href: "/project/harvest-prediction" },
                { name: "Market Prediction", href: "/project/market-prediction" },
                { name: "Weather Based Recommendations", href: "/project/weather-recommendations" }
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} BetelCare Research Project. All rights reserved.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-4 md:mt-0 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
````

## File: src/components/ScrollToTop.tsx
````typescript
// src/components/ScrollToTop.tsx (Advanced Version)
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop;
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrolled / maxHeight) * 100;

      setScrollProgress(progress);

      if (scrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="relative p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl   group"
            style={{ 
              backgroundColor: 'var(--color-primary)'
            }}
            aria-label="Scroll to top"
          >
            {/* Progress Circle */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90"
              viewBox="0 0 36 36"
            >
              <path
                className="text-white/20"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-white transition-all duration-300 ease-out"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="transparent"
                strokeDasharray={`${scrollProgress}, 100`}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            
            {/* Arrow Icon */}
            <ArrowUp className="h-6 w-6 text-white relative z-10 transition-transform group-hover:-translate-y-0.5" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
````

## File: src/components/VideoSection.tsx
````typescript
// VideoSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Smartphone, Eye, Download } from "lucide-react";
import Link from "next/link";

export default function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-green-400 to-green-600 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-green-400 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full text-sm font-medium text-white"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <Play className="w-4 h-4" />
            App Demo Video
          </div>
          
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6" 
            style={{ color: 'var(--color-foreground)' }}
          >
            See BetelCare in Action
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Experience our AI-powered mobile application through this comprehensive demo showcasing 
            all four core features: harvest prediction, disease detection, market insights, and weather-based recommendations.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: <Smartphone className="w-5 h-5" />, text: "Mobile First Design" },
              { icon: <Eye className="w-5 h-5" />, text: "User-Friendly Interface" },
              { icon: <Download className="w-5 h-5" />, text: "Offline Capable" },
              { icon: <Play className="w-5 h-5" />, text: "Real-time Processing" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex flex-col items-center p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20"
              >
                <div 
                  className="p-2 rounded-full mb-2" 
                  style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary)' }}
                >
                  {feature.icon}
                </div>
                <span className="text-sm font-medium text-gray-700">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Video wrapper with modern styling */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl  p-1">
            <div className="relative rounded-xl overflow-hidden ">
              {/* YouTube Embed */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/vjVo22uMZ9g?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1"
                  title="BetelCare Mobile App Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Overlay gradient for better visual integration */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 via-transparent to-black/10 rounded-xl"></div>
            </div>
          </div>

          {/* Decorative elements around video */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute -top-2 -right-6 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-3 -left-2 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </motion.div>

        {/* Video Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
            <h3 
              className="text-2xl font-bold mb-6 text-center" 
              style={{ color: 'var(--color-foreground)' }}
            >
              What You&apos;ll See in This Demo
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div 
                    className="flex-shrink-0 w-6 h-6 rounded-full mr-3 mt-1 flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: 'var(--color-primary-dark)' }}>
                      Disease Detection
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Real-time identification of betel leaf diseases using our CNN-based model with treatment recommendations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div 
                    className="flex-shrink-0 w-6 h-6 rounded-full mr-3 mt-1 flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: 'var(--color-primary-dark)' }}>
                      Harvest Prediction
                    </h4>
                    <p className="text-gray-600 text-sm">
                      AI-powered yield forecasting for optimal harvest timing across different betel leaf types.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div 
                    className="flex-shrink-0 w-6 h-6 rounded-full mr-3 mt-1 flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: 'var(--color-primary-dark)' }}>
                      Market Predictions
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Data-driven price forecasting to help farmers maximize their profits through strategic selling.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div 
                    className="flex-shrink-0 w-6 h-6 rounded-full mr-3 mt-1 flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: 'var(--color-primary-dark)' }}>
                      Weather Recommendations
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Location-specific farming advice based on real-time weather data and forecasts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.youtube.com/watch?v=vjVo22uMZ9g"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-white shadow-lg transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <Play className="w-4 h-4" />
              Watch on YouTube
            </a>
            <Link
              href="/#documents"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium border transition-all hover:bg-gray-50"
              style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
            >
              <Download className="w-4 h-4" />
              Download Documentations
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
````

## File: src/lib/utils.ts
````typescript
// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class values into a single string, with intelligent
 * handling of Tailwind CSS conflicts using clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
````

## File: package.json
````json
{
  "name": "betel-research-website",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@radix-ui/react-accordion": "^1.2.4",
    "@radix-ui/react-dialog": "^1.1.7",
    "@radix-ui/react-dropdown-menu": "^2.1.7",
    "@radix-ui/react-progress": "^1.1.3",
    "@radix-ui/react-slot": "^1.2.0",
    "@radix-ui/react-tabs": "^1.1.4",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.6.5",
    "lucide-react": "^0.487.0",
    "next": "15.3.0",
    "next-mdx-remote": "^5.0.0",
    "next-themes": "^0.4.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-icons": "^5.5.0",
    "react-intersection-observer": "^9.16.0",
    "react-markdown": "^10.1.0",
    "remark-gfm": "^4.0.1",
    "sonner": "^2.0.3",
    "tailwind-merge": "^3.2.0",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@shadcn/ui": "^0.0.4",
    "@tailwindcss/postcss": "^4.1.3",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "autoprefixer": "^10.4.21",
    "eslint": "^9",
    "eslint-config-next": "15.3.0",
    "postcss": "^8.5.3",
    "tailwindcss": "^4.1.3",
    "typescript": "^5"
  }
}
````

## File: README.md
````markdown
# BetelCare - Smart Farming Solution

A comprehensive web platform for the BetelCare research project, showcasing an AI-powered mobile application designed specifically for Sri Lankan betel farmers.

## Project Overview

**BetelCare** is a machine learning-powered mobile application developed to support betel farmers by offering real-time insights, predictive analytics, and interactive assistance. This repository contains the web platform built with **Next.js** that showcases the research, features, and documentation of the BetelCare project.

## Key Features

- **Harvest Prediction**: AI-powered yield forecasting for optimized planning  
- **Disease Detection**: Early identification of leaf issues with CNN technology  
- **Market Insights**: Data-driven price predictions for maximum profit  
- **Weather Recommendations**: Climate-based farming advice for better yields  

## Technology Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS  
- **UI Components**: Shadcn UI, Framer Motion, Lucide Icons  
- **Mobile App**: Flutter, TensorFlow Lite  
- **Backend**: Flask, Python  
- **Machine Learning**: TensorFlow, PyTorch, Scikit-learn  

## Research Team

**Students**:  
- W.E.I. Ranawaka  
- U.H. Dewasinghe  
- B.K.M. Fernando  
- E.A.L.S. Siriwardhana  

**Supervisors**:  
- Sanvitha Kasthuriarachchi  
- Lokesha Weerasinghe  

**Institution**:  
- Sri Lanka Institute of Information Technology  

## Getting Started

### Prerequisites

- Node.js 18.x or later  
- npm or yarn  

### Installation

Clone the repository  
```bash
git clone https://github.com/your-username/betelcare-web.git
cd betelcare-web
```

Install dependencies  
```bash
npm install
# or
yarn install
```

Run the development server  
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
betelcare-web/
│
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js app directory
│   ├── components/     # Reusable UI components
│   ├── styles/         # Global styles
│   └── utils/          # Utility functions
│
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

## Deployment

The project is deployed on **Vercel**. Any changes pushed to the `main` branch are automatically deployed.

## Research Paper

A comprehensive research paper detailing our findings, methodology, and results is available in the **Documents** section of the website.

## License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

## Acknowledgements

- Department of Information Technology, SLIIT  
- Sri Lankan betel farmers for their valuable feedback and participation  
- Sri Lanka Department of Meteorology for weather data
````

## File: src/app/globals.css
````css
@import './tailwind.css';

body {
  background-color: var(--color-background);
  color: var(--color-foreground);
  font-family: var(--font-sans, Arial, Helvetica, sans-serif);
}

/* Force light mode regardless of system preferences */
html {
  color-scheme: light;
}
````

## File: src/app/project/disease-detection/page.tsx
````typescript
// src/app/project/disease-detection/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Leaf, Check, ExternalLink, AlertTriangle, Search, Microscope, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DiseaseDetectionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="absolute right-0 bottom-0 left-0 h-1/3 bg-gradient-to-t from-green-50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <Link 
                href="/" 
                className="inline-flex items-center text-sm font-medium mb-6 group"
                style={{ color: 'var(--color-primary)' }}
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to home
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--color-foreground)' }}>
                Disease Detection System
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Advanced computer vision technology for early detection of diseases and pests in betel leaves, enabling timely intervention and reducing crop losses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image with animated border */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 border-4 rounded-2xl border-primary-light/30 animate-pulse" />
              <Image
                src="/disease-detection.png"
                alt="Disease Detection System"
                width={1000}
                height={700}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                className="w-full h-auto rounded-2xl"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU1ODU1Oj4+NTU1NTU1NTU1NTU1NTU1NTX/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm md:text-base">
                  The CNN model can detect various diseases including brown spots, bacterial leaf blight, and pest infestations.
                </p>
              </div>
            </motion.div>

            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary-dark)' }}>
                  <Leaf className="w-4 h-4 mr-2" />
                  Convolutional Neural Networks
                </div>
                
                <h2 className="text-3xl font-bold mb-6">How It Works</h2>
                
                <div className="space-y-8 mb-10">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                      <Search className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Image Analysis</h3>
                      <p className="text-gray-600">
                        Farmers capture images of betel leaves using their smartphone camera. Our CNN model processes these images through multiple convolutional layers to extract features indicative of disease or pest presence.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary-dark)', color: 'white' }}>
                      <Microscope className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Disease Identification</h3>
                      <p className="text-gray-600">
                        The system accurately identifies common betel leaf conditions including brown spots, bacterial leaf blight, and pest infestations like fireflies and two-spotted spider mites.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}>
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Treatment Recommendations</h3>
                      <p className="text-gray-600">
                        Upon detection, the system provides tailored treatment recommendations including appropriate pesticides, dosages, and application methods based on the severity of the issue.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                      <AlertTriangle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Outbreak Mapping</h3>
                      <p className="text-gray-600">
                        Geospatial tools using Google Maps SDK visualize disease outbreaks across farms, enabling community-level preventive measures against spreading infections.
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-medium mb-4">Technical Performance</h3>
                  <div className="space-y-3">
                    {[
                      { metric: "Disease detection accuracy", value: "94.3%" },
                      { metric: "Processing time per image", value: "< 2 seconds" },
                      { metric: "Supported disease types", value: "12+" }
                    ].map((stat, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600">{stat.metric}</span>
                        <span className="font-medium" style={{ color: 'var(--color-primary-dark)' }}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Additional Details */}
          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Implementation Details</h3>
                <p className="text-gray-600 mb-6">
                  Our disease detection system is built on TensorFlow and deployed to mobile devices using TensorFlow Lite for efficient on-device inference, even in areas with limited connectivity.
                </p>
                
                <h4 className="font-medium mb-3" style={{ color: 'var(--color-primary-dark)' }}>Key Technologies</h4>
                <ul className="space-y-2 mb-6">
                  {[
                    "Convolutional Neural Networks (CNN)",
                    "TensorFlow & TensorFlow Lite",
                    "Image preprocessing techniques",
                    "Google Maps SDK for geospatial visualization",
                    "Rule-based treatment recommendation system"
                  ].map((tech, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                      <span className="text-gray-600">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Research Impact</h3>
                <p className="text-gray-600 mb-6">
                  Our disease detection system has shown significant benefits for betel farmers in our test regions, with measurable improvements in early intervention and reduced crop losses.
                </p>
                
                <div className="space-y-4">
                  {[
                    { metric: "Reduction in disease-related crop loss", value: "68%" },
                    { metric: "Decrease in pesticide usage", value: "42%" },
                    { metric: "Earlier disease detection", value: "7-10 days" },
                    { metric: "Farmer adoption rate", value: "76%" }
                  ].map((impact, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">{impact.metric}</span>
                        <span className="text-lg font-bold" style={{ color: 'var(--color-primary-dark)' }}>{impact.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Learn More About Our Research</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive documentation and research findings on the disease detection system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/documents"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              View Research Documentation
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border"
              style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
            >
              Contact Our Team
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
````

## File: src/app/project/harvest-prediction/page.tsx
````typescript
// src/app/project/harvest-prediction/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, BarChart, Check, ExternalLink, Calendar, Tractor, Map, LineChart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HarvestPredictionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="absolute right-0 bottom-0 left-0 h-1/3 bg-gradient-to-t from-green-50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <Link 
                href="/" 
                className="inline-flex items-center text-sm font-medium mb-6 group"
                style={{ color: 'var(--color-primary)' }}
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to home
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--color-foreground)' }}>
                Harvest Prediction System
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                AI-powered yield forecasting technology that helps betel farmers plan their harvest schedule, optimize labor requirements, and maximize productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image with animated overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/harvest-prediction.png"
                alt="Harvest Prediction System"
                width={1000}
                height={700}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                className="w-full h-auto rounded-2xl"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU1ODU1Oj4+NTU1NTU1NTU1NTU1NTU1NTX/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm md:text-base">
                  Advanced machine learning models predict optimal harvest times and yield for three betel leaf types: P-Type, KT-Type, and RKT-Type.
                </p>
              </div>
            </motion.div>

            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary-dark)' }}>
                  <BarChart className="w-4 h-4 mr-2" />
                  Machine Learning Algorithms
                </div>
                
                <h2 className="text-3xl font-bold mb-6">How It Works</h2>
                
                <div className="space-y-8 mb-10">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                      <Map className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Field Area Calculation</h3>
                      <p className="text-gray-600">
                        Farmers can measure their field size using either map-based pointing or GPS-based walkaround. This crucial data is used as a primary input for yield predictions.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary-dark)', color: 'white' }}>
                      <BarChart className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Yield Prediction</h3>
                      <p className="text-gray-600">
                        Our algorithms process multiple inputs including field area, planting month, soil type, weather data, and historical yields to generate accurate harvest predictions.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}>
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Harvest Scheduling</h3>
                      <p className="text-gray-600">
                        The system recommends optimal harvesting dates based on leaf maturity and predicted weather conditions, helping farmers plan their activities effectively.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                      <Tractor className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Labor Optimization</h3>
                      <p className="text-gray-600">
                        Based on forecasted yield, the system estimates labor requirements, enabling farmers to allocate resources efficiently and reduce operational costs.
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-medium mb-4">Prediction Accuracy</h3>
                  <div className="space-y-3">
                    {[
                      { leafType: "P-Type", accuracy: "94.95%" },
                      { leafType: "KT-Type", accuracy: "88.89%" },
                      { leafType: "RKT-Type", accuracy: "66.67%" }
                    ].map((stat, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600">{stat.leafType} prediction accuracy</span>
                        <span className="font-medium" style={{ color: 'var(--color-primary-dark)' }}>{stat.accuracy}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Additional Details */}
          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Machine Learning Methodology</h3>
                <p className="text-gray-600 mb-6">
                  Our harvest prediction system leverages multiple machine learning algorithms, with XGBoost emerging as the best-performing model due to its high accuracy and generalization capabilities.
                </p>
                
                <h4 className="font-medium mb-3" style={{ color: 'var(--color-primary-dark)' }}>Models Evaluated</h4>
                <ul className="space-y-2 mb-6">
                  {[
                    "XGBoost (primary model)",
                    "Random Forest",
                    "Gradient Boosting",
                    "Ensemble learning (Voting Regressor)",
                    "Feature engineering for enhanced predictions"
                  ].map((tech, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                      <span className="text-gray-600">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Data Sources</h3>
                <p className="text-gray-600 mb-6">
                  The system utilizes diverse data sources to generate highly accurate predictions across different betel leaf varieties and growing conditions.
                </p>
                
                <div className="space-y-4">
                  {[
                    { dataType: "Historical weather data", source: "Sri Lanka Meteorology Department" },
                    { dataType: "Soil classification", source: "Three main soil types in growing regions" },
                    { dataType: "Harvest records", source: "Farmer-provided historical data" },
                    { dataType: "Field measurements", source: "GPS and map-based calculations" }
                  ].map((data, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <p className="font-medium" style={{ color: 'var(--color-primary-dark)' }}>{data.dataType}</p>
                      <p className="text-gray-600 text-sm">{data.source}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h3 className="text-2xl font-bold">Performance Impact</h3>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary-dark)' }}>
                <LineChart className="w-4 h-4 mr-2" />
                Field-Tested Results
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "Labor Cost Reduction", value: "31%", icon: <Tractor className="h-6 w-6" /> },
                { metric: "Resource Planning Accuracy", value: "89%", icon: <Calendar className="h-6 w-6" /> },
                { metric: "Yield Improvement", value: "24%", icon: <BarChart className="h-6 w-6" /> },
                { metric: "Weather Adaptation Success", value: "78%", icon: <LineChart className="h-6 w-6" /> }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="inline-flex items-center justify-center p-3 rounded-full mb-4" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                    {stat.icon}
                  </div>
                  <h4 className="text-lg font-medium mb-1" style={{ color: 'var(--color-foreground)' }}>{stat.metric}</h4>
                  <p className="text-2xl font-bold" style={{ color: 'var(--color-primary-dark)' }}>{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Learn More About Our Research</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive documentation and research findings on the harvest prediction system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/documents"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              View Research Documentation
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border"
              style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
            >
              Contact Our Team
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
````

## File: src/app/project/market-prediction/page.tsx
````typescript
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart, Check, ExternalLink, TrendingUp, LineChart, DollarSign, Smartphone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MarketPredictionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="absolute right-0 bottom-0 left-0 h-1/3 bg-gradient-to-t from-green-50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <Link 
                href="/" 
                className="inline-flex items-center text-sm font-medium mb-6 group"
                style={{ color: 'var(--color-primary)' }}
              >
           <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to home
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--color-foreground)' }}>
                Market Prediction System
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Data-driven price forecasting that empowers betel farmers to maximize profits by identifying the optimal timing and markets for selling their produce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image with animated overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/market-prediction.png"
                alt="Market Prediction System"
                width={1000}
                height={700}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                className="w-full h-auto rounded-2xl"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU1ODU1Oj4+NTU1NTU1NTU1NTU1NTU1NTX/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm md:text-base">
                  The market prediction system analyzes local market trends to help farmers maximize their economic returns.
                </p>
              </div>
            </motion.div>

            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6 bg-yellow-400"  >
                  <ShoppingCart className="w-4 h-4 mr-2 text-black" />
                  Price Forecasting Technology
                </div>
                
                <h2 className="text-3xl font-bold mb-6">How It Works</h2>
                
                <div className="space-y-8 mb-10">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Price Prediction</h3>
                      <p className="text-gray-600">
                        The system predicts betel leaf prices based on leaf type, size, quality grade, and seasonal context, giving farmers vital information for decision-making.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary-dark)', color: 'white' }}>
                      <ShoppingCart className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Market Recommendations</h3>
                      <p className="text-gray-600">
                        By analyzing data from major regional markets (Apaladeniya, Kuliyapitiya, and Naiwala), the system identifies the most profitable nearby markets for selling produce.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}>
                      <LineChart className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Seasonal Insights</h3>
                      <p className="text-gray-600">
                        The system accounts for seasonal factors and historical price trends to help farmers anticipate market fluctuations and plan harvests strategically.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                      <Smartphone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Multi-Platform Access</h3>
                      <p className="text-gray-600">
                        Farmers can access market predictions through both the Flutter mobile app and a WhatsApp chatbot, ensuring accessibility even in areas with limited connectivity.
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-medium mb-4">Prediction Performance</h3>
                  <div className="space-y-3">
                    {[
                      { metric: "Overall price prediction accuracy", value: "87.4%" },
                      { metric: "F1-Score", value: "86.9%" },
                      { metric: "Profit improvement for farmers", value: "23.5%" }
                    ].map((stat, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600">{stat.metric}</span>
                        <span className="font-medium" style={{ color: 'var(--color-primary-dark)' }}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Additional Details */}
          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Technical Implementation</h3>
                <p className="text-gray-600 mb-6">
                  Our market prediction system uses XGBoost machine learning models deployed on a scalable backend to ensure reliable predictions even during peak usage periods.
                </p>
                
                <h4 className="font-medium mb-3" style={{ color: 'var(--color-primary-dark)' }}>Key Technologies</h4>
                <ul className="space-y-2 mb-6">
                  {[
                    "XGBoost machine learning model",
                    "Python Flask backend on Railway.app",
                    "Feature engineering for market variables",
                    "WhatsApp API integration for chatbot",
                    "Multi-language support (Sinhala, Tamil, English)"
                  ].map((tech, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                      <span className="text-gray-600">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Feature Engineering</h3>
                <p className="text-gray-600 mb-6">
                  The accuracy of our market predictions is enhanced through specialized feature engineering that accounts for complex market dynamics.
                </p>
                
                <div className="space-y-4">
                  {[
                    { feature: "Leaf Density Index", description: "Calculates quality-to-weight ratio for pricing" },
                    { feature: "Historical Price Deviation", description: "Measures market volatility for risk assessment" },
                    { feature: "Seasonal Adjustment Factors", description: "Accounts for predictable annual price cycles" },
                    { feature: "Market Competition Index", description: "Estimates buyer competition at different markets" }
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <p className="font-medium" style={{ color: 'var(--color-primary-dark)' }}>{item.feature}</p>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Impact Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h3 className="text-2xl font-bold">Economic Impact</h3>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: 'rgba(255, 215, 0, 0.2)', color: 'var(--color-accent)' }}>
                <DollarSign className="w-4 h-4 mr-2" />
                Field-Validated Results
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "Average Income Increase", value: "21%", icon: <DollarSign className="h-6 w-6" /> },
                { metric: "Market Selection Accuracy", value: "92%", icon: <ShoppingCart className="h-6 w-6" /> },
                { metric: "Time Saved on Market Research", value: "8.5 hrs/week", icon: <TrendingUp className="h-6 w-6" /> },
                { metric: "Farmer Adoption Rate", value: "84%", icon: <Smartphone className="h-6 w-6" /> }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="inline-flex items-center justify-center p-3 rounded-full mb-4" style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}>
                    {stat.icon}
                  </div>
                  <h4 className="text-lg font-medium mb-1" style={{ color: 'var(--color-foreground)' }}>{stat.metric}</h4>
                  <p className="text-2xl font-bold" style={{ color: 'var(--color-primary-dark)' }}>{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Learn More About Our Research</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive documentation and research findings on the market prediction system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/documents"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              View Research Documentation
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border"
              style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
            >
              Contact Our Team
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
````

## File: src/app/project/weather-recommendations/page.tsx
````typescript
// src/app/project/weather-recommendations/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Cloud, Check, ExternalLink, Droplets, Thermometer, Shield, Smartphone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WeatherRecommendationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="absolute right-0 bottom-0 left-0 h-1/3 bg-gradient-to-t from-green-50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <Link 
                href="/" 
                className="inline-flex items-center text-sm font-medium mb-6 group"
                style={{ color: 'var(--color-primary)' }}
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to home
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--color-foreground)' }}>
                Weather Recommendations System
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Smart climate-based advisory system that helps betel farmers optimize watering, fertilizing, and protective measures based on current and forecasted weather conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image with animated elements */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/weather-recommendations.png"
                alt="Weather Recommendations System"
                width={1000}
                height={700}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                className="w-full h-auto rounded-2xl"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU1ODU1Oj4+NTU1NTU1NTU1NTU1NTU1NTX/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-transparent" />
              
              {/* Animated weather icons */}
              <motion.div 
                className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur-sm rounded-full"
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  repeatType: "reverse" 
                }}
              >
                <Cloud className="h-8 w-8" style={{ color: 'var(--color-primary-light)' }} />
              </motion.div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm md:text-base">
                  The system provides location-specific advice using real-time weather data from multiple sources including OpenMeteo and the Sri Lanka Department of Meteorology.
                </p>
              </div>
            </motion.div>

            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: 'rgba(76, 175, 80, 0.1)', color: 'var(--color-primary-light)' }}>
                  <Cloud className="w-4 h-4 mr-2" />
                  Climate-Adaptive Technology
                </div>
                
                <h2 className="text-3xl font-bold mb-6">How It Works</h2>
                
                <div className="space-y-8 mb-10">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                      <Droplets className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Watering Recommendations</h3>
                      <p className="text-gray-600">
                        The system analyzes rainfall patterns and soil moisture to provide specific watering schedules (no watering, water once, or water twice) optimized for betel cultivation.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary-dark)', color: 'white' }}>
                      <Thermometer className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Fertilizer Timing</h3>
                      <p className="text-gray-600">
                        Based on weather conditions, the system determines the most effective days for fertilizer application to maximize nutrient absorption and minimize runoff.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}>
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Protection Measures</h3>
                      <p className="text-gray-600">
                        During extreme weather events, the system suggests protective actions such as installing shade structures or improving drainage to safeguard crops.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                      <Smartphone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">User-Friendly Alerts</h3>
                      <p className="text-gray-600">
                        The app sends timely notifications about significant weather changes, allowing farmers to take preventive actions before adverse conditions impact their crops.
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-medium mb-4">Model Accuracy</h3>
                  <div className="space-y-3">
                    {[
                      { model: "Watering Model", accuracy: "99.6%" },
                      { model: "Fertilizer Model", accuracy: "97.7%" },
                      { model: "Protection Model", accuracy: "99.8%" }
                    ].map((stat, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600">{stat.model}</span>
                        <span className="font-medium" style={{ color: 'var(--color-primary-dark)' }}>{stat.accuracy}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Additional Details */}
          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">System Architecture</h3>
                <p className="text-gray-600 mb-6">
                  Our weather recommendation system consists of five interconnected modules working together to provide actionable insights based on weather data.
                </p>
                
                <h4 className="font-medium mb-3" style={{ color: 'var(--color-primary-dark)' }}>Key Components</h4>
                <ul className="space-y-2 mb-6">
                  {[
                    "Weather Display Module for intuitive data visualization",
                    "Alerts Module for critical weather event notifications",
                    "Data Collection Module for historical and real-time data",
                    "Machine Learning Sub-module with Random Forest models",
                    "Recommendation Generation Module for actionable advice"
                  ].map((component, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                      <span className="text-gray-600">{component}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Data Sources & Integration</h3>
                <p className="text-gray-600 mb-6">
                  The system integrates multiple data sources to provide comprehensive and accurate recommendations tailored to local conditions.
                </p>
                
                <div className="space-y-4">
                  {[
                    { source: "Weather APIs", details: "Real-time data from OpenMeteo" },
                    { source: "Historical Records", details: "Sri Lanka Department of Meteorology archives" },
                    { source: "Traditional Knowledge", details: "Insights from experienced local farmers" },
                    { source: "Field Observations", details: "On-site validation data collection" }
                  ].map((data, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <p className="font-medium" style={{ color: 'var(--color-primary-dark)' }}>{data.source}</p>
                      <p className="text-gray-600 text-sm">{data.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h3 className="text-2xl font-bold">Field Testing Results</h3>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: 'rgba(76, 175, 80, 0.1)', color: 'var(--color-primary-light)' }}>
                <Cloud className="w-4 h-4 mr-2" />
                Validated Across 3 Regions
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "Water Usage Reduction", value: "23.7%", icon: <Droplets className="h-6 w-6" /> },
                { metric: "Fertilizer Efficiency", value: "31.2%", icon: <Thermometer className="h-6 w-6" /> },
                { metric: "Weather Damage Prevention", value: "76.4%", icon: <Shield className="h-6 w-6" /> },
                { metric: "User Satisfaction", value: "92%", icon: <Smartphone className="h-6 w-6" /> }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="inline-flex items-center justify-center p-3 rounded-full mb-4" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                    {stat.icon}
                  </div>
                  <h4 className="text-lg font-medium mb-1" style={{ color: 'var(--color-foreground)' }}>{stat.metric}</h4>
                  <p className="text-2xl font-bold" style={{ color: 'var(--color-primary-dark)' }}>{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Learn More About Our Research</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive documentation and research findings on the weather recommendations system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/documents"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              View Research Documentation
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border"
              style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
            >
              Contact Our Team
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
````

## File: src/components/AboutSection.tsx
````typescript
// AboutSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/banner3.png"
                alt="Betel leaf farming in Sri Lanka"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                className="object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU1ODU1Oj4+NTU1NTU1NTU1NTU1NTU1NTX/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 grid grid-cols-3 gap-4">
                {[
                  { value: "94.95%", label: "P-Type Accuracy" },
                  { value: "88.89%", label: "KT-Type Accuracy" },
                  { value: "87.4%", label: "Market Prediction" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-white font-bold text-2xl">{stat.value}</p>
                    <p className="text-white/80 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative element */}
            <div 
              className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full z-10" 
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
          </motion.div>
          
          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-sm font-semibold tracking-wider uppercase" style={{ color: 'var(--color-primary)' }}>
              About the Project
            </h2>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Empowering Sri Lankan Betel Farmers
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              BetelCare is an innovative Flutter application designed specifically for betel farmers in Sri Lanka. 
              We&apos;re bridging the gap between traditional farming techniques and modern data-driven agriculture.
            </p>
            
            <div className="mt-8 space-y-4">
              {[
                "Developed for the Puttalam, Anamaduwa, and Kurunegala regions",
                "Fully available in Sinhala language for easy understanding",
                "Combines AI technology with traditional farming knowledge",
                "Increases productivity and reduces resource wastage"
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mt-1 mr-3" style={{ color: 'var(--color-primary)' }} />
                  <p className="text-gray-600">{feature}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <Link 
                href="/research" 
                className="inline-flex items-center gap-2 font-medium hover:gap-3 transition-all"
                style={{ color: 'var(--color-primary-dark)' }}
              >
                Learn more about our research
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
````

## File: src/components/FeaturesSection.tsx
````typescript
// FeaturesSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, BarChart, Cloud, ShoppingCart, Users, Smartphone } from "lucide-react";

const features = [
  {
    name: "Disease Detection",
    description: "Utilizes Convolutional Neural Networks to identify diseases and pests affecting betel leaves with high accuracy.",
    icon: <Leaf className="h-6 w-6 text-white" />,
    color: "var(--color-primary)"
  },
  {
    name: "Harvest Prediction",
    description: "Predicts optimal harvest times and yield quantities for three betel leaf types using advanced machine learning algorithms.",
    icon: <BarChart className="h-6 w-6 text-white" />,
    color: "var(--color-primary-dark)"
  },
  {
    name: "Market Prediction",
    description: "Analyzes market trends to help farmers decide the best time to sell their harvested betel leaves for maximum profit.",
    icon: <ShoppingCart className="h-6 w-6 text-white" />,
    color: "var(--color-accent)"
  },
  {
    name: "Weather Recommendations",
    description: "Provides location-specific advice on watering, fertilizing, and protection measures based on real-time weather data.",
    icon: <Cloud className="h-6 w-6 text-white" />,
    color: "var(--color-primary-light)"
  },
  {
    name: "Sinhala Language",
    description: "Built entirely in Sinhala language to ensure easy understanding and accessibility for local betel farmers.",
    icon: <Users className="h-6 w-6 text-white" />,
    color: "var(--color-primary)"
  },
  {
    name: "Mobile Accessibility",
    description: "Built using Flutter for both Android and iOS, with support for low-connectivity areas through WhatsApp integration.",
    icon: <Smartphone className="h-6 w-6 text-white" />,
    color: "var(--color-primary-dark)"
  }
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-base font-semibold tracking-wider uppercase" style={{ color: 'var(--color-primary)' }}>
            Key Features
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Four Integrated AI-Powered Systems
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Our comprehensive solution addresses the most critical challenges faced by betel farmers through 
            innovative technology and data-driven approaches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl   p-8 border border-gray-100 hover:shadow-sm transition-all"
            >
              <div 
                className="w-12 h-12 rounded-lg mb-5 flex items-center justify-center"
                style={{ backgroundColor: feature.color }}
              >
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.name}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
````

## File: src/components/ResearchResultsSection.tsx
````typescript
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { BarChart3, LineChart, PieChart, TrendingUp, ArrowRight, Users } from "lucide-react";
import Link from "next/link";

export default function ResearchResultsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const results = [
    { 
      icon: <BarChart3 className="h-5 w-5" style={{ color: 'var(--color-primary)' }} />,
      title: "Water Usage Reduction", 
      value: "23.7%", 
      description: "Less water consumed with optimal scheduling" 
    },
    { 
      icon: <LineChart className="h-5 w-5" style={{ color: 'var(--color-primary)' }} />,
      title: "Fertilizer Efficiency", 
      value: "31.2%", 
      description: "Reduction in fertilizer wastage" 
    },
    { 
      icon: <PieChart className="h-5 w-5" style={{ color: 'var(--color-primary)' }} />,
      title: "Crop Damage Prevention", 
      value: "76.4%", 
      description: "Reduction in weather-related damage" 
    },
    { 
      icon: <TrendingUp className="h-5 w-5" style={{ color: 'var(--color-primary)' }} />,
      title: "Market Price Prediction", 
      value: "87.4%", 
      description: "Accuracy in price forecasting" 
    },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-green-50" />
        <svg className="absolute top-0 right-0 h-full w-48" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
          <polygon points="0,0 100,0 100,100" fill="var(--color-primary)" fillOpacity="0.05" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-base font-semibold tracking-wider uppercase" style={{ color: 'var(--color-primary)' }}>
              Research Impact
            </h2>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Proven Results Through Field Testing
            </h3>
            
            <p className="text-lg text-gray-600 mb-8">
              Our research demonstrates significant improvements in farming efficiency, resource utilization, 
              and crop yield across test sites in Kurunegala, Puttalam, and Anamaduwa regions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
                >
                  <div className="flex items-center mb-3">
                    {result.icon}
                    <h4 className="ml-2 font-medium text-gray-900">{result.title}</h4>
                  </div>
                  <p className="text-3xl font-bold" style={{ color: 'var(--color-primary-dark)' }}>{result.value}</p>
                  <p className="text-gray-600 text-sm mt-1">{result.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10"
            >
              <Link 
                href="/documents" 
                className="inline-flex items-center gap-2 font-medium hover:gap-3 transition-all"
                style={{ color: 'var(--color-primary-dark)' }}
              >
                View the complete research documentation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/banner2.png"
                alt="BetelCare research results visualization"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                className="object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU1ODU1Oj4+NTU1NTU1NTU1NTU1NTU1NTX/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
            
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg border border-gray-100 max-w-xs"
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                  <Users className="w-5 h-5" />
                </div>
                <p className="ml-3 font-medium">Farmer Feedback</p>
              </div>
              <p className="text-gray-600 text-sm">
                &quot;Younger farmers were more receptive to adopting the technology compared to older ones, but all appreciated the local language support.&quot;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
````

## File: src/components/TeamSection.tsx
````typescript
// TeamSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, Award, GraduationCap } from "lucide-react";

const supervisors = [
  {
    name: "Dr. Sanvitha Kasthuriarachchi",
    role: "Assistant Professor",
    designation: "Supervisor",
    image: "/supervisor.png",
    bio: "PhD in Computer Science",
    qualification: "PhD in Computer Science",
    linkedin: "https://www.linkedin.com/in/sanvitha-kasthuriarachchi-31b50a37/?originalSubdomain=lk",
    email: "mailto:sanvitha.k@sliit.lk",
    type: "supervisor"
  },
  {
    name: "Ms. Lokesha Weerasinghe",
    role: "Senior Lecturer", 
    designation: "Co-supervisor",
    image: "/co-supervisor.jpg",
    bio: "M.Sc. Degree in Information Technology",
    qualification: "M.Sc. in Information Technology",
    linkedin: "https://www.linkedin.com/in/lokesha-weerasinghe-3a4478154/",
    email: "mailto:lokesha.w@sliit.lk",
    type: "supervisor"
  }
];

const students = [
  {
    name: "Eshan Imesh",
    role: "Associate Software Engineer",
    designation: "Research Team Member",
    image: "/member4.jpg",  
    bio: "Software engineering undergraduate at SLIIT",
    qualification: "Undergraduate in Software Engineering",
    github: "https://github.com/ImeshR",
    linkedin: "https://www.linkedin.com/in/eshan-imesh-17a642215/",
    email: "mailto:it21233562@my.sliit.lk",
    type: "student"
  },
  {
    name: "Saranga Siriwardhana",
    role: "Junior Full Stack Developer",
    designation: "Research Team Member",
    image: "/member1.jpeg",
    bio: "Software engineering undergraduate at SLIIT",
    qualification: "Undergraduate in Software Engineering",
    github: "https://github.com/SarangaSiriwardhana9",
    linkedin: "https://www.linkedin.com/in/saranga-siriwardhana-409494218/",
    email: "mailto:lasindusaranga99@gmail.com",
    type: "student"
  },
  {
    name: "Umesh Dewasinghe",
    role: "Trainee AI/ML Engineer",
    designation: "Research Team Member",
    image: "/member3.jpg",
    bio: "Software engineering undergraduate at SLIIT",
    qualification: "Undergraduate in Software Engineering",
    github: "https://github.com/umeshdewasinghe",
    linkedin: "https://www.linkedin.com/in/umesh-dewsinghe-896993217/",
    email: "mailto:it21165184@my.sliit.lk",
    type: "student"
  },
  {
    name: "Kavindi Fernando",
    role: "Trainee Business Analyst",
    designation: "Research Team Member",
    image: "/member2.jpeg",
    bio: "Software engineering undergraduate at SLIIT",
    qualification: "Undergraduate in Software Engineering",
    github: "https://github.com/it21388248",
    linkedin: "https://www.linkedin.com/in/kavindifernando/",
    email: "mailto:kavi.fernando2001@gmail.com",
    type: "student"
  }
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-400 to-green-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full text-sm font-medium text-white"
               style={{ backgroundColor: 'var(--color-primary)' }}>
            <GraduationCap className="w-4 h-4" />
            Research Team
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" 
              style={{ color: 'var(--color-foreground)' }}>
            Meet Our Team
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            A collaborative effort between experienced supervisors and dedicated undergraduate researchers, 
            combining academic expertise with innovative technology solutions.
          </p>
        </motion.div>

        {/* Supervisors Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-foreground)' }}>
              Research Supervisors
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert guidance and academic supervision from distinguished faculty members at SLIIT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {supervisors.map((supervisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-8  border border-gray-200    transition-all duration-500 overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="relative mx-auto w-32 h-32 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-full p-1">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                          <Image
                            src={supervisor.image}
                            alt={supervisor.name}
                            fill
                            className="object-cover rounded-full"
                          />
                        </div>
                      </div>
                      {/* Academic badge */}
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg"
                           style={{ backgroundColor: 'var(--color-primary)' }}>
                        <Award className="w-5 h-5" />
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{supervisor.name}</h4>
                    <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-primary)' }}>
                      {supervisor.role}
                    </p>
                    <p className="text-sm font-medium text-gray-500 mb-4">
                      ({supervisor.designation})
                    </p>
                    <p className="text-gray-600 text-sm mb-6 font-medium">
                      {supervisor.qualification}
                    </p>
                    
                    <div className="flex justify-center space-x-4">
                      {supervisor.linkedin && (
                        <a 
                          href={supervisor.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                          style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary)' }}
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      <a 
                        href={supervisor.email}
                        className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                        style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary)' }}
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Students Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-foreground)' }}>
              Research Team Members
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate undergraduate researchers specializing in machine learning, mobile development, 
              data science, and agricultural technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {students.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-6   border border-gray-200   transition-all duration-500 overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="relative mx-auto w-24 h-24 mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-400 rounded-full p-0.5">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white p-0.5">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h4>
                    <p className="text-sm font-medium mb-3" style={{ color: 'var(--color-primary)' }}>
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    <div className="flex justify-center space-x-3">
                      {member.github && (
                        <a 
                          href={member.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                          style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary)' }}
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                          style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary)' }}
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      <a 
                        href={member.email}
                        className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                        style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary)' }}
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-green-500 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Department of Information Technology, SLIIT</span>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
````

## File: next.config.ts
````typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true  
  }
};

export default nextConfig;
````

## File: src/app/documents/page.tsx
````typescript
// documents/page.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, ArrowLeft, Download, ExternalLink, BookOpen, PresentationIcon, ClipboardList, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const documentCategories = [
  {
    title: "Research Proposal",
    description: "Our initial project proposal documents outlining objectives, methodology, and expected outcomes.",
    icon: <FileText className="w-6 h-6" />,
    color: "#4CAF50",
    bgColor: "rgba(76, 175, 80, 0.1)",
    documents: [
      {
        title: "Proposal Reports",
        description: "Individual reports from all 4 team members",
        link: "https://drive.google.com/drive/folders/1ZoMC-1Shay0hw5pxHSxG5GrIKyfYVt0f?usp=sharing",
      }
    ]
  },
  {
    title: "Presentations",
    description: "Slides and materials from our project presentations throughout the research timeline.",
    icon: <PresentationIcon className="w-6 h-6" />,
    color: "#2196F3",
    bgColor: "rgba(33, 150, 243, 0.1)",
    documents: [
      {
        title: "Proposal Presentation",
        description: "Initial project pitch presentation",
        link: "https://drive.google.com/file/d/1iHF9ugOwUSf_O_8BMmJUGaQOgjYpmfiB/view?usp=sharing",
      },
      {
        title: "Progress Presentation 1",
        description: "First milestone results and findings",
        link: "https://drive.google.com/file/d/1xHvxDpr9nfxys4mrPqFbBSeEDeCNvXmi/view?usp=sharing",
      },
      {
        title: "Progress Presentation 2",
        description: "Second milestone results and updates",
        link: "https://drive.google.com/file/d/1qT7HGKzEh5IA1yIIolfzzJldhsRti8x-/view?usp=sharing",
      }
    ]
  },
  {
    title: "Log Books",
    description: "Detailed tracking of research activities, experiments, and meeting minutes from all team members.",
    icon: <ClipboardList className="w-6 h-6" />,
    color: "#FF9800",
    bgColor: "rgba(255, 152, 0, 0.1)",
    documents: [
      {
        title: "Team Log Books",
        description: "Weekly logs from all 4 team members",
        link: "https://drive.google.com/drive/folders/1e61oX9hr2rthg-Ip1MDWEjTEyEmxtS4w?usp=sharing",
      }
    ]
  },
  {
    title: "Final Reports",
    description: "Comprehensive documentation of our complete research findings, methodology, results, and conclusions.",
    icon: <BookOpen className="w-6 h-6" />,
    color: "#F44336",
    bgColor: "rgba(244, 67, 54, 0.1)",
    documents: [
      {
        title: "Final Reports",
        description: "Complete documentation of research findings",
        link: "https://drive.google.com/drive/folders/1Kp6md9pZyfcVi4ycUSohb5GKEVWwPAMG?usp=sharing",
      }
    ]
  },
  {
    title: "Research Paper",
    description: "Our published academic paper presenting the key findings and innovations of our BetelCare project.",
    icon: <FileText className="w-6 h-6" />,
    color: "#9C27B0",
    bgColor: "rgba(156, 39, 176, 0.1)",
    documents: [
      {
        title: "Published Paper",
        description: "Academic publication of our research",
        link: "https://drive.google.com/file/d/19aMGRKijwX5LLJdjddWzKU1vnygGFNWs/view?usp=sharing",
      }
    ]
  },
  {
    title: "Team Information",
    description: "Details about our research team members, roles, and contributions to the BetelCare project.",
    icon: <Users className="w-6 h-6" />,
    color: "#00BCD4",
    bgColor: "rgba(0, 188, 212, 0.1)",
    documents: [
      {
        title: "Team Profiles",
        description: "Information about all 4 team members",
        link: "https://drive.google.com/drive/folders/1YifQrTT8VADAWkc_rEb979G13fKhfDoe?usp=sharing",
      }
    ]
  }
];

export default function DocumentsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openInNewTab = useCallback((url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  const handleCopyCitation = useCallback(() => {
    navigator.clipboard.writeText(
      "Ranawaka, W.E.I., Dewasinghe, U.H., Fernando, B.K.M., Siriwardhana, E.A.L.S., Kasthuriarachchi, S., & Weerasinghe, L. (2025). BetelCare: Development of an AI-Powered Application for Sri Lankan Betel Farmers. Journal of Agricultural Technology. Department of Information Technology, Sri Lanka Institute of Information Technology, Malabe, Sri Lanka."
    );
    alert("Citation copied to clipboard!");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-b from-green-200/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-b from-blue-200/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Link 
              href="/" 
              className="inline-flex items-center text-sm font-medium mb-6 group"
              style={{ color: 'var(--color-primary)' }}
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-4" 
              style={{ color: 'var(--color-foreground)' }}
            >
              Research Documents
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Access all documentation related to our BetelCare research project, from initial proposals to final reports.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Document Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                transition={{ duration: 0.5, delay: 0.1 + (categoryIndex * 0.1) }}
                className="bg-white rounded-2xl border border-black/10 overflow-hidden hover:shadow-sm transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div 
                      className="p-3 rounded-xl" 
                      style={{ backgroundColor: category.bgColor, color: category.color }}
                    >
                      {category.icon}
                    </div>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                      {category.documents.length} {category.documents.length === 1 ? 'document' : 'documents'}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--color-foreground)' }}>{category.title}</h2>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">{category.description}</p>
                  
                  <div className="space-y-4">
                    {category.documents.map((doc, docIndex) => (
                      <div key={docIndex} className="border border-gray-100 rounded-xl p-4 hover:bg-gray-50 transition-colors">
                        <h3 className="font-medium mb-1" style={{ color: category.color }}>{doc.title}</h3>
                        <p className="text-gray-500 text-sm mb-3">{doc.description}</p>
                        <button 
                          onClick={() => openInNewTab(doc.link)}
                          className="inline-flex items-center text-sm font-medium group"
                          style={{ color: category.color }}
                        >
                          View Documents
                          <ExternalLink className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download All Section */}
      <section className="py-16 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/document-pattern.png" 
            alt="Pattern" 
            fill 
            className="object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Download Complete Research Package</h2>
              <p className="text-gray-300 max-w-2xl">
                Get all our research documents in a single download, including proposals, presentations, reports, and published papers.
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(46, 125, 50, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openInNewTab("https://drive.google.com/file/d/1l3vOQ0p_MclKkKENYsPMgpxVC6lLscLo/view?usp=sharing")}
              className="inline-flex items-center px-6 py-4 rounded-xl font-medium shadow-lg text-white"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Package (PDF, 24MB)
            </motion.button>
          </div>
        </div>
      </section>

      {/* Citation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-foreground)' }}>How to Cite Our Research</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              If you&apos;re using our research in your academic work, please use the following citation format.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <p className="font-mono text-sm text-gray-700 p-6 bg-white border border-gray-200 rounded-lg mb-6 leading-relaxed">
              Ranawaka, W.E.I., Dewasinghe, U.H., Fernando, B.K.M., Siriwardhana, E.A.L.S., Kasthuriarachchi, S., & Weerasinghe, L. (2025). BetelCare: Development of an AI-Powered Application for Sri Lankan Betel Farmers. <em>Journal of Agricultural Technology</em>. Department of Information Technology, Sri Lanka Institute of Information Technology, Malabe, Sri Lanka.
            </p>
            
            <div className="flex justify-end">
              <button
                onClick={handleCopyCitation}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
                style={{ color: 'var(--color-primary)', backgroundColor: 'rgba(76, 175, 80, 0.1)' }}
              >
                Copy Citation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
````

## File: src/components/Banner.tsx
````typescript
// Banner.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, BarChart, Cloud, ShoppingCart } from "lucide-react";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { 
      title: "Harvest Prediction", 
      description: "AI-powered yield forecasting for optimized planning", 
      icon: <BarChart className="w-6 h-6" />,
      delay: 0.6
    },
    { 
      title: "Disease Detection", 
      description: "Early identification of leaf issues with CNN technology", 
      icon: <Leaf className="w-6 h-6" />,
      delay: 0.7
    },
    { 
      title: "Market Insights", 
      description: "Data-driven price predictions for maximum profit", 
      icon: <ShoppingCart className="w-6 h-6" />,
      delay: 0.8
    },
    { 
      title: "Weather Based Recommendations", 
      description: "Climate-based farming advice for better yields", 
      icon: <Cloud className="w-6 h-6" />,
      delay: 0.9
    }
  ];

  return (
    <div ref={ref} className="relative min-h-screen w-full overflow-hidden">
      {/* Static Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner1.png"
          alt="BetelCare Banner"
          fill
          sizes="100vw"
          quality={85}
          className="object-cover brightness-[0.6]"
          priority
          loading="eager"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU1ODU1Oj4+NTU1NTU1NTU1NTU1NTU1NTX/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        
        {/* Overlay with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10"></div>
        <div className="absolute inset-0 opacity-20 z-5" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
             }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen py-20 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="pt-16 md:pt-20 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ 
                opacity: isVisible ? 1 : 0, 
                x: isVisible ? 0 : -50 
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 md:mb-6 rounded-full text-xs md:text-sm font-medium text-white border border-white/20 backdrop-blur-sm" 
                   style={{ backgroundColor: 'rgba(46, 125, 50, 0.3)' }}>
                <span className="flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full bg-white">
                  <Leaf className="w-2 h-2 md:w-3 md:h-3" style={{ color: 'var(--color-primary)' }} />
                </span>
                Research Project 2025
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-6 tracking-tight">
                <span className="block">Betel<span style={{ color: 'var(--color-accent)' }}>Care</span></span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-1 md:mt-2 font-normal text-white/80">Smart Farming Solution</span>
              </h1>
              
              <p className="text-base md:text-xl text-gray-200 mb-6 md:mb-8 max-w-2xl">
                An AI-powered application designed specifically for Sri Lankan betel farmers, combining advanced machine learning with traditional farming knowledge.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(46, 125, 50, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  href="/documents"
                  className="px-4 md:px-6 py-2.5 md:py-3.5 text-sm md:text-base text-white font-medium rounded-lg shadow-lg transition-all flex items-center justify-center gap-2"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                   View Documents
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1" />
                </motion.a>
 
              </div>
            </motion.div>
          </div>
          
          {/* Feature cards with hover effect - desktop */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: isVisible ? 1 : 0, 
                  y: isVisible ? 0 : 30 
                }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.3)",
                  backgroundColor: 'rgba(255, 255, 255, 0.15)'
                }}
                className="backdrop-blur-sm border border-white/20 p-6 rounded-xl transition-all"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-200 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile feature grid - optimized for smaller screens */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:hidden mt-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isVisible ? 1 : 0, 
                  y: isVisible ? 0 : 20 
                }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                className="backdrop-blur-sm border border-white/20 p-3 sm:p-4 rounded-lg"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg mb-1.5 sm:mb-2 flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                  <div className="w-4 h-4 sm:w-5 sm:h-5">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on smaller screens where space is limited */}
      <motion.div 
        className="hidden sm:block absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-white/70 text-xs md:text-sm font-medium">Scroll to explore</p>
          <div className="w-6 h-10 md:w-8 md:h-12 rounded-full border-2 border-white/50 flex justify-center">
            <motion.div 
              className="w-1 h-2 md:h-3 bg-white rounded-full mt-2"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                y: [0, 4, 0],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 1.5,
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
````

## File: src/components/ContactSection.tsx
````typescript
// ContactSection.tsx
"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, MapPin, Phone, Mail, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    // For now, we'll just simulate a successful submission
    setFormSubmitted(true);
  };

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-base font-semibold tracking-wider uppercase" style={{ color: 'var(--color-primary)' }}>
            Get In Touch
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Us
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Have questions about our research or interested in collaboration? 
            We&apos;d love to hear from you. Reach out to our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl   p-8 border border-gray-200">
              <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)' }}>
                      <MapPin className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600 mt-1">Srilanka Institute Of Information Technology <br />Malabe, Sri Lanka</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)' }}>
                      <Mail className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600 mt-1">betelcareapp@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)' }}>
                      <Phone className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600 mt-1">+94 77 334 6523</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h5 className="font-medium text-gray-900 mb-3">Research Areas</h5>
                <div className="flex flex-wrap gap-2">
                  {["Machine Learning", "Computer Vision", "Mobile Development", "Agricultural Tech", "Data Science"].map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl  border-gray-200 p-8 border  ">
              {formSubmitted ? (
                <div className="text-center py-10">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)' }}>
                    <CheckCircle className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <h3 className="mt-3 text-lg font-medium text-gray-900">Message Sent!</h3>
                  <p className="mt-2 text-gray-600">
                    Thank you for contacting us. We&apos;ll get back to you as soon as possible.
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4 border"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4 border"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4 border"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4 border"
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      Send Message
                      <Send className="ml-2 -mr-1 h-5 w-5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
````

## File: src/components/DocumentsSection.tsx
````typescript
// DocumentsSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Download, File, FileSpreadsheet, Book, FileCode } from "lucide-react";
import Link from "next/link";

const documents = [
  {
    title: "Project Proposal",
    description: "Initial research project proposal including problem statement and objectives.",
    icon: <FileText className="h-10 w-10" />,
    link: "https://drive.google.com/drive/folders/1ZoMC-1Shay0hw5pxHSxG5GrIKyfYVt0f?usp=sharing",
    color: "var(--color-primary-light)"
  },
  {
    title: "Progress Presentation 1",
    description: "First milestone presentation covering initial implementation and findings.",
    icon: <File className="h-10 w-10" />,
    link: "https://drive.google.com/file/d/1xHvxDpr9nfxys4mrPqFbBSeEDeCNvXmi/view?usp=sharing",
    color: "var(--color-primary-dark)" 
  },
  {
    title: "Progress Presentation 2",
    description: "Second milestone presentation with updated results and adjustments.",
    icon: <File className="h-10 w-10" />,
    link: "https://drive.google.com/file/d/1qT7HGKzEh5IA1yIIolfzzJldhsRti8x-/view?usp=sharing",
    color: "var(--color-primary-dark)"
  },
  {
    title: "Research Paper",
    description: "Academic paper detailing the methodology, experiments, and outcomes.",
    icon: <Book className="h-10 w-10" />,
    link: "https://drive.google.com/file/d/19aMGRKijwX5LLJdjddWzKU1vnygGFNWs/view?usp=sharing",
    color: "var(--color-accent)"
  },
  {
    title: "Final Reports",
    description: "Comprehensive documentation of the entire research project.",
    icon: <FileSpreadsheet className="h-10 w-10" />,
    link: "https://drive.google.com/drive/folders/1Kp6md9pZyfcVi4ycUSohb5GKEVWwPAMG?usp=sharing",
    color: "var(--color-primary)"
  },
  {
    title: "Log Books",
    description: "Detailed records of research activities and experiments.",
    icon: <FileCode className="h-10 w-10" />,
    link: "https://drive.google.com/drive/folders/1e61oX9hr2rthg-Ip1MDWEjTEyEmxtS4w?usp=sharing",
    color: "var(--color-primary-light)"
  }
];

export default function DocumentsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-base font-semibold tracking-wider uppercase" style={{ color: 'var(--color-primary)' }}>
            Research Documentation
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Project Documents
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Access our comprehensive collection of research documents, presentations, and reports 
            that detail the development and findings of the BetelCare project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 transition-all relative overflow-hidden group"
            >
              {/* Decorative corner */}
              <div 
                className="absolute top-0 right-0 w-20 h-20 transform translate-x-10 -translate-y-10 rotate-45 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300"
                style={{ backgroundColor: doc.color, opacity: 0.1 }}
              />
              
              <div className="relative">
                <div className="mb-5">
                  <div style={{ color: doc.color }}>{doc.icon}</div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{doc.title}</h4>
                <p className="text-gray-600 mb-6">{doc.description}</p>
                
                <button 
                  onClick={() => openInNewTab(doc.link)}
                  className="inline-flex items-center gap-2 font-medium text-sm hover:gap-3 transition-all"
                  style={{ color: doc.color }}
                >
                  View document
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Link 
            href="/documents" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium rounded-lg text-white transition-transform hover:scale-105"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            View All Documents
            <FileText className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
````

## File: src/components/DomainSection.tsx
````typescript
// src/components/DomainSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { BookOpen, Target, Code, FlaskConical, CheckCircle } from "lucide-react";
 
export default function DomainSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0) 70%)' }}></div>
        <div className="absolute -left-32 top-1/3 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255, 193, 7, 0.1) 0%, rgba(255, 193, 7, 0) 70%)' }}></div>
        <div className="absolute right-0 bottom-0 w-full h-1/3 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary)' }}>
            Innovation in Agriculture
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ color: 'var(--color-foreground)' }}>
            Revolutionizing Betel Farming
          </h2>
          <p className="text-xl text-gray-600">
            Our research addresses the technological gap in betel farming, particularly for new farmers in Sri Lanka&apos;s key growing regions.
          </p>
        </motion.div>

        {/* Main domain card - Research Gap & Problem */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-24"
        >
          <div className="bg-white rounded-2xl  not-[]: overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left side - Image */}
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="/domain-hero.png"  
                  alt="Betel farming technology gap"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/40 flex items-center">
                  <div className="p-8">
                    <h3 className="text-white text-2xl font-bold mb-3">Research Gap & Problem</h3>
                    <p className="text-white/90 max-w-md">
                      While countries like India and Thailand have embraced precision agriculture for betel farming, Sri Lankan farmers struggle with traditional methods and limited access to modern technology.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className="p-8">
                <div className="flex flex-col h-full justify-between">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-red-50 rounded-lg p-2 mt-1 mr-4">
                        <CheckCircle className="h-5 w-5 text-red-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-gray-900">Limited Access to Modern Knowledge</h4>
                        <p className="text-gray-600">New betel farmers in Sri Lanka lack access to data-driven insights and modern farming techniques.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-amber-50 rounded-lg p-2 mt-1 mr-4">
                        <CheckCircle className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-gray-900">Unpredictable Weather Impact</h4>
                        <p className="text-gray-600">Farmers struggle to adapt to changing weather patterns, causing yield losses and inefficient resource usage.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-50 rounded-lg p-2 mt-1 mr-4">
                        <CheckCircle className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-gray-900">Disease & Pest Management</h4>
                        <p className="text-gray-600">Limited early detection and treatment options for diseases lead to significant crop losses.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-gray-700 italic">
                      &quot;These challenges create significant barriers for beginners trying to establish and sustain profitable betel cultivation in Sri Lanka.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Literature Survey & Research Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Literature Survey */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-xl   overflow-hidden border border-gray-200"
          >
            <div className="h-2 w-full" style={{ backgroundColor: 'var(--color-primary)' }}></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)' }}>
                  <BookOpen className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--color-foreground)' }}>Literature Survey</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  Our research revealed that betel farming, though rooted in tradition, demands meticulous care and effort. Key challenges include:
                </p>
                
                <ul className="space-y-3">
                  {[
                    "High dependency on climatic conditions",
                    "Irregular rainfall patterns disrupting yields",
                    "Economic instability from fluctuating production costs",
                    "Inadequate government interventions",
                    "Limited research on precision agriculture for betel"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 mt-6 border-t border-gray-100">
                  <p className="text-gray-600">
                    While precision agriculture has been widely studied for staple crops, limited research has been conducted on betel farming, leaving room for innovation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Research Objectives */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-xl   overflow-hidden border border-gray-200"
          >
            <div className="h-2 w-full" style={{ backgroundColor: 'var(--color-accent)' }}></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)' }}>
                  <Target className="h-6 w-6" style={{ color: 'var(--color-accent)' }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--color-foreground)' }}>Research Objectives</h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-600">
                  Our research aims to develop a comprehensive mobile application to empower Sri Lankan betel farmers through:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-amber-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-amber-800">Harvest Prediction</h4>
                    <p className="text-amber-700 text-sm">ML-powered system to forecast optimal harvest times and yields</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-green-800">Disease Detection</h4>
                    <p className="text-green-700 text-sm">CNN-based system to identify diseases and recommend treatments</p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-blue-800">Weather Recommendations</h4>
                    <p className="text-blue-700 text-sm">Real-time advice based on current and forecasted weather</p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-purple-800">Market Predictions</h4>
                    <p className="text-purple-700 text-sm">Price forecasting to maximize profits through strategic selling</p>
                  </div>
                </div>
                
                <div className="pt-4 mt-2 border-t border-gray-100">
                  <p className="text-gray-600">
                    Through these objectives, we aim to bridge the gap between traditional farming methods and modern technological advancements.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-24"
        >
          <div className="bg-white rounded-2xl   overflow-hidden border border-gray-100">
            <div className="p-8">
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)' }}>
                  <FlaskConical className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--color-foreground)' }}>Methodology</h3>
              </div>
              
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-gray-200"></div>
                <div className="space-y-12 relative">
                  {[
                    {
                      title: "Data Collection & Processing",
                      desc: "Gathering field data, weather information, and disease images to build training datasets for our machine learning models.",
                      color: "var(--color-primary-light)"
                    },
                    {
                      title: "Machine Learning Model Development",
                      desc: "Training and optimizing models for harvest prediction (XGBoost), disease detection (CNN), and weather recommendation systems.",
                      color: "var(--color-primary)"
                    },
                    {
                      title: "Mobile Application Development",
                      desc: "Building a Flutter-based application that integrates all models, with a focus on accessibility for farmers with varying technological proficiency.",
                      color: "var(--color-accent)"
                    },
                    {
                      title: "Field Testing & Validation",
                      desc: "Testing the application with betel farmers in Puttalam, Kurunegala, and Anamaduwa regions to validate effectiveness and gather feedback.",
                      color: "var(--color-primary-dark)"
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex">
                      <div className="relative">
                        <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center border-4 z-10" style={{ borderColor: step.color }}>
                          <div className="h-8 w-8 rounded-full" style={{ backgroundColor: step.color }}></div>
                        </div>
                      </div>
                      <div className="ml-8">
                        <h4 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-foreground)' }}>{step.title}</h4>
                        <p className="text-gray-600 max-w-3xl">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technologies Used */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-xl mr-4 bg-white shadow-sm">
                <Code className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Technologies Used</h3>
                <p className="text-gray-600 mt-1">Modern stack powering our innovative solutions</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { 
                  name: "Flutter", 
                  icon: "/tech/flutter.svg", 
                  color: "#42A5F5",
                  category: "Mobile Development"
                },
                { 
                  name: "TensorFlow", 
                  icon: "/tech/tensorflow.svg", 
                  color: "#FF6F00",
                  category: "Machine Learning"
                },
                { 
                  name: "Python", 
                  icon: "/tech/python.svg", 
                  color: "#3776AB",
                  category: "Backend"
                },
                { 
                  name: "XGBoost", 
                  icon: "/tech/xgboost.png", 
                  color: "#2E7D32",
                  category: "Machine Learning"
                },
                { 
                  name: "Supabase", 
                  icon: "/tech/supabase.svg", 
                  color: "#3ECF8E",
                  category: "Database"
                },
                { 
                  name: "Google Maps", 
                  icon: "/tech/googlemaps.svg", 
                  color: "#4285F4",
                  category: "APIs"
                },
                { 
                  name: "Flask", 
                  icon: "/tech/flask.svg", 
                  color: "#FFFFFF",
                  category: "Backend"
                },
                { 
                  name: "OpenMeteo", 
                  icon: "/tech/openmeteo.svg", 
                  color: "#62B8F6",
                  category: "APIs"
                },
                { 
                  name: "OpenCV", 
                  icon: "/tech/opencv.svg", 
                  color: "#5C3EE8",
                  category: "Computer Vision"
                },
                { 
                  name: "Scikit-learn", 
                  icon: "/tech/scikit.webp", 
                  color: "#F7931E",
                  category: "Machine Learning"
                },
                { 
                  name: "WhatsApp API", 
                  icon: "/tech/whatsapp.svg", 
                  color: "#25D366",
                  category: "APIs"
                }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group relative"
                >
                  <div 
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col items-center justify-center border border-gray-100"
                  >
                    <div className="relative h-12 w-12 mb-4">
                      <Image 
                        src={tech.icon} 
                        alt={tech.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900 text-center">{tech.name}</span>
                    <span className="text-xs text-gray-500 mt-1 text-center">{tech.category}</span>
                  </div>
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                      background: `linear-gradient(45deg, ${tech.color}10, ${tech.color}05)`,
                      border: `1px solid ${tech.color}20`
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
````

## File: src/components/MilestonesSection.tsx
````typescript
// src/components/MilestonesSection.tsx
"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  FileText, 
  Presentation, 
  CheckCircle, 
  Calendar, 
  Clock,
  ChevronDown
} from "lucide-react";
import Link from "next/link";

const milestones = [
  {
    title: "Project Proposal",
    date: "September 15, 2024",
    description: "Initial research project proposal including problem statement, objectives, and methodology.",
    marks: "10%",
    status: "completed",
    icon: <FileText className="h-5 w-5" />,
    link: "/documents/project-proposal.pdf",
    details: [
      "Problem Statement & Background Research",
      "Research Objectives & Scope",
      "Proposed Methodology",
      "Timeline & Deliverables",
      "Literature Review"
    ]
  },
  {
    title: "Progress Presentation-1",
    date: "November 22, 2024",
    description: "First milestone presentation covering implementation of backend systems and machine learning modules.",
    marks: "15%",
    status: "completed",
    icon: <Presentation className="h-5 w-5" />,
    link: "/documents/progress-presentation-1.pdf",
    details: [
      "Backend System Architecture Implementation",
      "ML Model Development & Training",
      "Harvest Prediction Algorithm Integration",
      "Disease Detection System Implementation",
      "API Endpoint Development & Testing"
    ]
  },
  {
    title: "Progress Presentation-2",
    date: "February 18, 2025",
    description: "Second milestone presentation showcasing mobile app development and full system integration.",
    marks: "15%",
    status: "completed",
    icon: <Presentation className="h-5 w-5" />,
    link: "/documents/progress-presentation-2.pdf",
    details: [
      "Mobile Application Development",
      "Full System Integration",
      "Weather Recommendation System Implementation",
      "Disease Mapping Feature Integration",
      "User Interface & Experience Optimization"
    ]
  },
  {
    title: "Final Report Submission",
    date: "April 5, 2025",
    description: "Comprehensive documentation of research methodology, implementation, and results with published research paper.",
    marks: "30%",
    status: "completed",
    icon: <FileText className="h-5 w-5" />,
    link: "/documents/final-report.pdf",
    details: [
      "Research Paper Publication",
      "Documentation Website Creation",
      "Implementation Details & Architecture",
      "Experimental Results & Analysis",
      "Conclusions & Future Work"
    ]
  },
  {
    title: "Viva",
    date: "May 10, 2025",
    description: "Final assessment through oral examination and project demonstration.",
    marks: "30%",
    status: "in-progress",
    icon: <CheckCircle className="h-5 w-5" />,
    link: null,
    details: [
      "Project Demonstration",
      "Technical Q&A Session",
      "Research Contribution Assessment",
      "Implementation Quality Evaluation",
      "Final Feedback & Grading"
    ]
  }
];

export default function MilestonesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         
        <div className="absolute w-1/3 h-32 md:h-64 right-0 bottom-0 opacity-10" style={{ 
          background: 'linear-gradient(135deg, var(--color-accent) 0%, transparent 100%)' 
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary)' }}>
            Project Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ color: 'var(--color-foreground)' }}>
            Research Milestones
          </h2>
          <p className="text-xl text-gray-600">
            Track our research journey through key assessments and deliverables from project proposal to final presentation.
          </p>
        </motion.div>

        {/* Progress bar for desktop */}
        <div className="hidden lg:block relative max-w-5xl mx-auto mb-24 px-12">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-1000"
              style={{ 
                width: '80%',
                background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-accent) 100%)'
              }}
            ></div>
          </div>
          <div className="flex justify-between absolute -top-2 left-12 right-12">
            {milestones.map((_, index) => {
              const completed = index < 4;
              const inProgress = index === 4;
              const upcoming = index > 4;
              
              return (
                <div key={index} className="relative -ml-5">
                  <div 
                    className={`w-10 h-10 rounded-full border-4 flex items-center justify-center transition-all ${
                      completed 
                        ? 'bg-white border-primary' 
                        : inProgress 
                          ? 'bg-white border-accent' 
                          : 'bg-white border-gray-300'
                    }`}
                    style={{ 
                      borderColor: completed 
                        ? 'var(--color-primary)' 
                        : inProgress 
                          ? 'var(--color-accent)' 
                          : '#D1D5DB'
                    }}
                  >
                    {completed && (
                      <CheckCircle className="h-5 w-5" style={{ color: 'var(--color-primary)' }} />
                    )}
                    {inProgress && (
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-accent)' }}></div>
                    )}
                    {upcoming && (
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    )}
                  </div>
                  <div 
                    className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-medium ${
                      completed 
                        ? 'text-primary' 
                        : inProgress 
                          ? 'text-accent' 
                          : 'text-gray-400'
                    }`}
                    style={{ 
                      color: completed 
                        ? 'var(--color-primary)' 
                        : inProgress 
                          ? 'var(--color-accent)' 
                          : '#9CA3AF'
                    }}
                  >
                    {index === 0 ? 'Proposal' : index === 1 ? 'Progress 1' : index === 2 ? 'Progress 2' : index === 3 ? 'Final Report' : 'Viva'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Milestone cards */}
        <div className="space-y-10 max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div 
                className={`bg-white rounded-xl overflow-hidden border border-gray-200  border-l-8 transition-all ${
                  expandedCard === index ? 'shadow-xl' : ''
                }`}
                style={{
                  borderLeftColor: milestone.status === 'completed' 
                    ? 'var(--color-primary)' 
                    : milestone.status === 'in-progress' 
                      ? 'var(--color-accent)' 
                      : '#D1D5DB'
                }}
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                        style={{ 
                          backgroundColor: milestone.status === 'completed' 
                            ? 'rgba(46, 125, 50, 0.1)' 
                            : milestone.status === 'in-progress' 
                              ? 'rgba(255, 193, 7, 0.1)' 
                              : 'rgba(209, 213, 219, 0.2)',
                          color: milestone.status === 'completed' 
                            ? 'var(--color-primary)' 
                            : milestone.status === 'in-progress' 
                              ? 'var(--color-accent)' 
                              : '#9CA3AF'
                        }}
                      >
                        {milestone.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{milestone.title}</h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {milestone.date}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <span 
                        className="px-3 py-1 rounded-full text-sm font-medium mr-3"
                        style={{ 
                          backgroundColor: milestone.status === 'completed' 
                            ? 'rgba(46, 125, 50, 0.1)' 
                            : milestone.status === 'in-progress' 
                              ? 'rgba(255, 193, 7, 0.1)' 
                              : 'rgba(209, 213, 219, 0.2)',
                          color: milestone.status === 'completed' 
                            ? 'var(--color-primary)' 
                            : milestone.status === 'in-progress' 
                              ? 'var(--color-accent)' 
                              : '#9CA3AF'
                        }}
                      >
                        {milestone.status}
                      </span>
                      <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${expandedCard === index ? 'transform rotate-180' : ''}`} />
                    </div>
                  </div>
                  
                  <p className="text-gray-600">{milestone.description}</p>
                  
                  <div className="mt-4 flex items-center text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
                    <Clock className="h-4 w-4 mr-1" />
                    Weight: {milestone.marks}
                  </div>
                </div>
                
                {/* Expanded content */}
                {expandedCard === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="font-semibold mb-3 text-gray-900">Deliverables:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {milestone.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: 'var(--color-primary-light)' }} />
                            <span className="text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {milestone.link && (
                        <div className="mt-6">
                          <Link 
                            href={milestone.link}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white transition-transform hover:scale-105"
                            style={{ backgroundColor: 'var(--color-primary)' }}
                          >
                            <FileText className="h-4 w-4" />
                            View Documentation
                          </Link>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
````

## File: src/app/layout.tsx
````typescript
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BetelCare Research",
  description: "AI-Powered App for Sri Lankan Betel Farmers",
  icons: [
    { rel: "icon", url: "/leaf.png" },
    { rel: "shortcut icon", url: "/leaf.png" },
    { rel: "apple-touch-icon", url: "/leaf.png" }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* This is a fallback in case the metadata approach doesn't work */}
        <link rel="icon" href="/leaf.png" />
        <link rel="shortcut icon" href="/leaf.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
````

## File: src/app/page.tsx
````typescript
// src/app/page.tsx
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import AboutSection from "@/components/AboutSection";
import VideoSection from "@/components/VideoSection";
import DomainSection from "@/components/DomainSection";
import FeaturesSection from "@/components/FeaturesSection";
import MilestonesSection from "@/components/MilestonesSection";
import ResearchResultsSection from "@/components/ResearchResultsSection";
import DocumentsSection from "@/components/DocumentsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="home">
        <Banner />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="video">
        <VideoSection />
      </div>
      <div id="domain">
        <DomainSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="milestones">
        <MilestonesSection />
      </div>
      <div id="results">
        <ResearchResultsSection />
      </div>
      <div id="documents">
        <DocumentsSection />
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
````

## File: src/components/Header.tsx
````typescript
// src/components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ChevronDown, Leaf, BarChart, Cloud, ShoppingCart, FileText, Users, Home, Info, CalendarDays, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { usePathname } from "next/navigation";

// Streamlined navigation structure with fewer top-level items
const navItems = [
  { name: "Home", href: "/#home", icon: <Home className="w-4 h-4" /> },
  { 
    name: "About",
    href: "#",
    icon: <Info className="w-4 h-4" />,
    submenu: [
      { name: "About Project", href: "/#about", icon: <Info className="w-4 h-4" /> },
      { name: "App Demo", href: "/#video", icon: <Play className="w-4 h-4" /> },
      { name: "Domain", href: "/#domain", icon: <FileText className="w-4 h-4" /> },
      { name: "Team", href: "/#team", icon: <Users className="w-4 h-4" /> }
    ]
  },
  { 
    name: "Research", 
    href: "#",
    icon: <Leaf className="w-4 h-4" />,
    submenu: [
      { name: "Features", href: "/#features", icon: <Leaf className="w-4 h-4" /> },
      { name: "Milestones", href: "/#milestones", icon: <CalendarDays className="w-4 h-4" /> },
      { name: "Results", href: "/#results", icon: <BarChart className="w-4 h-4" /> },
      { name: "Documents", href: "/#documents", icon: <FileText className="w-4 h-4" /> },
      
    ]
  },
  { 
    name: "Project Modules", 
    href: "#",
    icon: <Cloud className="w-4 h-4" />,
    submenu: [
      { name: "Disease Detection", href: "/project/disease-detection", icon: <Leaf className="w-4 h-4" /> },
      { name: "Harvest Prediction", href: "/project/harvest-prediction", icon: <BarChart className="w-4 h-4" /> },
      { name: "Market Prediction", href: "/project/market-prediction", icon: <ShoppingCart className="w-4 h-4" /> },
      { name: "Weather Recommendations", href: "/project/weather-recommendations", icon: <Cloud className="w-4 h-4" /> }
    ]
  },
  { name: "Contact", href: "/#contact", icon: <Users className="w-4 h-4" /> }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on the home page
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      
      // Close mobile menu if open
      setSheetOpen(false);
      
      // If we're not on the home page, navigate to home page first
      if (!isHomePage) {
        window.location.href = href;
        return;
      }
      
      // If we're already on the home page, just scroll to the element
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3" 
          : isHomePage ? "bg-transparent py-6" : "bg-white/95 backdrop-blur-md shadow-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link 
              href="/" 
              onClick={(e) => scrollToSection(e, '/')}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                <span style={{ color: scrolled || !isHomePage ? 'var(--color-primary-dark)' : 'white' }}>Betel</span>
                <span style={{ color: 'var(--color-accent)' }}>Care</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div 
                key={item.name} 
                className="relative flex items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.submenu ? (
                  <div 
                    className="group flex items-center"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button 
                      className="flex items-center hover:text-primary-light transition-colors font-medium"
                      style={{ color: scrolled || !isHomePage ? 'var(--color-foreground)' : 'white' }}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-full mt-1 w-60 rounded-xl overflow-hidden shadow-xl bg-white ring-1 ring-black/5 z-20"
                        >
                          <div className="py-1">
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                onClick={(e) => scrollToSection(e, subitem.href)}
                                className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 border-l-2 border-transparent hover:border-primary transition-all"
                                style={{ color: 'var(--color-foreground)' }}
                              >
                                <div className="p-1 rounded-md" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                                  {subitem.icon}
                                </div>
                                {subitem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="relative hover:text-primary-light transition-colors font-medium group"
                    style={{ color: scrolled || !isHomePage ? 'var(--color-foreground)' : 'white' }}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-light transition-all group-hover:w-full"></span>
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Mobile menu button with Sheet */}
          <div className="md:hidden flex items-center">
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                  style={{ color: scrolled || !isHomePage ? 'var(--color-primary-dark)' : 'white' }}
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </motion.button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85%] max-w-md p-0">
                {/* Adding the required SheetTitle for accessibility */}
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                        <Leaf className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-2xl font-bold tracking-tight">
                        <span style={{ color: 'var(--color-primary-dark)' }}>Betel</span>
                        <span style={{ color: 'var(--color-accent)' }}>Care</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-auto py-4 px-2">
                    <nav className="space-y-1">
                      {navItems.map((item) => (
                        <div key={item.name} className="py-1">
                          {item.submenu ? (
                            <Accordion type="single" collapsible className="border-none">
                              <AccordionItem value={item.name} className="border-none">
                                <AccordionTrigger className="py-3 px-4 hover:bg-gray-50 rounded-lg no-underline">
                                  <div className="flex items-center">
                                    <div className="p-1 rounded-md mr-2" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                                      {item.icon}
                                    </div>
                                    <span className="text-base font-medium" style={{ color: 'var(--color-foreground)' }}>{item.name}</span>
                                  </div>
                                </AccordionTrigger>
                                <AccordionContent className="pt-1 pb-3 px-2">
                                  <div className="flex flex-col space-y-1 ml-2">
                                    {item.submenu.map((subitem) => (
                                      <Link
                                        key={subitem.name}
                                        href={subitem.href}
                                        onClick={(e) => scrollToSection(e, subitem.href)}
                                        className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 rounded-lg border-l-2 border-transparent hover:border-primary-light transition-all"
                                        style={{ color: 'var(--color-foreground)' }}
                                      >
                                        <div className="p-1 rounded-md" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                                          {subitem.icon}
                                        </div>
                                        {subitem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={(e) => scrollToSection(e, item.href)}
                              className="flex items-center gap-3 px-4 py-3 text-base font-medium hover:text-primary-light hover:bg-gray-50 rounded-lg transition-colors"
                              style={{ color: 'var(--color-foreground)' }}
                            >
                              <div className="p-1 rounded-md" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                                {item.icon}
                              </div>
                              {item.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </nav>
                  </div>
                  
                  <div className="p-6 border-t mt-auto">
                    <Link
                      href="/#contact"
                      onClick={(e) => scrollToSection(e, '/#contact')}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-medium text-white"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
````
