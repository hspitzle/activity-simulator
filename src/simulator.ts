import * as program from 'commander';

function commaSeparatedList(value: string, dummyPrevious: any) {
  return value.split(',');
}

program
  .option('-e, --executablePath <string>', 'path to the executable that should be run')
  .option('-o, --executableOpts <items>', 'options for the executable that should be run', commaSeparatedList);

program.parse(process.argv);

console.log('executablePath:', program.executablePath);
console.log('executableOpts:', program.executableOpts);

/**
 * example:
 *
 * input:
 * npm run exec -- -e ../foo.sh -o hello,world
 *
 * output:
 * executablePath: ../foo.sh
 * executableOpts: [ 'hello', 'world' ]
 */
