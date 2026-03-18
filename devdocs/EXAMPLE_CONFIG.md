# Exemplo de Configuração (Futuro)

Este arquivo documenta a estrutura de configuração que será implementada em versões futuras.

## Arquivo de Configuração

**Localização:** `.r3xs-backup.json` (na home do usuário ou diretório do projeto)

```json
{
  "version": "1.5.0",
  "profiles": {
    "daily-saves": {
      "source": "/media/username/R36S/easyroms",
      "dest": "~/Documents/R36S-Backups/daily",
      "mode": "saves-only",
      "conflict": "newer",
      "compress": false,
      "schedule": "0 23 * * *"
    },
    "weekly-full": {
      "source": "/media/username/R36S/easyroms",
      "dest": "~/Documents/R36S-Backups/weekly",
      "mode": "full",
      "conflict": "overwrite",
      "compress": "zip",
      "schedule": "0 0 * * 0"
    },
    "custom": {
      "source": "/media/username/R36S/easyroms",
      "dest": "/mnt/nas/backups",
      "mode": "full",
      "conflict": "newer",
      "exclude": ["*.tmp", "*.bak"],
      "include": ["*.state*", "*.sav"],
      "compress": "tar.gz",
      "encryption": true
    }
  },
  "defaults": {
    "conflict": "newer",
    "compress": false,
    "verbose": true,
    "dryRun": false
  },
  "cloud": {
    "enabled": false,
    "provider": "gdrive",
    "credentials": "~/.r3xs-backup/gdrive-token.json",
    "folder": "R36S-Backups"
  },
  "notifications": {
    "enabled": true,
    "onSuccess": true,
    "onFailure": true,
    "email": "user@example.com"
  }
}
```

## Uso com Profiles

```bash
# Usar profile salvo
r3xs-backup --profile daily-saves

# Criar novo profile
r3xs-backup --source /path --dest /backup --full --save-profile my-backup

# Listar profiles
r3xs-backup --list-profiles

# Editar profile
r3xs-backup --edit-profile daily-saves
```

## Variáveis de Ambiente

```bash
# Caminho customizado para config
export R3XS_CONFIG_PATH=~/my-config/.r3xs-backup.json

# Desabilitar cores no output
export NO_COLOR=1

# Nível de log
export R3XS_LOG_LEVEL=debug
```

## Estrutura de Backup Incremental

```json
{
  "incremental": {
    "enabled": true,
    "basedOn": "weekly-full",
    "metadata": "~/.r3xs-backup/metadata.db"
  }
}
```

Metadata armazenada:
- Hash SHA-256 de cada arquivo
- Timestamp de última modificação
- Tamanho do arquivo
- Caminho relativo

## Compressão

Formatos suportados (futuro):
- `zip`: Compatível com Windows/Mac/Linux
- `tar.gz`: Melhor compressão
- `7z`: Máxima compressão
- `none`: Sem compressão (padrão)

```json
{
  "compress": "zip",
  "compressionLevel": 6,
  "splitSize": "2GB"
}
```

## Exclusão de Arquivos

```json
{
  "exclude": [
    "*.tmp",
    "*.bak",
    "*~",
    ".DS_Store",
    "Thumbs.db",
    "**/.git/**"
  ]
}
```

## Agendamento (Cron)

```json
{
  "schedule": "0 23 * * *",
  "scheduleDescription": "Diariamente às 23:00"
}
```

Exemplos:
- `0 23 * * *`: Todo dia às 23:00
- `0 0 * * 0`: Todo domingo à meia-noite
- `*/30 * * * *`: A cada 30 minutos

## Hooks

```json
{
  "hooks": {
    "preBackup": "~/scripts/mount-sdcard.sh",
    "postBackup": "~/scripts/upload-to-nas.sh",
    "onFailure": "~/scripts/notify-failure.sh"
  }
}
```

## Restauração

```json
{
  "restore": {
    "source": "~/Documents/R36S-Backups/2026-03-18",
    "dest": "/media/username/R36S/easyroms",
    "mode": "selective",
    "overwrite": false
  }
}
```

## Exemplo Completo de Workflow

```bash
# 1. Configurar profile
r3xs-backup init

# 2. Fazer backup inicial
r3xs-backup --profile daily-saves

# 3. Agendar backups automáticos
r3xs-backup --schedule --profile daily-saves

# 4. Verificar histórico
r3xs-backup --history

# 5. Restaurar se necessário
r3xs-backup --restore --from 2026-03-18 --to /media/sdcard
```

---

**Nota:** Esta funcionalidade ainda não está implementada. Consulte o [ROADMAP.md](./ROADMAP.md) para cronograma.
