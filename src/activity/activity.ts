import { ActivityLog } from '../activityLog';

abstract class Activity {
  abstract exec(opts: object): ActivityLog[];
}

export default Activity;
