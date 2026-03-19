# Índice de Documentação

Guia completo de navegação da documentação do R3XS Backups.

## 📖 Para Usuários

### Começar a Usar
1. **[README.md](./README.md)** ⭐
   - Como instalar
   - Exemplos de uso
   - Opções do CLI
   - Casos práticos

2. **[GETTING_STARTED.md](./GETTING_STARTED.md)**
   - Setup inicial
   - Primeiro backup
   - Troubleshooting básico

3. **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)**
   - Comandos mais usados
   - Atalhos úteis
   - Dicas rápidas

## 👨‍💻 Para Desenvolvedores

### Começar a Contribuir

4. **[devdocs/CONTRIBUTING.md](./devdocs/CONTRIBUTING.md)**
   - Como contribuir
   - Style guide
   - Workflow de PR

5. **[devdocs/VERIFICATION_CHECKLIST.md](./devdocs/VERIFICATION_CHECKLIST.md)**
   - Verificação inicial do ambiente
   - Testes de funcionalidade
   - Validação completa

### Entender a Arquitetura

6. **[devdocs/PROJECT_STRUCTURE.md](./devdocs/PROJECT_STRUCTURE.md)** ⭐
   - Visão geral do projeto
   - Estrutura de pastas
   - Responsabilidades dos módulos
   - Fluxo de dados
   - Métricas e status

### Decisões de Design

7. **[devdocs/ADR-001-tech-stack.md](./devdocs/ADR-001-tech-stack.md)**
   - Por que Node.js?
   - Por que Commander.js?
   - Trade-offs considerados

8. **[devdocs/ADR-002-file-filtering-strategy.md](./devdocs/ADR-002-file-filtering-strategy.md)**
   - Lógica de filtros
   - Alternativas consideradas
   - Casos de teste

### Testes

9. **[devdocs/TESTING.md](./devdocs/TESTING.md)**
   - Guia de testes
   - Como rodar testes
   - Cobertura de código
   - TDD workflow

### Roadmap e Futuro

10. **[devdocs/ROADMAP.md](./devdocs/ROADMAP.md)**
    - Fase 1: CLI MVP ✅
    - Fase 2: CLI Avançado
    - Fase 3: GUI Electron
    - Fase 4: Cloud & Sync

11. **[devdocs/EXAMPLE_CONFIG.md](./devdocs/EXAMPLE_CONFIG.md)**
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
1. README.md
2. GETTING_STARTED.md
3. QUICK_REFERENCE.md

### Novo Contribuidor
1. devdocs/PROJECT_STRUCTURE.md
2. devdocs/CONTRIBUTING.md
3. devdocs/VERIFICATION_CHECKLIST.md
4. devdocs/TESTING.md

### Decisão de Design
1. devdocs/ADR-001-tech-stack.md
2. devdocs/ADR-002-file-filtering-strategy.md
3. devdocs/ROADMAP.md

## 📊 Estatísticas

| Tipo | Quantidade |
|------|------------|
| Arquivos Markdown (raiz) | 4 |
| Arquivos Markdown (devdocs) | 7 |
| Arquivos JavaScript (src/) | 6 |
| Arquivos de Teste | 6 |
| ADRs | 2 |

## 🔍 Buscar Informação

**Preciso de...**

- ✅ Como usar o CLI → [README.md](./README.md)
- ✅ Instalar e começar → [GETTING_STARTED.md](./GETTING_STARTED.md)
- ✅ Comandos rápidos → [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)
- ✅ Contribuir → [devdocs/CONTRIBUTING.md](./devdocs/CONTRIBUTING.md)
- ✅ Rodar testes → [devdocs/TESTING.md](./devdocs/TESTING.md)
- ✅ Entender arquitetura → [devdocs/PROJECT_STRUCTURE.md](./devdocs/PROJECT_STRUCTURE.md)
- ✅ Ver roadmap → [devdocs/ROADMAP.md](./devdocs/ROADMAP.md)
- ✅ Decisões técnicas → [devdocs/ADR-*.md](./devdocs/)
- ✅ Verificar ambiente → [devdocs/VERIFICATION_CHECKLIST.md](./devdocs/VERIFICATION_CHECKLIST.md)

## 📧 Faltou Algo?

Se você não encontrou o que procurava:
1. Busque no repositório: `grep -r "sua busca" .`
2. Abra uma issue no GitHub
3. Consulte os maintainers

---

**Última Atualização:** 18/03/2026
**Estrutura:** Consolidada e simplificada
