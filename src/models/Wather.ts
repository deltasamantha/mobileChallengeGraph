export interface Weather {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  elevation: number;
  timezone: string;
  timezone_abbreviation: string;
  hourly_units: HourlyUnit;
  hourly: HourlyPrediction;
}

export interface HourlyUnit {
  time: string;
  temperature_2m: string;
}

export interface HourlyPrediction {
  time: Array<string>;
  temperature_2m: Array<number>;
}
