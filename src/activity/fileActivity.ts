import Activity from './activity';
import { FileActivityLog } from '../activityLog';

class FileActivity extends Activity {
  exec(): FileActivityLog[] {
    throw new Error("Method not implemented.");
  }
}

export default FileActivity;
