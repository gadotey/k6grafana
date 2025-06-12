import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  ext: {
    influxdb: {
      org: 'OISL',
      bucket: 'jmeter',
      token: 'hlnBmX4d7yvGKThHvY8bOgOCGG955wM5nNnp4L6oANO4K87-Fh90SsLy1k5PeKHSMNIIwiFkF2MDnFThLix7dA==',
      url: 'http://10.8.192.88:8086',
    },
  },
  vus: 5,
  duration: '30s',
};

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}
