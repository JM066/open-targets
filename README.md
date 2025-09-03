# Open Targets - Lung Carcinoma Associated Targets

A React application built with TypeScript and Vite that displays genes associated with lung carcinoma using the Open Targets GraphQL API.

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1 with TypeScript 5.8.3
- **Build Tool**: Vite 7.1.2
- **Styling**: TailwindCSS 4.1.12
- **Data Fetching**: TanStack React Query 5.85.5 with GraphQL Request
- **Charts**: Recharts 3.1.2
- **Testing**: Vitest 3.2.4, React Testing Library, MSW 2.11.1
- **Code Quality**: ESLint, Prettier, Husky

## 🔧 Installation

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run application**
   ```bash
   npm run dev
   ```

### Development

```bash
npm run dev          # Start development server
npm run preview      # Preview production build locally
```

### Building

```bash
npm run build        # Build for production
npm start           # Start production server (used by Heroku)
```

### Testing

```bash
npm test            # Run tests in watch mode
npm run test:run    # Run tests once
npm run test:ui     # Run tests with UI interface
```

### Code Quality

```bash
npm run lint        # Run ESLint
npm run format      # Format code with Prettier
```

### GraphQL

```bash
npm run codegen           # Generate TypeScript types from GraphQL schema
npm run codegen:watch     # Watch for schema changes and regenerate types
```

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── LungCarcinomaTargets/   # Main data display component
│   ├── TargetTable/           # Individual target row component
│   ├── TargetBarChart/        # Data visualization components
│   ├── TargetRadarChart/
│   ├── ErrorFallback/         # Error boundary component
│   └── UI Components/         # Reusable UI components (Button, Text, etc.)
├── hooks/               # Custom React hooks
│   ├── api/            # API-specific hooks
│   └── tanstack/       # TanStack Query hooks
├── graphql/            # GraphQL schema and generated types
├── helpers/            # Utility functions
├── test/               # Testing utilities and mocks
│   ├── mocks/         # MSW handlers for API mocking
│   └── utils.tsx      # Testing utilities and wrappers
└── types/             # TypeScript type definitions
```

## 🧪 Testing Strategy

The project uses a comprehensive testing approach:

- **Unit Tests**: Component-level testing with React Testing Library
- **Integration Tests**: API integration testing with Mock Service Worker (MSW)
- **Error Handling**: Testing for network errors, empty states, and GraphQL errors
- **User Interactions**: Testing user workflows and chart interactions

### Test Examples

```bash
# Run specific test file
npm test -- src/components/LungCarcinomaTargets/index.test.tsx

# Run tests with coverage
npm test -- --coverage

# Run tests in UI mode
npm run test:ui
```

## 🌐 API Integration

The application integrates with the Open Targets GraphQL API to fetch lung carcinoma associated targets. Key features:

- **Query**: `lungCarcinomaAssociatedTargets` - Fetches targets with association scores
- **Data Types**: Literature evidence, known drugs, genetic associations
- **Sorting**: Results sorted by overall association score (descending)
- **Error Handling**: Network errors, GraphQL errors, and empty states

## 📊 Data Visualization

Interactive charts powered by Recharts:

- **Bar Charts**: Display data type scores for individual targets
- **Expandable Interface**: Click to expand target details and view charts
- **Responsive Design**: Charts adapt to different screen sizes

## 🚀 Deployment

The application is configured for Heroku deployment:

- **Build Command**: `npm run build`
- **Start Command**: `npx serve dist -s`
- **Static Files**: Served from the `dist` directory

### Environment Setup

API_URL: Open Targets GraphQL API Endpoint

### Deployment
