import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  // Provide the path to the app to load next.config.ts and .env files in test environment
  dir: "./",
});

const customJestConfig: Config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    // Handling module aliases
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
    "^@/state/(.*)$": "<rootDir>/state/$1",
    "^@/types/(.*)$": "<rootDir>/types/$1",
    "^@/theme/(.*)$": "<rootDir>/theme/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
};

export default createJestConfig(customJestConfig);
