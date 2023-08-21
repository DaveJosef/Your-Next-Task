import nextJest from 'next/jest.js'

// Caminho para o App NextJS carregar o arquivo de configuração (next.config.js) e o arquivo .env no contexto de testes
const createJestConfig = nextJest({
  dir: './',
});

// Adiciona configurações adicionais ao Jest
/** @type {import('jest').Config} */
const config = {
  // Adiciona mais configurações para cada teste
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Module aliases
    '@/Components/(.*)$': '<rootDir>/Components/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};

// exportação que garante que Next/Jest carreguem a configuração do Next, que é assíncrona
export default createJestConfig(config);