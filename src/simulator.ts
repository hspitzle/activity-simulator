import * as Activities from './activity';
import Activity from './activity/activity';
import { ActivityLog } from './activityLog';
import { JsonLogFormatter } from './logFormatter';
import LogSerializer from './logSerializer';
import SimulatorOptions from './simulatorOptions';
import Bluebird from 'bluebird';
import _ from 'lodash';

class Simulator {
  constructor(private opts: SimulatorOptions) {
  }

  async run(): Bluebird<void> {
    const selectedActivities = this.selectActivities();
    console.log('Selected Activities::>', selectedActivities.map(a => a.constructor.name));

    const activityLogs = await this.runActivities(selectedActivities);
    console.log('Activity Logs::>', activityLogs);

    const logFile = this.serializeActivityLogs(activityLogs);
    console.log('Activity logs written to:', logFile);
  }

  private selectActivities(): Activity[] {
    // could use opts to filter this list
    return Object.values(Activities).map(activity => new activity(this.opts));
  }

  private async runActivities(selectedActivities: Activity[]): Bluebird<ActivityLog[]> {
    const logs = await Bluebird.map(selectedActivities, activity => activity.exec());
    return _.flatten(logs);
  }

  private serializeActivityLogs(logs: ActivityLog[]): string {
    return new LogSerializer(new JsonLogFormatter()).serialize(logs);
  }
}

export default Simulator;
