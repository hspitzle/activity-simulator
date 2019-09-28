import * as Activities from './activity';
import _ from 'lodash';

class Simulator {
  run(opts: object): void {
    const selectedActivities = this.selectActivities(opts);
    console.log('Activities::>', selectedActivities);

    selectedActivities.forEach((activityName: string) => {
     console.log(activityName);
    });
  }

  private selectActivities(opts: object): string[] {
    return Object.keys(Activities);
  }
}

export default Simulator;
