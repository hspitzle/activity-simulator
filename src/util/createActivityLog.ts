import { ActivityLog } from '../activityLog';
import os from 'os';

function createActivityLog(overrides: Partial<ActivityLog> = {}): ActivityLog {
  const activityLogDefaults = {
    activityTime: Date.now(),
    initiatedBy: os.userInfo().username,
    processId: process.pid,
    processCommand: process.argv.join(' '),
    processName: process.title,
  };
  return Object.assign(activityLogDefaults,overrides);
}

export default createActivityLog;
