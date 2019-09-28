import Activity from './activity';
import { ProcessActivityLog } from '../activityLog';

class ProcessActivity extends Activity {
  exec(): ProcessActivityLog[] {
    throw new Error("Method not implemented.");
  }
}

export default ProcessActivity;
