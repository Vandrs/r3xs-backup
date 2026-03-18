# Começando

Guia rápido para começar a usar e desenvolver o R3XS Backups.

## 🚀 Quick Start (Uso)

### 1. Instalar Dependências

```bash
npm install
```

### 2. Rodar em Modo Dev

```bash
npm start -- --source ./test-source --dest ./test-backup --full
```

### 3. Instalar Globalmente

```bash
npm link
r3xs-backup --help
```

## 🧪 Desenvolvimento com TDD

### 1. Rodar Testes

```bash
# Todos os testes
npm test

# Modo watch (recomendado durante desenvolvimento)
npm run test:watch

# Com cobertura
npm run test:coverage
```

### 2. Adicionar Nova Feature (exemplo)

```bash
# 1. Criar teste primeiro
vim tests/unit/compressor.test.js

# 2. Implementar
vim src/services/compressor.js

# 3. Ver testes passarem
npm test
```

## 📂 Estrutura do Projeto

```
r3xs-backup/
├── src/                   # Código-fonte
│   ├── index.js          # Entry point CLI
│   ├── commands/         # Comandos do Commander
│   ├── services/         # Lógica de negócio
│   └── utils/            # Utilidades
├── tests/                # Testes
│   ├── unit/            # Testes unitários
│   └── integration/     # Testes de integração
├── devdocs/             # Documentação técnica
│   ├── PROJECT_STRUCTURE.md
│   ├── ADR-*.md         # Architecture Decision Records
│   ├── TESTING.md
│   ├── ROADMAP.md
│   └── CONTRIBUTING.md
├── README.md            # Documentação de uso
└── package.json
```

## 📚 Documentação

### Para Usuários
- [README.md](./README.md) - Como usar o CLI

### Para Desenvolvedores
- [PROJECT_STRUCTURE.md](./devdocs/PROJECT_STRUCTURE.md) - Arquitetura
- [TESTING.md](./devdocs/TESTING.md) - Guia de testes
- [CONTRIBUTING.md](./devdocs/CONTRIBUTING.md) - Como contribuir
- [ROADMAP.md](./devdocs/ROADMAP.md) - Plano futuro
- [ADR-001](./devdocs/ADR-001-tech-stack.md) - Decisão de tech stack
- [ADR-002](./devdocs/ADR-002-file-filtering-strategy.md) - Estratégia de filtros

## 🎯 Próximos Passos

### Testar o CLI

1. **Criar dados de teste:**
```bash
mkdir -p test-easyroms/nes
mkdir -p test-easyroms/snes
echo "rom content" > test-easyroms/nes/mario.nes
echo "save content" > test-easyroms/nes/mario.nes.state
echo "rom content" > test-easyroms/snes/zelda.smc
```

2. **Testar backup full:**
```bash
node src/index.js --source ./test-easyroms --dest ./backup-full --full
ls -R backup-full
```

3. **Testar backup saves-only:**
```bash
node src/index.js --source ./test-easyroms --dest ./backup-saves --saves-only
ls -R backup-saves
```

4. **Testar estratégia de conflito:**
```bash
# Executar backup novamente
node src/index.js --source ./test-easyroms --dest ./backup-full --full --conflict skip
```

### Validar Testes

```bash
# Rodar todos os testes
npm test

# Verificar cobertura
npm run test:coverage
open coverage/lcov-report/index.html
```

### Publicar NPM (quando pronto)

```bash
# Fazer login
npm login

# Publicar
npm publish
```

## 🐛 Troubleshooting

### Testes falhando

```bash
# Limpar cache do Jest
npm test -- --clearCache

# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

### Permissões de execução

```bash
chmod +x src/index.js
```

### Node.js versão

Certifique-se de estar usando Node.js >= 16:
```bash
node --version
```

## 🔗 Links Úteis

- [Commander.js Docs](https://github.com/tj/commander.js)
- [Jest Docs](https://jestjs.io/)
- [fs-extra Docs](https://github.com/jprichardson/node-fs-extra)

## 💡 Dicas

- Use `npm run test:watch` durante desenvolvimento
- Sempre escreva testes antes do código (TDD)
- Consulte os ADRs antes de grandes mudanças
- Siga o guia de contribuição

---

**Dúvidas?** Abra uma issue no GitHub!
