import Activity from './activity';
import { FileActivityLog } from '../activityLog';
import Bluebird from 'bluebird';
import fs from 'fs';
import os from 'os';
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
    return {
      activityTime: Date.now(), // TODO: could get this from fs.statSync(filePath) but that breaks when deleting because file no longer exists to get stats
      initiatedBy: os.userInfo().username,
      processId: process.pid, // TODO: this produces a pid for this process running this code, is that expected?
      processCommand: '', // TODO: what is expected here?
      processName: '', // TODO: what is expected here?
      filePath,
      activityDescriptor,
    };
  }
}

export default FileActivity;
