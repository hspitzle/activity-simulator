import { ActivityLog } from '../activityLog';

abstract class Activity {
  abstract exec(): ActivityLog[];
}

export default Activity;
