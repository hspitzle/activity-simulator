import ActivityLog from './activityLog';

enum Action {
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
  DELETED = 'DELETED',
}

interface FileActivityLog extends ActivityLog {
  filePath: string;
  activityDescriptor: Action;
}

export default FileActivityLog;
