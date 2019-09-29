import express from 'express';
import http from 'http';

class HttpServer {
  private app: express.Express;
  private server?: http.Server;

  constructor(private port: number = 3000) {
    this.app = express();
    this.app.use(express.json());
    this.app.post('/test-network-activity', (req: express.Request, res: express.Response) => {
      console.log('HttpServer received:', req.body);
      res.sendStatus(200)
    });
  }

  start() {
    if (!this.server) {
      this.server = this.app.listen(this.port, () => console.log(`Example server listening on port ${this.port}!`));
    }
  }

  stop() {
    if (this.server) {
      console.log('Shutting down example server...');
      this.server.close();
    }
  }
}

export default HttpServer;
