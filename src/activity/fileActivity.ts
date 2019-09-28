import Activity from './activity';
import { FileActivityLog } from '../activityLog';

class FileActivity extends Activity {
  exec(opts: object): FileActivityLog[] {
    throw new Error("Method not implemented.");
  }
}

export default FileActivity;
