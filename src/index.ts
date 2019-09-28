import program from 'commander';
import Simulator from './simulator';

function commaSeparatedList(value: string, dummyPrevious: any) {
  return value.split(',');
}

program
  .option('-e, --executablePath <string>', 'path to the executable that should be run')
  .option('-o, --executableOpts <items>', 'options for the executable that should be run', commaSeparatedList);

program.parse(process.argv);

const options = {
  executablePath: program.executablePath,
  executableOpts: program.executableOpts,
}
console.log(options);

/**
 * example:
 *
 * input:
 * npm run exec -- -e ../foo.sh -o hello,world
 *
 * output:
 * { executablePath: './foo.sh', executableOpts: [ 'foo', 'bar' ] }
 */

new Simulator().run(options);
