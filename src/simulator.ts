import * as Activities from './activity';
import Activity from './activity/activity';
import { ActivityLog } from './activityLog';
import { JsonLogFormatter } from './logFormatter';
import LogSerializer from './logSerializer';
import SimulatorOptions from './simulatorOptions';
import _ from 'lodash';

class Simulator {
  constructor(private opts: SimulatorOptions) {
  }

  run(): void {
    const selectedActivities = this.selectActivities();
    console.log('Selected Activities::>', selectedActivities);

    const activityLogs = this.runActivities(selectedActivities);
    console.log('Activity Logs::>', activityLogs);

    const logFile = this.serializeActivityLogs(activityLogs);
    console.log('Activity logs written to:', logFile);
  }

  private selectActivities(): Activity[] {
    // could use opts to filter this list
    return Object.values(Activities).map(activity => new activity(this.opts));
  }

  private runActivities(selectedActivities: Activity[]): ActivityLog[] {
    const logs = selectedActivities.map(activity => activity.exec());
    return _.flatten(logs);
  }

  private serializeActivityLogs(logs: ActivityLog[]): string {
    return new LogSerializer(new JsonLogFormatter()).serialize(logs);
  }
}

export default Simulator;
