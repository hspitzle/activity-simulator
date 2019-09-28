import ActivityLog from './activityLog';

interface FileActivityLog extends ActivityLog {
  filePath: string;
  activityDescriptor: string;
}

export default FileActivityLog;
