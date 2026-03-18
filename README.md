# R3XS Backups

🎮 Ferramenta CLI para backup de ROMs e save states de handhelds R36S/R35S com ArkOS.

## 📋 Descrição

O **R3XS Backups** facilita o backup dos seus jogos e saves do handheld R36S/R35S. Simplesmente conecte o cartão SD no PC e execute o comando para fazer backup completo ou apenas dos save states.

## 🚀 Instalação

```bash
npm install -g r3xs-backups
```

Ou clone o repositório e instale localmente:

```bash
git clone https://github.com/seu-usuario/r3xs-backups.git
cd r3xs-backups
npm install
npm link
```

## 💻 Uso

### Backup Completo (ROMs + Saves)

Copia todos os arquivos encontrados recursivamente na pasta `easyroms`:

```bash
r3xs-backup --source /media/sdcard/easyroms --dest ~/backups/r36s --full
```

### Backup Apenas de Save States

Copia apenas arquivos que contenham "state" na extensão (ex: `.state`, `.state1`, `.savestate`):

```bash
r3xs-backup --source /media/sdcard/easyroms --dest ~/backups/r36s --saves-only
```

### Estratégias de Conflito

Quando um arquivo já existe no destino, você pode escolher:

#### Sobrescrever tudo
```bash
r3xs-backup --source /media/sdcard/easyroms --dest ~/backups/r36s --full --conflict overwrite
```

#### Ignorar duplicados
```bash
r3xs-backup --source /media/sdcard/easyroms --dest ~/backups/r36s --full --conflict skip
```

#### Sobrescrever apenas se mais recente (padrão)
```bash
r3xs-backup --source /media/sdcard/easyroms --dest ~/backups/r36s --full --conflict newer
```

## 📖 Opções

| Opção | Descrição | Obrigatório |
|-------|-----------|-------------|
| `--source <path>` | Caminho da pasta easyroms no cartão SD | ✅ Sim |
| `--dest <path>` | Caminho de destino do backup | ✅ Sim |
| `--full` | Backup completo (todos os arquivos) | Sim* |
| `--saves-only` | Backup apenas de save states | Sim* |
| `--conflict <strategy>` | Estratégia de conflito: `overwrite`, `skip`, `newer` | Não (padrão: `newer`) |

\* Você deve escolher `--full` **OU** `--saves-only`

## 📂 Estrutura do ArkOS

O ArkOS organiza os arquivos na seguinte estrutura:

```
easyroms/
├── nes/          (NES ROMs e saves)
├── snes/         (SNES ROMs e saves)
├── psx/          (PlayStation ROMs e saves)
├── gba/          (Game Boy Advance)
└── ...
```

A ferramenta busca **recursivamente** em todas as subpastas.

## ✅ Exemplos Práticos

### Exemplo 1: Backup completo pela primeira vez
```bash
r3xs-backup --source /media/username/R36S/easyroms --dest ~/Documents/R36S-Backups --full
```

### Exemplo 2: Backup diário apenas dos saves
```bash
r3xs-backup --source /media/username/R36S/easyroms --dest ~/Documents/R36S-Backups --saves-only --conflict newer
```

### Exemplo 3: Backup forçando sobrescrita
```bash
r3xs-backup --source /media/username/R36S/easyroms --dest ~/Documents/R36S-Backups --full --conflict overwrite
```

## 🧪 Desenvolvimento

Para contribuir ou executar em modo de desenvolvimento:

```bash
# Instalar dependências
npm install

# Executar testes
npm test

# Executar testes em modo watch
npm run test:watch

# Verificar cobertura de testes
npm run test:coverage

# Executar em modo dev
npm start -- --source ./test-source --dest ./test-dest --full
```

## 📚 Documentação Técnica

Para informações sobre arquitetura, decisões de design e estrutura do projeto, consulte a pasta [`devdocs/`](./devdocs/).

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

## 🎮 Compatibilidade

- ✅ R36S com ArkOS
- ✅ R35S com ArkOS
- ✅ Outros dispositivos com estrutura similar de `easyroms`

## ⚠️ Avisos

- Sempre mantenha backups dos seus saves em múltiplos locais
- Teste a restauração dos backups periodicamente
- Certifique-se de ter espaço suficiente no destino antes de iniciar o backup

---

Feito com ❤️ para a comunidade de handheld retrogaming
