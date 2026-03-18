# Estrutura do Projeto

## Visão Geral

Este documento descreve a organização de arquivos e pastas do projeto R3XS Backups.

## Estrutura de Diretórios

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
│       ├── logger.js        # Sistema de logs
│       └── validators.js    # Validações de entrada
├── tests/                   # Testes automatizados
│   ├── unit/               # Testes unitários
│   │   ├── fileScanner.test.js
│   │   ├── fileCopier.test.js
│   │   └── conflictResolver.test.js
│   └── integration/        # Testes de integração
│       └── backup.test.js
├── devdocs/                # Documentação técnica
│   ├── PROJECT_STRUCTURE.md
│   ├── ADR-001-tech-stack.md
│   └── ADR-002-file-filtering-strategy.md
├── package.json            # Dependências e scripts
├── .gitignore             # Arquivos ignorados pelo Git
├── LICENSE                # Licença MIT
└── README.md              # Documentação de uso (público)
```

## Responsabilidades dos Módulos

### `src/index.js`
- Entry point da aplicação
- Configuração do Commander.js
- Parsing de argumentos CLI
- Delegação para comandos

### `src/commands/backup.js`
- Implementa o comando `backup`
- Validação de parâmetros
- Orquestração dos serviços
- Feedback visual (spinner, progress bar)

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

### `src/utils/logger.js`
- Logs coloridos (chalk)
- Níveis: info, success, error, warning

### `src/utils/validators.js`
- Validação de caminhos
- Verificação de existência de diretórios
- Validação de permissões de escrita

## Fluxo de Dados

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
         ↓
      logger.js (feedback)
```

## Convenções de Código

- **ES6+**: Usar módulos ES6, async/await
- **Naming**: camelCase para funções e variáveis
- **Exports**: Named exports para serviços, default export para comandos
- **Error Handling**: Try/catch em operações assíncronas
- **Tests**: Um arquivo de teste por módulo

## Testes

### Estrutura de Testes

- **Unit tests**: Testam funções isoladas com mocks
- **Integration tests**: Testam fluxo completo com filesystem real (em temp dir)

### Cobertura Mínima

- Serviços: 90%
- Comandos: 80%
- Utils: 95%

### Executar Testes

```bash
npm test              # Todos os testes
npm run test:watch   # Modo watch
npm run test:coverage # Com cobertura
```

## Build e Deploy

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

## Roadmap de Arquitetura

### Fase 1 (Atual): CLI
- ✅ Backup full e saves-only
- ✅ Estratégias de conflito
- ✅ Busca recursiva

### Fase 2: GUI Electron
- Migrar lógica para main process
- Criar renderer process com UI
- Configurações persistentes

### Fase 3: Features Avançadas
- Backup incremental
- Compressão (zip/tar.gz)
- Agendamento de backups
- Restauração de backups
