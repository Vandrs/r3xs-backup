# Guia de Testes

## Visão Geral

Este projeto segue a metodologia **Test-Driven Development (TDD)**. Os testes são escritos antes da implementação e servem como especificação executável do comportamento esperado.

## Estrutura de Testes

```
tests/
├── unit/              # Testes unitários (funções isoladas)
│   ├── fileScanner.test.js
│   ├── fileCopier.test.js
│   └── conflictResolver.test.js
└── integration/       # Testes de integração (fluxo completo)
    └── backup.test.js
```

## Executar Testes

```bash
# Todos os testes
npm test

# Modo watch (desenvolvimento)
npm run test:watch

# Com cobertura
npm run test:coverage

# Apenas um arquivo
npm test -- fileScanner.test.js

# Com verbose
npm test -- --verbose
```

## Convenções de Testes

### Estrutura AAA (Arrange-Act-Assert)

```javascript
test('deve fazer algo', async () => {
  // Arrange: preparar dados
  const input = 'foo';
  
  // Act: executar ação
  const result = await minhaFuncao(input);
  
  // Assert: verificar resultado
  expect(result).toBe('bar');
});
```

### Nomenclatura

- Descrever comportamento, não implementação
- Usar "deve" no início: `deve copiar arquivo quando não existir`
- Ser específico: ✅ `deve filtrar .state` ❌ `funciona`

### Dados de Teste

- Usar diretórios temporários (`os.tmpdir()`)
- Limpar após cada teste (`afterEach`)
- Nunca depender de arquivos reais do sistema

## Cobertura de Testes

### Metas

| Tipo | Cobertura Mínima |
|------|------------------|
| Serviços | 90% |
| Comandos | 80% |
| Utils | 95% |

### Verificar Cobertura

```bash
npm run test:coverage
```

Abre relatório em `coverage/lcov-report/index.html`

## Testes Unitários

### fileScanner.test.js

Testa busca de arquivos:
- ✅ Busca recursiva
- ✅ Filtro por modo (full vs saves-only)
- ✅ Case-insensitive
- ✅ Diretórios vazios/inexistentes

### conflictResolver.test.js

Testa estratégias de conflito:
- ✅ Overwrite (sempre copia)
- ✅ Skip (nunca copia se existe)
- ✅ Newer (copia se mais recente)

### fileCopier.test.js

Testa cópia de arquivos:
- ✅ Preserva estrutura de diretórios
- ✅ Respeita estratégias
- ✅ Conta sucessos/falhas/pulados
- ✅ Cria diretórios intermediários

## Testes de Integração

### backup.test.js

Testa fluxo completo:
- ✅ Backup full de estrutura ArkOS
- ✅ Backup saves-only
- ✅ Verificação de arquivos copiados

## Mocks e Stubs

Evitamos mocks excessivos. Preferimos:
- **Testes unitários**: Filesystem real em temp dir
- **Testes de integração**: Estrutura completa simulada

Quando mockar:
```javascript
// Mockar console para testes silenciosos
const originalLog = console.log;
console.log = jest.fn();

// Executar teste...

// Restaurar
console.log = originalLog;
```

## Debugging de Testes

### Rodar teste isolado

```bash
npm test -- -t "deve copiar arquivo"
```

### Adicionar breakpoint

```javascript
test('debug test', async () => {
  debugger; // Pausar aqui
  const result = await minhaFuncao();
  expect(result).toBe('foo');
});
```

Executar com Node inspector:
```bash
node --inspect-brk node_modules/.bin/jest --runInBand
```

## CI/CD

Os testes rodam automaticamente no CI antes de merge. Nenhum PR pode ser mergeado com testes falhando.

## Adicionando Novos Testes

1. **Criar teste** (TDD: teste primeiro!)
2. **Ver falhar** (red)
3. **Implementar** código mínimo
4. **Ver passar** (green)
5. **Refatorar** (refactor)
6. Repetir

Exemplo:
```bash
# 1. Criar teste
vim tests/unit/minhaFeature.test.js

# 2. Ver falhar
npm test

# 3. Implementar
vim src/services/minhaFeature.js

# 4. Ver passar
npm test

# 5. Refatorar e garantir que continua passando
npm run test:watch
```

## Troubleshooting

### Testes pendurando

- Verificar se há `await` faltando
- Usar `jest.setTimeout(10000)` para testes lentos
- Verificar se cleanup (`afterEach`) está rodando

### Testes flaky (instáveis)

- Evitar `setTimeout` nos testes
- Usar `await` em vez de callbacks
- Garantir isolamento entre testes

### Coverage baixa

```bash
# Ver o que não está coberto
npm run test:coverage
open coverage/lcov-report/index.html
```

## Recursos

- [Jest Documentation](https://jestjs.io/)
- [Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)
