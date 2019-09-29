import Activity from './activity';
import { NetworkActivityLog } from '../activityLog';
import HttpServer from '../util/httpServer';
import axios from 'axios';
import Bluebird from 'bluebird';
import os from 'os';

class NetworkActivity extends Activity {
  async exec(): Bluebird<NetworkActivityLog[]> {
    const res = await this.transmitData();

    const log: NetworkActivityLog = {
      activityTime: Date.now(),
      initiatedBy: os.userInfo().username,
      processId: process.pid, // TODO: this produces a pid for this process running this code, is that expected?
      processCommand: '', // TODO: what is expected here?
      processName: '', // TODO: what is expected here?
      destinationAddress: '', // TODO
      destinationPort: 0, // TODO
      sourceAddress: '', // TODO
      sourcePort: 0, // TODO
      contentLength: res.config.headers['Content-Length'], // TODO
      protocol: res.request.agent.protocol,
    }
    return [log];
  }

  async transmitData(): Bluebird<any> {
    const server = new HttpServer();
    server.start();

    const res = await axios({
      method: 'post',
      url: 'http://localhost:3000/test-network-activity',
      headers: {
        'content-type': 'application/json',
      },
      data: {
        test: 'data transmission'
      }
    });

    server.stop();
    return res;
  }
}

export default NetworkActivity;
