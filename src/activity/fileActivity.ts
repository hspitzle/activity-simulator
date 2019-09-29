import Activity from './activity';
import { FileActivityLog } from '../activityLog';
import createActivityLog from '../util/createActivityLog'
import Bluebird from 'bluebird';
import fs from 'fs';
import path from 'path';

class FileActivity extends Activity {
  async exec(): Bluebird<FileActivityLog[]> {
    const dirName = `tmp-${Date.now()}`;
    const filePath = path.resolve(path.join(dirName, 'simulated-test-file.txt'));
    fs.mkdirSync(dirName);
    const logs: FileActivityLog[] = [
      this.createFile(filePath),
      this.updateFile(filePath),
      this.deleteFile(filePath),
    ];
    fs.rmdirSync(dirName);

    return logs;
  }

  private createFile(filePath: string): FileActivityLog {
    fs.writeFileSync(filePath, 'testing the file create simulation');
    return this.createActivityLog('CREATED', filePath);
  }

  private updateFile(filePath: string): FileActivityLog {
    const content = fs.readFileSync(filePath).toString();
    fs.writeFileSync(filePath, content + '\ntesting the file update simulation');
    return this.createActivityLog('UPDATED', filePath);
  }

  private deleteFile(filePath: string): FileActivityLog {
    fs.unlinkSync(filePath);
    return this.createActivityLog('DELETED', filePath);
  }

  private createActivityLog(activityDescriptor: 'CREATED' | 'UPDATED' | 'DELETED', filePath: string): FileActivityLog {
    // TODO: could get activityTime from fs.statSync(filePath) but that breaks when deleting because file no longer exists to get stats
    return Object.assign(
      createActivityLog(),
      {
        filePath,
        activityDescriptor,
      }
    );
  }
}

export default FileActivity;
