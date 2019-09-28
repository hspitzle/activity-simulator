import ActivityLog from './activityLog';

interface NetworkActivityLog extends ActivityLog {
  destinationAddress: string;
  destinationPort: number;
  sourceAddress: string;
  sourcePort: number;
  contentLength: number;
  protocol: string;
}

export default NetworkActivityLog;
