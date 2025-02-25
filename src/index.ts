#!/usr/bin/env node

import { program, Option } from 'commander';
import { validate, update } from './commands';
import { config } from './utils';

main().catch(error => {
  console.log(`Encountered an unexpected error: ${error}`);
});

async function main() {
  program
    .name('cms-mrf-validator')
    .description('Tool for validating health coverage machine-readable files.')
    .command('validate')
    .description('Validate a file against a specific published version of a CMS schema.')
    .usage('<data-file> <schema-version> [options]')
    .argument('<data-file>', 'path to data file to validate')
    .argument('<schema-version>', 'version of schema to use for validation')
    .option('-o, --out <out>', 'output path')
    .option('-l, --lightweight', 'run validator without docker (make sure to compile beforehand)')
    .addOption(
      new Option('-t, --target <schema>', 'name of schema to use')
        .choices(config.AVAILABLE_SCHEMAS)
        .default('in-network-rates')
    )
    .action(validate);

  program
    .command('update')
    .description('Update the available schemas from the CMS repository.')
    .action(update);

  program.parseAsync(process.argv);
}
