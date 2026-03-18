# Referência Rápida

Comandos mais usados para desenvolvimento do R3XS Backups.

## 🚀 Setup Inicial

```bash
# Instalar dependências
npm install

# Testar instalação
npm test

# Ver cobertura
npm run test:coverage
```

## 🧪 Desenvolvimento (TDD)

```bash
# Rodar testes em modo watch (recomendado!)
npm run test:watch

# Rodar todos os testes
npm test

# Rodar teste específico
npm test -- fileScanner.test.js

# Cobertura com relatório
npm run test:coverage && open coverage/lcov-report/index.html
```

## 💻 Testar CLI Localmente

```bash
# Criar dados de teste
mkdir -p test-easyroms/nes test-easyroms/snes
echo "mario rom" > test-easyroms/nes/mario.nes
echo "mario save" > test-easyroms/nes/mario.nes.state
echo "zelda rom" > test-easyroms/snes/zelda.smc

# Backup full
node src/index.js --source ./test-easyroms --dest ./backup-full --full

# Backup saves-only
node src/index.js --source ./test-easyroms --dest ./backup-saves --saves-only

# Com estratégia específica
node src/index.js --source ./test-easyroms --dest ./backup --full --conflict skip

# Ver ajuda
node src/index.js --help
```

## 🔗 Instalar Globalmente (Dev)

```bash
# Link local
npm link

# Usar como comando global
r3xs-backup --help
r3xs-backup --source /media/sdcard --dest ~/backup --full

# Desinstalar link
npm unlink
```

## 📦 Scripts NPM

```bash
npm test              # Rodar testes
npm run test:watch    # Testes em modo watch
npm run test:coverage # Testes com cobertura
npm start             # Executar CLI
```

## 📝 Git Workflow

```bash
# Inicializar repo
git init
git add .
git commit -m "feat: initial setup"

# Criar branch para feature
git checkout -b feature/backup-incremental

# Commit semântico
git commit -m "feat: adiciona backup incremental"
git commit -m "fix: corrige filtro case-sensitive"
git commit -m "docs: atualiza README"
git commit -m "test: adiciona teste para compressor"

# Push
git push origin feature/backup-incremental
```

## 🔍 Debug

```bash
# Rodar teste com verbose
npm test -- --verbose

# Rodar teste isolado
npm test -- -t "deve copiar arquivo"

# Limpar cache do Jest
npm test -- --clearCache

# Debug com Node inspector
node --inspect-brk node_modules/.bin/jest --runInBand
```

## 📊 Verificações

```bash
# Ver estrutura de arquivos
ls -R

# Contar linhas de código
find src -name "*.js" -exec wc -l {} + | tail -1

# Contar linhas de teste
find tests -name "*.js" -exec wc -l {} + | tail -1

# Ver dependências
npm list --depth=0
```

## 🧹 Limpeza

```bash
# Remover node_modules
rm -rf node_modules package-lock.json

# Remover backups de teste
rm -rf backup-* test-easyroms

# Remover coverage
rm -rf coverage

# Reinstalar
npm install
```

## 🔧 Adicionar Nova Feature (TDD)

```bash
# 1. Criar branch
git checkout -b feature/minha-feature

# 2. Criar teste (RED)
vim tests/unit/minhaFeature.test.js
npm test  # Deve falhar

# 3. Implementar (GREEN)
vim src/services/minhaFeature.js
npm test  # Deve passar

# 4. Refatorar (REFACTOR)
npm run test:watch  # Manter rodando
# Editar código e ver testes passarem em real-time

# 5. Commit
git add .
git commit -m "feat: adiciona minha feature"
git push origin feature/minha-feature
```

## 📚 Documentação

```bash
# Ver README
cat README.md

# Ver estrutura do projeto
cat devdocs/PROJECT_STRUCTURE.md

# Ver ADRs
ls devdocs/ADR-*.md

# Ver testes
cat devdocs/TESTING.md

# Ver roadmap
cat devdocs/ROADMAP.md
```

## 🚢 Publicação NPM (Futuro)

```bash
# 1. Atualizar versão
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.1 -> 1.1.0
npm version major  # 1.1.0 -> 2.0.0

# 2. Testar build
npm test
npm run test:coverage

# 3. Dry run
npm publish --dry-run

# 4. Publicar
npm login
npm publish

# 5. Tag git
git push --tags
```

## 🐛 Troubleshooting Comum

### Testes não rodam
```bash
npm test -- --clearCache
rm -rf node_modules package-lock.json
npm install
```

### CLI não executa
```bash
chmod +x src/index.js
node src/index.js --help
```

### Permissão negada ao instalar global
```bash
sudo npm link
# ou use nvm para evitar sudo
```

### Cobertura não abre
```bash
# Linux
xdg-open coverage/lcov-report/index.html

# Mac
open coverage/lcov-report/index.html

# Windows
start coverage/lcov-report/index.html
```

## 💡 Dicas

- **Durante desenvolvimento:** Mantenha `npm run test:watch` rodando
- **Antes de commit:** Rode `npm test` para garantir que tudo passa
- **Antes de PR:** Rode `npm run test:coverage` e verifique cobertura
- **Commits:** Use mensagens semânticas (feat, fix, docs, test, etc.)
- **Dúvidas:** Consulte `devdocs/` antes de implementar

## 🔗 Links Úteis

- [Commander.js](https://github.com/tj/commander.js)
- [Jest](https://jestjs.io/)
- [fs-extra](https://github.com/jprichardson/node-fs-extra)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

**Mantenha esta referência à mão durante o desenvolvimento!** 📌
