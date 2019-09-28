import Activity from './activity';
import { NetworkActivityLog } from '../activityLog';

class NetworkActivity extends Activity {
  exec(): NetworkActivityLog[] {
    throw new Error("Method not implemented.");
  }
}

export default NetworkActivity;
