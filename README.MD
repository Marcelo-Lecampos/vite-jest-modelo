# Passos para rodar Jest no vite:

1️⃣ Instalar o Jest através do link: https://www.npmjs.com/package/jest

2️⃣ Adicionar ao package.json:

```bash
  "scripts": {
    "test": "jest"
  }
```

3️⃣ Instalar:

a. npm install jest -D
b. npm install @testing-library/jest-dom @testing-library/react @testinglibrary/user-event -D
c. npm install @babel/core @babel/preset-env @babel/preset-react babel-jest identity-obj-proxy jest-environment-jsdom -D


4️⃣ Criar arquivo na raiz: jest.config.js e colocar o código abaixo:

```bash
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/mocks/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
}
```

Passos para rodar Jest no Vite:

1️⃣ Instalar o Jest através do link: https://www.npmjs.com/package/jest

2️⃣ Adicionar ao package.json:

bash

  "scripts": {
    "test": "jest"
  }

3️⃣ Instalar:

a. npm install jest -D
b. npm install @testing-library/jest-dom @testing-library/react @testinglibrary/user-event -D
c. npm install @babel/core @babel/preset-env @babel/preset-react babel-jest identity-obj-proxy jest-environment-jsdom -D

4️⃣ Criar arquivo na raiz: jest.config.js e colocar o código abaixo:

bash

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/mocks/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
}

5️⃣ Criar uma pasta chamada .jest na raiz:

a. Criar um arquivo chamado setup-tests.js e colocar o código abaixo:

```bash
import '@testing-library/jest-dom'
```
b. Criar uma pasta dentro de .jest com nome mocks e criar um arquivo chamado fileMock.js e colocar o código abaixo:

```bash
module.exports = "test-file-stub"
```

6️⃣ criar na raiz: babel.config.json e colocar o código abaixo:

```bash
{
  "presets": [
    ["@babel/preset-env", { "targets": { "esmodules": true } }],
    ["@babel/preset-react", { "runtime": "automatic" }]
  ]
}
```

7️⃣ No package.json trocar type para commonjs:

```bash
 "type": "commonjs",
```

Pronto, agora só usar o comando npm run test para rodar os testes. ✅
