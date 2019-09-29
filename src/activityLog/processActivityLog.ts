import ActivityLog from './activityLog';

// currently everything needed by this activity log is in the base interface,
// but would like to keep this around for easy additions later

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ProcessActivityLog extends ActivityLog {
}

export default ProcessActivityLog;
