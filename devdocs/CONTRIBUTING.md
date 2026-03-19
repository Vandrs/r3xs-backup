# Guia de Contribuição

Obrigado por considerar contribuir com o R3XS Backups! 🎮

## Como Contribuir

### 1. Fork e Clone

```bash
git clone https://github.com/seu-usuario/r3xs-backup.git
cd r3xs-backup
npm install
```

### 2. Crie uma Branch

```bash
git checkout -b feature/minha-feature
# ou
git checkout -b fix/meu-bugfix
```

### 3. Desenvolvimento com TDD

Sempre siga Test-Driven Development:

```bash
# 1. Escrever teste primeiro
vim tests/unit/minhaFeature.test.js

# 2. Rodar teste (deve falhar)
npm test

# 3. Implementar código mínimo
vim src/services/minhaFeature.js

# 4. Rodar teste (deve passar)
npm test

# 5. Refatorar
npm run test:watch
```

### 4. Commit

Use commits semânticos:

```bash
git commit -m "feat: adiciona backup incremental"
git commit -m "fix: corrige filtro de extensões case-sensitive"
git commit -m "docs: atualiza README com exemplos"
git commit -m "test: adiciona testes para modo compress"
```

Tipos de commit:
- `feat`: Nova feature
- `fix`: Bug fix
- `docs`: Documentação
- `test`: Testes
- `refactor`: Refatoração
- `style`: Formatação
- `chore`: Tarefas de manutenção

### 5. Push e Pull Request

```bash
git push origin feature/minha-feature
```

Abra um PR no GitHub com:
- Descrição clara do que foi feito
- Screenshots (se aplicável)
- Checklist de testes rodados

## Checklist do PR

- [ ] Código segue o style guide
- [ ] Todos os testes passam (`npm test`)
- [ ] Cobertura de testes adequada (`npm run test:coverage`)
- [ ] Documentação atualizada
- [ ] Commits seguem padrão semântico
- [ ] Nenhum console.log/debugger esquecido
- [ ] README atualizado (se necessário)

## Style Guide

### JavaScript

- **ES6+**: Usar const/let, arrow functions, async/await
- **Naming**: camelCase para variáveis/funções, PascalCase para classes
- **Indentação**: 2 espaços
- **Strings**: Single quotes (`'`) exceto JSX
- **Semicolons**: Sim

Exemplo:
```javascript
// ✅ Bom
async function copyFile(source, dest) {
  const content = await fs.readFile(source, 'utf8');
  await fs.writeFile(dest, content);
}

// ❌ Ruim
function copyFile(source, dest, callback) {
  fs.readFile(source, function(err, content) {
    if (err) throw err;
    fs.writeFile(dest, content, callback);
  });
}
```

### Estrutura de Arquivos

- Um módulo por arquivo
- Exports no final do arquivo
- Imports no topo, agrupados (externos → internos)

```javascript
// Externos
const fs = require('fs-extra');
const path = require('path');

// Internos
const { scanFiles } = require('./fileScanner');
const { validatePaths } = require('../utils/validators');

// ... código ...

module.exports = {
  backupCommand,
};
```

### Testes

- Um arquivo de teste por módulo
- Describe para agrupamento lógico
- Test names descritivos

```javascript
describe('FileScanner', () => {
  describe('scanFiles - modo full', () => {
    test('deve encontrar todos os arquivos recursivamente', async () => {
      // ...
    });
  });
});
```

## Reportando Bugs

Use o template de issue no GitHub:

- **Título claro**: "Erro ao copiar arquivos com acentos"
- **Passos para reproduzir**:
  1. Executar `r3xs-backup --source /path --dest /dest --full`
  2. Ver erro X
- **Comportamento esperado**: Deveria copiar
- **Comportamento atual**: Lança erro
- **Sistema**: Linux Ubuntu 22.04, Node 18.0.0
- **Logs**: (anexar se possível)

## Sugerindo Features

Abra uma issue de feature request com:

- **Problema**: Descrever o problema atual
- **Solução proposta**: Sua ideia de solução
- **Alternativas**: Outras abordagens consideradas
- **Contexto adicional**: Screenshots, exemplos

## Prioridades

### Alta Prioridade
- Bugs críticos (perda de dados, crashes)
- Problemas de segurança
- Testes falhando

### Média Prioridade
- Novas features importantes
- Melhorias de performance
- Refatorações

### Baixa Prioridade
- Melhorias de documentação
- Features "nice-to-have"
- Otimizações menores

## 📦 Publicação NPM (Maintainers)

### Preparação
```bash
# 1. Garantir qualidade
npm test
npm run test:coverage  # Mínimo 80%

# 2. Atualizar versão (semver)
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.1 -> 1.1.0
npm version major  # 1.1.0 -> 2.0.0

# 3. Validar pacote
npm publish --dry-run
```

### Publicar
```bash
npm login
npm publish
git push --tags
```

Veja [ROADMAP.md](./ROADMAP.md) para planos futuros.

---

## Perguntas?

- Abra uma issue com label "question"
- Entre em contato com os maintainers

Obrigado por contribuir! 🚀
