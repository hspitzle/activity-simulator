import { LogFormatter } from './logFormatter';
import { ActivityLog } from './activityLog';
import fs from 'fs';
import path from 'path';

class LogSerializer {
  constructor(private formatter: LogFormatter) {
  }

  serialize(logs: ActivityLog[]): string {
    const formattedLogs = this.formatter.format(logs);
    const logDir = 'logs';
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir);
    }
    const logFileName = path.join(logDir, `activity-logs-${Date.now()}.log`);
    fs.writeFileSync(logFileName, formattedLogs);
    return logFileName;
  }
}

export default LogSerializer;
