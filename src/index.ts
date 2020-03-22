import program from 'commander';
import Simulator from './simulator';
import SimulatorOptions from './simulatorOptions';

function commaSeparatedList(value: string, dummyPrevious: any) {
  return value.split(',');
}

program
  .option('-e, --executablePath <string>', 'path to the executable that should be run')
  .option('-o, --executableOpts <items>', 'options for the executable that should be run', commaSeparatedList);

program.parse(process.argv);

const options: SimulatorOptions = {
  executablePath: program.executablePath,
  executableOpts: program.executableOpts,
}
console.log(options);

/**
 * example:
 *
 * input:
 * npm run exec -- -e example/executable.sh -o hello,world
 *
 * output:
 * {
 *   executablePath: 'example/executable.sh',
 *   executableOpts: [ 'hello', 'world' ]
 * }
 */

new Simulator(options).run();
