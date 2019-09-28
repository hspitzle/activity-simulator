import { ActivityLog } from "../activityLog";

abstract class LogFormatter {
  abstract format(logs: ActivityLog[]): string;
}

export default LogFormatter;
