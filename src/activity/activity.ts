import { ActivityLog } from '../activityLog';
import SimulatorOptions from '../simulatorOptions';
import Bluebird from 'bluebird';

abstract class Activity {
  constructor(protected opts: SimulatorOptions) {
  }

  abstract exec(): Bluebird<ActivityLog[]>;
}

export default Activity;
