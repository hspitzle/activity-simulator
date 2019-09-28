// import { ActivityLog } from './activity-log';
import * as program from 'commander';
import * as fs from 'fs';

// const log: ActivityLog = { timestamp: 'test' };
function commaSeparatedList(value: string, dummyPrevious: any) {
  return value.split(',');
}

program
  .option('-e, --executablePath <string>', 'path to the executable that should be run')
  .option('-o, --executableOpts <items>', 'options for the executable that should be run', commaSeparatedList);

program.parse(process.argv);

console.log(program);
console.log(program.executableOpts);

// fs.writeFileSync('foo.txt', 'testing');
