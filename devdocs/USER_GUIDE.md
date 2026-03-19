# Guia do Usuário e Desenvolvedor

Guia completo para usar e desenvolver o R3XS Backups.

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

### Testes

```bash
# Todos os testes
npm test

# Modo watch (recomendado durante desenvolvimento!)
npm run test:watch

# Teste específico
npm test -- fileScanner.test.js

# Teste por nome
npm test -- -t "deve copiar arquivo"

# Cobertura
npm run test:coverage

# Ver relatório HTML
npm run test:coverage && xdg-open coverage/lcov-report/index.html
```

### CLI Local

```bash
# Executar sem instalar globalmente
node src/index.js --source ./test --dest ./backup --full

# Com npm start
npm start -- --source ./test --dest ./backup --full

# Ver ajuda
node src/index.js --help

# Ver versão
node src/index.js --version
```

### Instalação Global

```bash
# Criar link simbólico
npm link

# Usar como comando global
r3xs-backup --source /media/sdcard --dest ~/backup --full

# Remover link
npm unlink
```

---

## 🧪 Desenvolvimento com TDD

### Workflow TDD (Red-Green-Refactor)

```bash
# 1. Criar branch
git checkout -b feature/minha-feature

# 2. RED: Escrever teste que falha
vim tests/unit/minhaFeature.test.js
npm test  # Deve falhar

# 3. GREEN: Implementar código mínimo
vim src/services/minhaFeature.js
npm test  # Deve passar

# 4. REFACTOR: Melhorar código
npm run test:watch  # Manter rodando
# Editar e ver testes passarem em real-time

# 5. Commit
git add .
git commit -m "feat: adiciona minha feature"
```

### Adicionar Nova Feature

```bash
# Exemplo: Adicionar compressor

# 1. Criar teste
echo 'describe("Compressor", () => {
  test("deve comprimir arquivos", () => {
    // Arrange, Act, Assert
  });
});' > tests/unit/compressor.test.js

# 2. Rodar testes (deve falhar)
npm test

# 3. Implementar serviço
vim src/services/compressor.js

# 4. Ver testes passarem
npm test
```

---

## 📝 Git Workflow

### Commits Semânticos

```bash
# Tipos de commit
git commit -m "feat: adiciona backup incremental"
git commit -m "fix: corrige filtro case-sensitive"
git commit -m "docs: atualiza README"
git commit -m "test: adiciona teste para compressor"
git commit -m "refactor: melhora performance do scanner"
git commit -m "chore: atualiza dependências"
```

### Fluxo de Trabalho

```bash
# 1. Criar branch
git checkout -b feature/backup-incremental

# 2. Desenvolver (commits frequentes)
git add .
git commit -m "feat: implementa lógica de incremental"

# 3. Push
git push origin feature/backup-incremental

# 4. Abrir Pull Request no GitHub
```

---

## 🔍 Debug e Troubleshooting

### Debug de Testes

```bash
# Verbose
npm test -- --verbose

# Limpar cache
npm test -- --clearCache

# Debug com inspector
node --inspect-brk node_modules/.bin/jest --runInBand
```

### Problemas Comuns

#### Testes não rodam
```bash
npm test -- --clearCache
rm -rf node_modules package-lock.json
npm install
```

#### CLI não executa
```bash
chmod +x src/index.js
node src/index.js --help
```

#### Permissão negada (npm link)
```bash
sudo npm link
# ou use nvm para evitar sudo
```

#### Cobertura não abre
```bash
# Linux
xdg-open coverage/lcov-report/index.html

# macOS
open coverage/lcov-report/index.html

# Windows
start coverage/lcov-report/index.html
```

#### Node.js versão incorreta
```bash
node --version  # Deve ser >= 16.0.0
nvm install 16  # Se usar nvm
nvm use 16
```

---

## 📊 Verificações e Métricas

### Estrutura do Projeto

```bash
# Ver estrutura
ls -R

# Contar linhas de código
find src -name "*.js" -exec wc -l {} + | tail -1

# Contar linhas de teste
find tests -name "*.js" -exec wc -l {} + | tail -1

# Ver dependências
npm list --depth=0
```

### Verificar Qualidade

```bash
# Rodar todos os testes
npm test

# Ver cobertura
npm run test:coverage

# Verificar se tudo compila
node -c src/**/*.js
```

---

## 🧹 Limpeza e Manutenção

```bash
# Limpar node_modules
rm -rf node_modules package-lock.json
npm install

# Limpar arquivos de teste
rm -rf backup-* test-easyroms

# Limpar coverage
rm -rf coverage

# Limpar cache do Jest
npm test -- --clearCache
```

---

## 📦 Scripts NPM

| Script | Comando | Descrição |
|--------|---------|-----------|
| `npm test` | `jest` | Roda todos os testes |
| `npm run test:watch` | `jest --watch` | Testes em modo watch |
| `npm run test:coverage` | `jest --coverage` | Testes com cobertura |
| `npm start` | `node src/index.js` | Executa CLI |

---

## 📚 Estrutura do Projeto

```
r3xs-backup/
├── src/                      # Código-fonte
│   ├── index.js             # Entry point CLI
│   ├── commands/            # Comandos do Commander
│   │   └── backup.js
│   ├── services/            # Lógica de negócio
│   │   ├── fileScanner.js
│   │   ├── fileCopier.js
│   │   └── conflictResolver.js
│   └── utils/               # Utilidades
│       └── validators.js
├── tests/                   # Testes
│   ├── unit/               # Testes unitários
│   └── integration/        # Testes de integração
├── devdocs/                # Documentação técnica
│   ├── USER_GUIDE.md       # Este arquivo
│   ├── PROJECT_STRUCTURE.md
│   ├── ADR-*.md
│   ├── TESTING.md
│   ├── ROADMAP.md
│   └── CONTRIBUTING.md
├── README.md               # Documentação pública
└── package.json            # Dependências e scripts
```

---

## 🚢 Publicação NPM (Futuro)

### Preparação

```bash
# 1. Garantir que tudo está OK
npm test
npm run test:coverage

# 2. Atualizar versão
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.1 -> 1.1.0
npm version major  # 1.1.0 -> 2.0.0

# 3. Dry run
npm publish --dry-run
```

### Publicar

```bash
# 1. Login
npm login

# 2. Publicar
npm publish

# 3. Criar tag no Git
git push --tags
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
- ✅ Leia o guia de contribuição

---

## 🔗 Documentação Relacionada

### Para Usuários
- [README.md](../README.md) - Como usar o CLI
- Este guia - Referência completa

### Para Desenvolvedores
- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Arquitetura e métricas
- [TESTING.md](./TESTING.md) - Guia completo de testes
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Como contribuir
- [ROADMAP.md](./ROADMAP.md) - Plano de evolução
- [ADR-001](./ADR-001-tech-stack.md) - Decisão de tech stack
- [ADR-002](./ADR-002-file-filtering-strategy.md) - Estratégia de filtros
- [INDEX.md](./INDEX.md) - Índice completo da documentação

---

## 🔗 Links Externos Úteis

- [Commander.js](https://github.com/tj/commander.js) - Framework CLI
- [Jest](https://jestjs.io/) - Framework de testes
- [fs-extra](https://github.com/jprichardson/node-fs-extra) - Operações de filesystem
- [Conventional Commits](https://www.conventionalcommits.org/) - Padrão de commits

---

**Dúvidas?** Abra uma issue no GitHub!

**Última Atualização:** 18/03/2026
