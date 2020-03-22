import Activity from './activity';
import { NetworkActivityLog } from '../activityLog';
import createActivityLog from '../util/createActivityLog';
import Bluebird from 'bluebird';
import net from 'net';

class NetworkActivity extends Activity {
  async exec(): Bluebird<NetworkActivityLog[]> {
    const socket = await this.createSocketConnetion(443, 'www.google.com');
    const content = 'hello, world';
    socket.write(content);

    const log: NetworkActivityLog = Object.assign(
      createActivityLog(),
      {
        destinationAddress: socket.remoteAddress as string,
        destinationPort: socket.remotePort as number,
        sourceAddress: socket.localAddress,
        sourcePort: socket.localPort,
        contentLength: content.length,
        protocol: 'TCP',
      }
    );
    return [log];
  }

  private createSocketConnetion(port: number, host: string): Bluebird<net.Socket> {
    return new Bluebird((resolve): void => {
      const socket = new net.Socket();
      socket.on('data', () => socket.destroy());
      socket.on('close', () => console.log('Socket connection closed'));
      socket.connect(port, host, () => {
        console.log('Socket connected');
        return resolve(socket);
      });
    });
  }
}

export default NetworkActivity;
