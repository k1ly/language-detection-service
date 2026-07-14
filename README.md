# Language Detection Service

A service for detecting languages of post content and storing them as metadata. It supports processing posts from either a PostgreSQL database or JSON files.

## Features

- Detects languages of post content.
- Preprocesses Markdown before language detection.
- Processes posts in batches from PostgreSQL.
- Supports processing local JSON files.
- Returns ISO 639-1 language codes.
- Uses confidence thresholds and additional heuristics to improve detection accuracy.

## Requirements

- Node.js 22+
- npm

## Installation

```bash
npm install
```

## Development

Run the service in development mode:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Run the compiled application:

```bash
npm start
```

## Project Structure

```text
src/
├── database/          # PostgreSQL helpers
├── language/          # Language detection
├── posts/             # Post processing
└── main.ts            # Application entry point
```

## Language Detection

The service determines a list of languages for each post and returns them as ISO 639-1 language codes.

Example:

```json
{
  "body": "Bonjour tout le monde",
  "languages": ["fr"]
}
```

## Processing Modes

### PostgreSQL

Reads posts in batches, detects their languages, and updates the `languages` column.

### JSON

Reads posts from a JSON file, detects their languages, and writes the results back to the file.

## Technologies

- TypeScript
- tinyld
- PostgreSQL
