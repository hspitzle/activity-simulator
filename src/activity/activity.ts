import { ActivityLog } from '../activityLog';
import SimulatorOptions from '../simulatorOptions';

abstract class Activity {
  constructor(protected opts: SimulatorOptions) {
  }

  abstract exec(): ActivityLog[];
}

export default Activity;
