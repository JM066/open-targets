import '@testing-library/jest-dom';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from './mocks/server';

// Establish API mocking
beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

// Clean up
afterAll(() => server.close());

export {};
