# Checklist de Verificação

Use este checklist antes de começar o desenvolvimento ou fazer commits.

## ✅ Verificação Inicial

### Estrutura e Ambiente
- [ ] Estrutura de pastas correta (`src/`, `tests/`, `devdocs/`)
- [ ] Arquivos de configuração presentes (`.gitignore`, `package.json`, `.npmrc`)
- [ ] Node.js >= 16.0.0 instalado (`node --version`)
- [ ] Dependências instaladas sem erros (`npm install`)

## ✅ Testes

### Execução
- [ ] Todos os testes passam (`npm test`)
- [ ] Nenhum teste pendente ou com skip
- [ ] Nenhum warning crítico
- [ ] Cobertura adequada > 80% (`npm run test:coverage`)

Detalhes: [TESTING.md](./TESTING.md)

## ✅ Funcionalidade CLI

### Comandos Básicos
- [ ] `--help` funciona corretamente
- [ ] `--version` exibe versão correta

### Validações
- [ ] Erro quando faltam argumentos obrigatórios
- [ ] Erro quando origem não existe
- [ ] Erro quando usa `--full` e `--saves-only` juntos

### Backups
- [ ] Backup full copia todos os arquivos
- [ ] Backup saves-only filtra corretamente (apenas arquivos com "state")
- [ ] Estrutura de diretórios preservada
- [ ] Estatísticas exibidas corretamente

### Estratégias de Conflito
- [ ] `--conflict overwrite` sobrescreve arquivos existentes
- [ ] `--conflict skip` ignora arquivos existentes
- [ ] `--conflict newer` sobrescreve apenas se mais recente (padrão)

Exemplos de uso: [README.md](../README.md)

## ✅ Documentação

- [ ] README sem erros de digitação
- [ ] Instruções de instalação claras
- [ ] Exemplos de uso funcionam
- [ ] ADRs completos e atualizados
- [ ] Links entre documentos funcionando

## ✅ Qualidade de Código

- [ ] Nomes de variáveis/funções descritivos
- [ ] Sem `console.log` ou `debugger` esquecidos
- [ ] Error handling adequado
- [ ] Comentários onde necessário

## ✅ Git e Versionamento

- [ ] Repositório inicializado
- [ ] `.gitignore` funcionando (`node_modules` não commitado)
- [ ] Commits com mensagens semânticas (feat/fix/docs/refactor/test)
- [ ] README visível no GitHub (se repositório remoto criado)
- [ ] Licença presente

Guia de commits: [CONTRIBUTING.md](./CONTRIBUTING.md)

## ✅ Publicação NPM (quando aplicável)

- [ ] `package.json` configurado corretamente
- [ ] Nome do pacote disponível no NPM
- [ ] Versão atualizada (semver)
- [ ] `npm login` feito
- [ ] `npm publish --dry-run` sem erros

---

## 🎯 Resultado Final

Se todos os itens estiverem ✅: **🎉 Projeto pronto para desenvolvimento/commit!**

Próximos passos:
1. Escolher uma feature do [ROADMAP](./ROADMAP.md)
2. Escrever testes (TDD)
3. Implementar
4. Commit e push

## 🐛 Problemas?

Para troubleshooting detalhado, consulte [DEVELOPERS_GUIDE.md](./DEVELOPERS_GUIDE.md)

---

**Data da Verificação:** _________

**Verificado por:** _________

**Status:** [ ] ✅ Tudo OK  [ ] ⚠️ Com pendências
