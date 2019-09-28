import Activity from './activity';
import { ProcessActivityLog } from '../activityLog';

class ProcessActivity extends Activity {
  exec(opts: object): ProcessActivityLog[] {
    throw new Error("Method not implemented.");
  }
}

export default ProcessActivity;
