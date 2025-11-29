# StoryLine Repository Summary

## Overview
StoryLine is a Next.js application designed to visualize a timeline of historical figures. It uses Tailwind CSS for styling and TypeScript for type safety.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint

## Project Structure
- `src/app`: Contains the application routes and pages.
  - `page.tsx`: The main entry point, rendering the `GridTimeLine` component.
  - `layout.tsx`: Defines the root layout.
- `src/components`: Contains React components.
  - `Header.tsx`: The application header with search functionality.
  - `client/Search.tsx`: Client-side component for searching Wikipedia for people.
  - `core/`: Core components like `GridTimeLine` (inferred from usage).
- `src/global`: Global utilities and types.
  - `types.ts`: TypeScript interfaces for `Person` and Wikipedia API responses.
  - `util.ts`: Utility functions (e.g., `getBirthYearFromDescription`).

## Key Features
- **Timeline Visualization**: Displays a grid-based timeline of people.
- **Search**: Allows users to search for people via the Wikipedia API.
- **Data Model**: `Person` interface tracks birth/death years, description, and image.

## Recent Changes
- Fixed a TypeScript build error in `src/components/client/Search.tsx` where type narrowing was incorrect for filtered results.
