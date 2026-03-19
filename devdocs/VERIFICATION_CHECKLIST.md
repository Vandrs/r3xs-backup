# Checklist de Verificação

Use este checklist para garantir que tudo está funcionando antes de começar o desenvolvimento.

## ✅ Verificação Inicial

### 1. Estrutura de Arquivos
- [ ] Todos os arquivos criados estão presentes
- [ ] Estrutura de pastas correta (src/, tests/, devdocs/)
- [ ] Arquivos de configuração (.gitignore, package.json, .npmrc)

```bash
# Verificar estrutura
ls -la
ls src/
ls tests/
ls devdocs/
```

### 2. Dependências
- [ ] Node.js versão >= 16.0.0 instalado
- [ ] npm ou yarn disponível

```bash
# Verificar versões
node --version
npm --version
```

### 3. Instalação
- [ ] Dependências instaladas com sucesso
- [ ] Nenhum erro de instalação

```bash
npm install
```

---

## ✅ Testes

### 4. Testes Unitários
- [ ] Todos os testes passam
- [ ] Nenhum teste pendente (skip)
- [ ] Nenhum warning crítico

```bash
npm test
```

Esperado:
```
PASS  tests/unit/fileScanner.test.js
PASS  tests/unit/conflictResolver.test.js
PASS  tests/unit/fileCopier.test.js
PASS  tests/integration/backup.test.js

Test Suites: 4 passed, 4 total
Tests:       X passed, X total
```

### 5. Cobertura de Testes
- [ ] Cobertura adequada (idealmente > 80%)
- [ ] Relatório HTML gerado

```bash
npm run test:coverage
```

Verificar em: `coverage/lcov-report/index.html`

---

## ✅ Funcionalidade CLI

### 6. Help e Versão
- [ ] Comando --help funciona
- [ ] Comando --version funciona

```bash
node src/index.js --help
node src/index.js --version
```

### 7. Validações
- [ ] Erro quando faltam argumentos obrigatórios
- [ ] Erro quando caminho de origem não existe
- [ ] Erro quando escolhe ambos --full e --saves-only

```bash
# Deve dar erro (falta --source)
node src/index.js --dest ./backup --full

# Deve dar erro (origem inexistente)
node src/index.js --source /inexistente --dest ./backup --full

# Deve dar erro (ambos modos)
node src/index.js --source . --dest ./backup --full --saves-only
```

### 8. Backup Full
- [ ] Copia todos os arquivos
- [ ] Preserva estrutura de diretórios
- [ ] Exibe estatísticas corretas

```bash
# Criar dados de teste
mkdir -p test-easyroms/nes
echo "rom content" > test-easyroms/nes/mario.nes
echo "save content" > test-easyroms/nes/mario.nes.state

# Executar backup
node src/index.js --source ./test-easyroms --dest ./backup-test --full

# Verificar
ls -R backup-test
cat backup-test/nes/mario.nes
```

### 9. Backup Saves-Only
- [ ] Copia apenas arquivos com "state"
- [ ] Ignora ROMs
- [ ] Exibe estatísticas corretas

```bash
node src/index.js --source ./test-easyroms --dest ./backup-saves --saves-only
ls backup-saves/nes/
# Deve ter apenas mario.nes.state
```

### 10. Estratégias de Conflito

#### Overwrite
- [ ] Sobrescreve arquivos existentes

```bash
# Primeiro backup
node src/index.js --source ./test-easyroms --dest ./backup-overwrite --full

# Modificar arquivo de origem
echo "modified" > test-easyroms/nes/mario.nes

# Backup novamente (deve sobrescrever)
node src/index.js --source ./test-easyroms --dest ./backup-overwrite --full --conflict overwrite

# Verificar conteúdo
cat backup-overwrite/nes/mario.nes
# Deve mostrar "modified"
```

#### Skip
- [ ] Ignora arquivos existentes

```bash
node src/index.js --source ./test-easyroms --dest ./backup-skip --full
echo "modified" > test-easyroms/nes/mario.nes
node src/index.js --source ./test-easyroms --dest ./backup-skip --full --conflict skip

cat backup-skip/nes/mario.nes
# Deve mostrar conteúdo original, não "modified"
```

#### Newer
- [ ] Sobrescreve apenas se mais recente

```bash
node src/index.js --source ./test-easyroms --dest ./backup-newer --full
sleep 1
echo "newer content" > test-easyroms/nes/mario.nes
node src/index.js --source ./test-easyroms --dest ./backup-newer --full --conflict newer

cat backup-newer/nes/mario.nes
# Deve mostrar "newer content"
```

---

## ✅ Documentação

### 11. README
- [ ] Instruções claras de instalação
- [ ] Exemplos de uso funcionam
- [ ] Sem typos ou erros

```bash
cat README.md
```

### 12. Documentação Técnica
- [ ] ADRs completos
- [ ] TESTING.md com instruções claras
- [ ] ROADMAP.md com fases definidas

```bash
ls devdocs/
cat devdocs/ADR-001-tech-stack.md
```

---

## ✅ Qualidade de Código

### 13. Linting (futuro)
- [ ] Código sem erros de lint

```bash
# npm run lint
# (Ainda não configurado)
```

### 14. Code Review
- [ ] Nomes de variáveis/funções descritivos
- [ ] Comentários onde necessário
- [ ] Sem console.log/debugger esquecidos
- [ ] Error handling adequado

---

## ✅ Git e Versionamento

### 15. Git
- [ ] Repositório inicializado
- [ ] .gitignore funcionando
- [ ] Commit inicial criado

```bash
git init
git add .
git status
# node_modules não deve aparecer
git commit -m "feat: initial project setup"
```

### 16. GitHub (se aplicável)
- [ ] Repositório remoto criado
- [ ] README visível no GitHub
- [ ] Licença presente

```bash
git remote add origin <URL>
git push -u origin main
```

---

## ✅ Publicação NPM (Futuro)

### 17. Preparação
- [ ] package.json configurado corretamente
- [ ] Nome do pacote disponível no NPM
- [ ] Versão semântica (1.0.0)

### 18. Publicação
- [ ] `npm login` feito
- [ ] `npm publish --dry-run` sem erros
- [ ] Publicado com sucesso

```bash
npm publish --dry-run
# npm publish
```

---

## 🎯 Resultado Final

Se todos os itens estiverem ✅:

**🎉 Projeto pronto para desenvolvimento!**

Próximos passos:
1. Escolher uma feature do ROADMAP
2. Escrever testes (TDD)
3. Implementar
4. Commit e push

---

## 🐛 Troubleshooting

### Testes falhando
```bash
npm test -- --clearCache
rm -rf node_modules package-lock.json
npm install
```

### CLI não funciona
```bash
chmod +x src/index.js
node src/index.js --help
```

### Dependências faltando
```bash
npm install commander fs-extra chalk ora
npm install --save-dev jest
```

---

**Data da Verificação:** _________

**Verificado por:** _________

**Status:** [ ] ✅ Tudo OK  [ ] ⚠️ Com pendências
