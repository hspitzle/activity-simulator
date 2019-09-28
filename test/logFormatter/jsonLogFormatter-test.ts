import { JsonLogFormatter } from '../../src/logFormatter';
import { ActivityLog } from '../../src/activityLog';
import { expect } from 'chai';
import moment from 'moment';

describe('JsonLogFormatter', () => {
  let formatter: JsonLogFormatter;
  let logs: ActivityLog[];

  beforeEach(() => {
    formatter = new JsonLogFormatter();
    logs = [
      {
        activityTime: '123',
        initiatedBy: 'admin',
        processName: 'foo',
        processId: 1,
        processCommandLine: './foo.sh',
      },
      {
        activityTime: '125',
        initiatedBy: 'user',
        processName: 'bar',
        processId: 2,
        processCommandLine: './bar.sh',
      }
    ];
  });

  describe('#format', function() {
    it('should return -1 when the value is not present', () => {
      const formatted = formatter.format(logs);
      expect(formatted).to.equal(
        '{"activityTime":"123","initiatedBy":"admin","processName":"foo","processId":1,"processCommandLine":"./foo.sh"}\n' +
        '{"activityTime":"125","initiatedBy":"user","processName":"bar","processId":2,"processCommandLine":"./bar.sh"}'
      );
    });
  });
});
