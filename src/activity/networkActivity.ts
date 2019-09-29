import Activity from './activity';
import { NetworkActivityLog } from '../activityLog';
import createActivityLog from '../util/createActivityLog';
import HttpServer from '../util/httpServer';
import axios from 'axios';
import Bluebird from 'bluebird';

class NetworkActivity extends Activity {
  async exec(): Bluebird<NetworkActivityLog[]> {
    const res = await this.transmitData();

    const log: NetworkActivityLog = Object.assign(
      createActivityLog(),
      {
        destinationAddress: '', // TODO
        destinationPort: 0, // TODO
        sourceAddress: '', // TODO
        sourcePort: 0, // TODO
        contentLength: res.config.headers['Content-Length'], // TODO
        protocol: res.request.agent.protocol,
      }
    );
    return [log];
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
