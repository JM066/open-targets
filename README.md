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

### Environment Setup

VITE_API_URL: Open Targets GraphQL API Endpoint

### Deployment

https://open-targets-8f848d3da948.herokuapp.com/

### GraphQL

```bash
npm run codegen  # Generate TypeScript types from GraphQL
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
├── api-hooks/               # API-specific hooks
├── graphql/            # GraphQL schema and generated types
├── helpers/            # Utility functions
├── test/               # Testing utilities and mocks
│   ├── mocks/         # MSW handlers for API mocking
│   ├── setup.ts       # Test environment setup
│   └── utils.tsx      # Testing utilities and wrappers
└── types/             # TypeScript type definitions
```

## 🧪 Testing Strategy

The project uses a comprehensive testing approach:

- **Integration Tests**: API integration testing with Mock Service Worker (MSW)
- **Error Handling**: Testing for network errors, empty states, and GraphQL errors
- **User Interactions**: Testing user workflows and chart interactions
