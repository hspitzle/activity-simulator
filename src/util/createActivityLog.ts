import { ActivityLog } from '../activityLog';
import os from 'os';

function createActivityLog(overrides: Partial<ActivityLog> = {}): ActivityLog {
  return Object.assign(
    {
      activityTime: Date.now(),
      initiatedBy: os.userInfo().username,

      processId: process.pid, // TODO: this produces a pid for this process running this code, is that expected?
      processCommand: process.argv.join(' '), // TODO: is this what's expected here?
      processName: process.title, // TODO: is this what's expected here? maybe process.execPath for full path to executable?
    },
    overrides
  );
}

export default createActivityLog;
