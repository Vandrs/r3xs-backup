#!/usr/bin/env node

const { Command } = require('commander');
const backupCommand = require('./commands/backup');
const packageJson = require('../package.json');

const program = new Command();

program
  .name('r3xs-backup')
  .description('Ferramenta CLI para backup de ROMs e save states de handhelds R36S/R35S com ArkOS')
  .version(packageJson.version);

program
  .requiredOption('-s, --source <path>', 'Caminho da pasta easyroms no cartão SD')
  .requiredOption('-d, --dest <path>', 'Caminho de destino do backup')
  .option('-f, --full', 'Backup completo (todos os arquivos)')
  .option('--saves-only', 'Backup apenas de save states')
  .option(
    '-c, --conflict <strategy>',
    'Estratégia de conflito: overwrite, skip, newer',
    'newer'
  )
  .action(async (options) => {
    // Validar que apenas um modo foi escolhido
    if (options.full && options.savesOnly) {
      console.error('Erro: Escolha apenas --full OU --saves-only');
      process.exit(1);
    }

    if (!options.full && !options.savesOnly) {
      console.error('Erro: Você deve escolher --full OU --saves-only');
      process.exit(1);
    }

    // Validar estratégia de conflito
    const validStrategies = ['overwrite', 'skip', 'newer'];
    if (!validStrategies.includes(options.conflict)) {
      console.error(
        `Erro: Estratégia inválida "${options.conflict}". Use: overwrite, skip ou newer`
      );
      process.exit(1);
    }

    await backupCommand(options);
  });

program.parse();
