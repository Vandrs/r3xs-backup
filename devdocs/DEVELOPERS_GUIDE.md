# Guia do Desenvolvedor

Guia prático para desenvolvimento diário do R3XS Backups.

> **📚 Docs Especializados:** [Workflow TDD completo →TESTING.md](./TESTING.md) | [Estrutura e Métricas →PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) | [Guia de Contribuição →CONTRIBUTING.md](./CONTRIBUTING.md)

---

## 🚀 Quick Start

### Instalação e Primeiro Uso

```bash
# 1. Instalar dependências
npm install

# 2. Testar instalação
npm test

# 3. Instalar globalmente
npm link

# 4. Usar o comando
r3xs-backup --help
```

### Primeiro Backup

```bash
# Criar dados de teste
mkdir -p test-easyroms/nes test-easyroms/snes
echo "mario rom" > test-easyroms/nes/mario.nes
echo "mario save" > test-easyroms/nes/mario.nes.state
echo "zelda rom" > test-easyroms/snes/zelda.smc

# Backup completo
r3xs-backup --source ./test-easyroms --dest ./backup-full --full

# Backup apenas saves
r3xs-backup --source ./test-easyroms --dest ./backup-saves --saves-only

# Com estratégia de conflito
r3xs-backup --source ./test-easyroms --dest ./backup --full --conflict skip
```

---

## 💻 Comandos Essenciais

| Categoria | Comando | Descrição |
|-----------|---------|-----------|
| **Testes** | `npm test` | Todos os testes |
| | `npm run test:watch` | Modo watch (recomendado!) |
| | `npm test -- fileScanner.test.js` | Teste específico |
| | `npm test -- -t "nome do teste"` | Teste por nome |
| | `npm run test:coverage` | Cobertura de testes |
| **CLI Local** | `node src/index.js --help` | Ver ajuda |
| | `node src/index.js --version` | Ver versão |
| | `npm start -- --source ./test --dest ./backup --full` | Executar com npm start |
| **Global** | `npm link` | Instalar globalmente |
| | `r3xs-backup --source /media/sdcard --dest ~/backup --full` | Usar como comando global |
| | `npm unlink` | Remover link global |
| **Limpeza** | `rm -rf node_modules package-lock.json && npm install` | Reinstalar dependências |
| | `npm test -- --clearCache` | Limpar cache do Jest |
| | `rm -rf coverage` | Limpar relatórios |

---

## 📝 Git Workflow

### Tipos de Commit (Conventional Commits)

```bash
feat:     nova funcionalidade
fix:      correção de bug
docs:     documentação
test:     testes
refactor: refatoração de código
chore:    tarefas de manutenção
```

### Fluxo Básico

```bash
# 1. Criar branch
git checkout -b feature/minha-feature

# 2. Desenvolver com TDD (ver TESTING.md)
npm run test:watch  # Manter rodando

# 3. Commits frequentes
git add .
git commit -m "feat: implementa minha feature"

# 4. Push e PR
git push origin feature/minha-feature
# Abrir Pull Request no GitHub
```

---

## 🔍 Debug e Troubleshooting

### Debug de Testes

```bash
npm test -- --verbose                                   # Verbose
npm test -- --clearCache                                # Limpar cache
node --inspect-brk node_modules/.bin/jest --runInBand  # Node.js debugger
npm test -- --runInBand --no-cache fileScanner.test.js # Teste isolado
```

### Problemas Comuns

| Problema | Solução |
|----------|---------|
| **Testes não rodam** | `npm test -- --clearCache && rm -rf node_modules && npm install` |
| **CLI não executa** | `chmod +x src/index.js && node src/index.js --help` |
| **Permissão negada (npm link)** | `sudo npm link` ou use nvm para evitar sudo |
| **Cobertura não abre** | Linux: `xdg-open coverage/lcov-report/index.html`<br>macOS: `open coverage/...`<br>Windows: `start coverage/...` |
| **Node.js versão errada** | `node --version` (>= 16.0.0) → `nvm install 16 && nvm use 16` |
| **Testes falham só no CI** | `npm test -- --runInBand --coverage --verbose` (simula CI) |
| **Mock não funciona** | `jest.clearAllMocks()` e `jest.resetModules()` no `beforeEach()` |

---

## 🧹 Limpeza e Manutenção

```bash
# Reinstalar dependências
rm -rf node_modules package-lock.json && npm install

# Limpar arquivos de teste
rm -rf backup-* test-easyroms coverage

# Limpar cache do Jest
npm test -- --clearCache

# Limpeza completa
rm -rf node_modules coverage backup-* test-easyroms && npm install
```

---

## 💡 Dicas e Boas Práticas

### Durante Desenvolvimento
- ✅ Mantenha `npm run test:watch` rodando
- ✅ Escreva testes antes do código (TDD)
- ✅ Commits pequenos e frequentes
- ✅ Use mensagens de commit semânticas

### Antes de Commit
- ✅ Rode `npm test` para garantir que tudo passa
- ✅ Verifique se não há console.log esquecido
- ✅ Certifique-se de que o código está formatado

### Antes de Pull Request
- ✅ Rode `npm run test:coverage` (mínimo 80%)
- ✅ Atualize documentação se necessário
- ✅ Teste manualmente o CLI
- ✅ Leia o guia de contribuição (CONTRIBUTING.md)

---

## 🔗 Documentação Relacionada

### Para Usuários
- [README.md](../README.md) - Como usar o CLI

### Para Desenvolvedores
- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Arquitetura e métricas
- [TESTING.md](./TESTING.md) - Guia completo de testes e TDD
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Como contribuir e publicar
- [ROADMAP.md](./ROADMAP.md) - Plano de evolução
- [ADR-001](./adrs/ADR-001-tech-stack.md) - Decisão de tech stack
- [ADR-002](./adrs/ADR-002-file-filtering-strategy.md) - Estratégia de filtros
- [INDEX.md](./INDEX.md) - Índice completo da documentação

### Links Externos Úteis
- [Commander.js](https://github.com/tj/commander.js) - Framework CLI
- [Jest](https://jestjs.io/) - Framework de testes
- [fs-extra](https://github.com/jprichardson/node-fs-extra) - Operações de filesystem
- [Conventional Commits](https://www.conventionalcommits.org/) - Padrão de commits

---

**Dúvidas?** Abra uma issue no GitHub!

**Última Atualização:** 19/03/2026
