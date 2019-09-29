import { ActivityLog } from '../activityLog';
import os from 'os';

function createActivityLog(overrides: Partial<ActivityLog> = {}): ActivityLog {
  return Object.assign(
    {
      activityTime: Date.now(),
      initiatedBy: os.userInfo().username,

      processId: process.pid, // TODO: this produces a pid for this process running this code, is that expected?
      processCommand: '', // TODO: what is expected here?
      processName: '', // TODO: what is expected here?
    },
    overrides
  );
}

export default createActivityLog;
