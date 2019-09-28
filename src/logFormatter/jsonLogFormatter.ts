import LogFormatter from './logFormatter';
import { ActivityLog } from '../activityLog';

class JsonLogFormatter extends LogFormatter {
  format(logs: ActivityLog[]): string {
    return logs.map(log => JSON.stringify(log)).join('\n');
  }
}

export default JsonLogFormatter;
