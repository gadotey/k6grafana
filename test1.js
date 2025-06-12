import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  ext: {
    influxdb: {
      org: 'T24Test2',
      bucket: 'k6',
      token: __ENV.K6_INFLUXDB_TOKEN,
      url: 'http://192.168.1.203:8086',
    },
  },
  vus: 50,
  duration: '1m',
};

export default function () {
  http.get('https://your-app.endpoint/');
  sleep(1);
}
