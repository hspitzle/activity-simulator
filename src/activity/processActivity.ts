import Activity from './activity';
import { ProcessActivityLog } from '../activityLog';
import { spawnSync } from 'child_process';
import _ from 'lodash';
import os from 'os';

class ProcessActivity extends Activity {
  exec(): ProcessActivityLog[] {
    const spawnResult = spawnSync(this.opts.executablePath, this.opts.executableOpts);
    const log: ProcessActivityLog = {
      activityTime: Date.now(),
      initiatedBy: os.userInfo().username,
      processId: spawnResult.pid,
      processCommand: this.getProcessCommand(), // TODO: is this what is expected here?
      processName: this.opts.executablePath, // TODO: is this what is expected here?
    }
    return [<any> log];
  }

  private getProcessCommand(): string {
    // processCommand could also be _.get(spawnResult, 'args').join(' '),
    // this would be a little simpler, but though it appears to be in the result every time,
    // it is not explicitly stated that it will be there according to the child_process docs

    return _.flatten([this.opts.executablePath, this.opts.executableOpts]).join(' ');
  }
}

export default ProcessActivity;
