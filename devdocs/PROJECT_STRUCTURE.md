# Estrutura e Visão Geral do Projeto

## 🎮 R3XS Backups

**Ferramenta CLI para backup de ROMs e save states de handhelds R36S/R35S com ArkOS**

---

## ✅ Status do Projeto

**Data:** 18/03/2026  
**Versão:** 1.0.0 (em desenvolvimento)  
**Fase:** MVP CLI

### 📊 Métricas

| Métrica | Valor |
|---------|-------|
| **Arquivos JavaScript** | 10 |
| **Arquivos de Teste** | 6 |
| **Linhas de Código (src/)** | ~335 |
| **Linhas de Teste** | ~600 |
| **Cobertura de Testes** | 84.34% |
| **Ratio Teste/Código** | 1.79:1 ✅ |

### 📊 Documentação

| Tipo | Quantidade |
|------|------------|
| README.md (raiz) | 1 |
| Arquivos em devdocs/ | 7 |
| ADRs em devdocs/adrs/ | 2 |
| Total de Linhas de Doc | ~1,150 (pós-otimização) |

---

## 🏗️ Arquitetura

### Tech Stack

- **Runtime:** Node.js ≥16.0.0
- **CLI Framework:** Commander.js 11.x
- **Filesystem:** fs-extra 11.x
- **Testes:** Jest 29.x
- **UI Terminal:** chalk + ora

### Estrutura de Diretórios

```
r3xs-backup/
├── src/                      # Código-fonte principal
│   ├── index.js             # Entry point da aplicação CLI
│   ├── commands/            # Comandos do Commander.js
│   │   └── backup.js        # Comando principal de backup
│   ├── services/            # Lógica de negócio
│   │   ├── fileScanner.js   # Busca recursiva de arquivos
│   │   ├── fileCopier.js    # Cópia de arquivos com estratégias
│   │   └── conflictResolver.js # Resolução de conflitos
│   └── utils/               # Utilidades auxiliares
│       └── validators.js    # Validações de entrada
├── tests/                   # Testes automatizados
│   ├── unit/               # Testes unitários
│   │   ├── backup.test.js
│   │   ├── fileScanner.test.js
│   │   ├── fileCopier.test.js
│   │   ├── conflictResolver.test.js
│   │   └── validators.test.js
│   └── integration/        # Testes de integração
│       └── backup.test.js
├── devdocs/                # Documentação técnica
│   ├── adrs/              # Architecture Decision Records
│   │   ├── ADR-001-tech-stack.md
│   │   └── ADR-002-file-filtering-strategy.md
│   ├── PROJECT_STRUCTURE.md
│   ├── INDEX.md
│   ├── DEVELOPERS_GUIDE.md
│   ├── TESTING.md
│   ├── ROADMAP.md
│   ├── CONTRIBUTING.md
│   └── VERIFICATION_CHECKLIST.md
├── package.json            # Dependências e scripts
├── .gitignore             # Arquivos ignorados pelo Git
├── LICENSE                # Licença MIT
├── README.md              # Documentação de uso
├── GETTING_STARTED.md     # Guia de início rápido
├── QUICK_REFERENCE.md     # Referência rápida
└── INDEX.md               # Índice da documentação
```

---

## 📦 Responsabilidades dos Módulos

### `src/index.js`
- Entry point da aplicação
- Configuração do Commander.js
- Parsing de argumentos CLI
- Delegação para comandos

### `src/commands/backup.js`
- Implementa o comando `backup`
- Validação de parâmetros
- Orquestração dos serviços
- Feedback visual (spinner, cores)

### `src/services/fileScanner.js`
- Busca recursiva de arquivos
- Filtros por extensão (`--full` vs `--saves-only`)
- Retorna lista de arquivos a copiar

### `src/services/fileCopier.js`
- Cópia física dos arquivos
- Preservação de estrutura de diretórios
- Tratamento de erros de I/O

### `src/services/conflictResolver.js`
- Implementa estratégias: `overwrite`, `skip`, `newer`
- Comparação de timestamps
- Decisões de substituição

### `src/utils/validators.js`
- Validação de caminhos
- Verificação de existência de diretórios
- Validação de permissões

---

## 🔄 Fluxo de Dados

```
CLI Input
    ↓
index.js (Commander)
    ↓
commands/backup.js
    ↓
    ├──→ validators.js (validação)
    ↓
    ├──→ fileScanner.js (busca arquivos)
    ↓
    ├──→ conflictResolver.js (verifica conflitos)
    ↓
    └──→ fileCopier.js (copia arquivos)
```

---

## ✨ Features Implementadas

### Core Functionality
- ✅ **Backup Full:** Copia todos os arquivos recursivamente
- ✅ **Backup Saves-Only:** Filtra arquivos com "state" na extensão
- ✅ **Busca Recursiva:** Varre toda árvore de diretórios
- ✅ **Preserva Estrutura:** Mantém hierarquia de pastas

### Estratégias de Conflito
- ✅ **Overwrite:** Sobrescreve sempre
- ✅ **Skip:** Ignora duplicados
- ✅ **Newer:** Sobrescreve apenas se mais recente (padrão)

### User Experience
- ✅ Feedback visual (spinner + cores)
- ✅ Estatísticas de backup (sucesso/falha/ignorados)
- ✅ Validação de caminhos
- ✅ Mensagens de erro claras

### Quality Assurance
- ✅ TDD (Test-Driven Development)
- ✅ Testes unitários (isolados)
- ✅ Testes de integração (end-to-end)
- ✅ Cobertura de código: 84.34%

---

## 🧪 Testes

### Estrutura de Testes

- **Unit tests**: Testam funções isoladas com mocks
- **Integration tests**: Testam fluxo completo com filesystem temporário

### Cobertura Atual

| Módulo | Statements | Branches | Functions | Lines |
|--------|-----------|----------|-----------|-------|
| **Total** | **84.34%** | **72.72%** | **100%** | **84.21%** |
| commands/ | 70.00% | 55.55% | 100% | 69.23% |
| services/ | 90.47% | 81.81% | 100% | 90.47% |
| utils/ | 100% | 100% | 100% | 100% |

### Executar Testes

```bash
npm test              # Todos os testes
npm run test:watch   # Modo watch
npm run test:coverage # Com cobertura
```

## 💻 Convenções de Código

- **ES6+**: Módulos ES6, async/await
- **Naming**: camelCase para funções e variáveis
- **Exports**: Named exports para serviços
- **Error Handling**: Try/catch em operações assíncronas
- **Tests**: Padrão AAA (Arrange-Act-Assert)

---

## 🚀 Build e Deploy

### Desenvolvimento Local

```bash
npm install
npm link
r3xs-backup --help
```

### Publicação NPM (futuro)

```bash
npm version patch|minor|major
npm publish
```

---

## 📄 Licença

MIT License - Veja [LICENSE](../LICENSE) para detalhes.

---

**Última Atualização:** 19/03/2026  
**Status:** ✅ Estrutura consolidada e documentada
