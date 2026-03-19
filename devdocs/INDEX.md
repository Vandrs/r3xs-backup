# Índice de Documentação

Guia completo de navegação da documentação do R3XS Backups.

## 📖 Para Usuários

### Começar a Usar
1. **[README.md](../README.md)** ⭐
   - Como instalar
   - Exemplos de uso
   - Opções do CLI
   - Casos práticos

2. **[USER_GUIDE.md](./USER_GUIDE.md)**
   - Setup inicial e instalação
   - Comandos essenciais
   - Desenvolvimento com TDD
   - Git workflow
   - Troubleshooting
   - Publicação NPM

## 👨‍💻 Para Desenvolvedores

### Começar a Contribuir

3. **[CONTRIBUTING.md](./CONTRIBUTING.md)**
   - Como contribuir
   - Style guide
   - Workflow de PR

4. **[VERIFICATION_CHECKLIST.md](./VERIFICATION_CHECKLIST.md)**
   - Verificação inicial do ambiente
   - Testes de funcionalidade
   - Validação completa

### Entender a Arquitetura

5. **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** ⭐
   - Visão geral do projeto
   - Estrutura de pastas
   - Responsabilidades dos módulos
   - Fluxo de dados
   - Métricas e status atual

### Decisões de Design

6. **[ADR-001-tech-stack.md](./ADR-001-tech-stack.md)**
   - Por que Node.js?
   - Por que Commander.js?
   - Trade-offs considerados

7. **[ADR-002-file-filtering-strategy.md](./ADR-002-file-filtering-strategy.md)**
   - Lógica de filtros
   - Alternativas consideradas
   - Casos de teste

### Testes

8. **[TESTING.md](./TESTING.md)**
   - Guia de testes
   - Como rodar testes
   - Cobertura de código
   - TDD workflow

### Roadmap e Futuro

9. **[ROADMAP.md](./ROADMAP.md)**
   - Fase 1: CLI MVP ✅
   - Fase 2: CLI Avançado
   - Fase 3: GUI Electron
   - Fase 4: Cloud & Sync

10. **[EXAMPLE_CONFIG.md](./EXAMPLE_CONFIG.md)**
    - Configurações futuras
    - Profiles
    - Cloud integration

## 📂 Código-Fonte

### Entry Point
- `src/index.js` - CLI principal com Commander.js

### Comandos
- `src/commands/backup.js` - Comando de backup

### Serviços (Core)
- `src/services/fileScanner.js` - Busca recursiva de arquivos
- `src/services/fileCopier.js` - Cópia de arquivos
- `src/services/conflictResolver.js` - Estratégias de conflito

### Utilitários
- `src/utils/validators.js` - Validações de entrada

## 🧪 Testes

### Unitários
- `tests/unit/backup.test.js`
- `tests/unit/fileScanner.test.js`
- `tests/unit/fileCopier.test.js`
- `tests/unit/conflictResolver.test.js`
- `tests/unit/validators.test.js`

### Integração
- `tests/integration/backup.test.js`

## ⚙️ Configuração

- `package.json` - Dependências e scripts
- `.gitignore` - Arquivos ignorados
- `.npmrc` - Configurações NPM
- `LICENSE` - Licença MIT

## 🗺️ Fluxo de Leitura Recomendado

### Novo Usuário
1. [README.md](../README.md)
2. [USER_GUIDE.md](./USER_GUIDE.md) - Seção "Quick Start"

### Novo Contribuidor
1. [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)
2. [USER_GUIDE.md](./USER_GUIDE.md) - Seção "Desenvolvimento com TDD"
3. [CONTRIBUTING.md](./CONTRIBUTING.md)
4. [VERIFICATION_CHECKLIST.md](./VERIFICATION_CHECKLIST.md)
5. [TESTING.md](./TESTING.md)

### Decisão de Design
1. [ADR-001-tech-stack.md](./ADR-001-tech-stack.md)
2. [ADR-002-file-filtering-strategy.md](./ADR-002-file-filtering-strategy.md)
3. [ROADMAP.md](./ROADMAP.md)

## 📊 Estatísticas da Documentação

| Tipo | Quantidade |
|------|------------|
| Arquivos Markdown (raiz) | 1 (README.md) |
| Arquivos Markdown (devdocs/) | 9 |
| Arquivos JavaScript (src/) | 6 |
| Arquivos de Teste | 6 |
| ADRs | 2 |
| Total de Linhas de Código | ~335 |
| Total de Linhas de Teste | ~600 |
| Cobertura de Testes | 84.34% |

## 🔍 Buscar Informação

**Preciso de...**

- ✅ Como usar o CLI → [README.md](../README.md)
- ✅ Setup e comandos → [USER_GUIDE.md](./USER_GUIDE.md)
- ✅ Contribuir → [CONTRIBUTING.md](./CONTRIBUTING.md)
- ✅ Rodar testes → [TESTING.md](./TESTING.md) ou [USER_GUIDE.md](./USER_GUIDE.md)
- ✅ Entender arquitetura → [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)
- ✅ Ver roadmap → [ROADMAP.md](./ROADMAP.md)
- ✅ Decisões técnicas → [ADR-*.md](./ADR-001-tech-stack.md)
- ✅ Verificar ambiente → [VERIFICATION_CHECKLIST.md](./VERIFICATION_CHECKLIST.md)

## 📧 Faltou Algo?

Se você não encontrou o que procurava:
1. Busque no repositório: `grep -r "sua busca" .`
2. Abra uma issue no GitHub
3. Consulte os maintainers

---

**Última Atualização:** 18/03/2026  
**Estrutura:** Simplificada - 1 arquivo na raiz + devdocs/ completo
