import Activity from './activity';
import { ProcessActivityLog } from '../activityLog';
import createActivityLog from '../util/createActivityLog';
import Bluebird from 'bluebird';
import { spawnSync } from 'child_process';
import fs from 'fs';
import _ from 'lodash';

class ProcessActivity extends Activity {
  async exec(): Bluebird<ProcessActivityLog[]> {
    if (!fs.existsSync(this.opts.executablePath)) {
      console.log('ProcessActivity: Could not invoke specified process');
      return [];
    }
    const spawnResult = spawnSync(this.opts.executablePath, this.opts.executableOpts);
    const log: ProcessActivityLog = createActivityLog({
      processId: spawnResult.pid,
      processCommand: this.getProcessCommand(),
      processName: this.opts.executablePath,
    });
    return [log];
  }

  private getProcessCommand(): string {
    // processCommand could also be _.get(spawnResult, 'args').join(' '),
    // this would be a little simpler but it is not explicitly stated that it will be there
    // according to the child_process docs, although it appears to be in the result every time

    return _.flatten([this.opts.executablePath, this.opts.executableOpts]).join(' ');
  }
}

export default ProcessActivity;
