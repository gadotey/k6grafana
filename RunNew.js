import http from 'k6/http';
import { sleep } from 'k6';

// Pull InfluxDB settings from env vars (falling back to defaults)
const INFLUX_URL    = __ENV.K6_INFLUXDB_URL    || 'http://192.168.1.161:8086';
const INFLUX_ORG    = __ENV.K6_INFLUXDB_ORG    || 'T24LOS';
const INFLUX_BUCKET = __ENV.K6_INFLUXDB_BUCKET || 'monitor';
const INFLUX_TOKEN  = __ENV.K6_INFLUXDB_TOKEN  || '';

export let options = {
  // Configure the InfluxDB v2 output
  ext: {
    influxdb: {
      url:    INFLUX_URL,
      org:    INFLUX_ORG,
      bucket: INFLUX_BUCKET,
      token:  INFLUX_TOKEN,
    },
  },

  // You can also parameterize your load profile via env vars:
  vus:      __ENV.K6_VUS      ? parseInt(__ENV.K6_VUS)      : 50,
  duration: __ENV.K6_DURATION || '3m',
};

export default function () {
  // YOUR ACTUAL TEST LOGIC HERE
  http.get('https://test.k6.io');  // ← swap this out for your endpoint
  sleep(1);
}
