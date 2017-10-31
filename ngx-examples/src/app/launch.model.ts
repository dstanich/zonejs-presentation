export interface Launch {
  flight_number: number;
  launch_year: string;
  launch_date_utc: string;
  launch_date_local: string;
  rocket: Rocket;
  telemetry: {
    flight_club: string;
  };
  core_serial: string;
  cap_serial: string;
  reuse: Reuse;
  launch_site: LaunchSite;
  payloads: Array<Payload>;
  launch_success: boolean;
  reused: boolean;
  land_success: boolean;
  landing_type: string;
  landing_vehicle: string;
  links: { [key: string]: string };
  details: string;
}

export interface Rocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
}

export interface Reuse {
  core: boolean;
  side_core1: boolean;
  side_core2: boolean;
  fairings: boolean;
  capsule: false;
}

export interface LaunchSite {
  site_id: string;
  site_name: string;
}

export interface Payload {
  payload_id: string;
  customers: Array<string>;
  payload_type: string;
  payload_mass_kg: number;
  payload_mass_lbs: number;
  orbit: string;
}

export interface Vehicle {
  id: string;
  name: string;
  description: string;
  active: boolean;
  stages: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  launchpad: string;
  country: string;
  company: string;
  height: Measurement;
  diameter: Measurement;
  mass: {
    kg: number;
    lb: number;
  };
  payload_weights: Array<PayloadWeight>;
  first_stage: RocketStage;
  second_stage: RocketStage;
}

export interface Measurement {
  meters: number;
  feet: number;
}

export interface PayloadWeight {
  id: string;
  name: string;
  kg: number;
  lb: number;
}

export interface RocketStage {
  reusable: boolean;
  engines: RocketEngine;
  fuel_amount_tons: number;
  burn_time_sec: number;
}

export interface RocketEngine {
  number: number;
  type: string;
  version: string;
  propellant_1: string;
  propellant_2: string;
  thrust_sea_level: Thrust;
  trst_vacuum: Thrust;
}

export interface Thrust {
  kN: number;
  lbf: number;
}
