import useSWR from 'swr';

import fetcher from './fetcher';

export type Device = {
  alias: string;
  device_type: string;
  dongle_id: string;
  ignore_uploads: boolean | null;
  is_owner: boolean;
  is_paired: boolean;
  last_athena_ping: number;
  openpilot_version: string;
  prime: boolean;
  prime_type: number;
  public_key: string;
  serial: string;
  sim_id: string;
  sim_type: number;
  trial_claimed: boolean;
};

export type Location = {
  dongle_id: string;
  lat: number;
  lng: number;
  time: number;
};

export function useDevices() {
  const { data, error, isLoading } = useSWR<Device[]>(
    'https://api.commadotai.com/v1/me/devices/',
    fetcher,
  );

  return {
    devices: data,
    isLoading,
    isError: error,
  };
}

export function useDeviceLocation(dongleId: string) {
  const { data, error, isLoading } = useSWR<Location>(
    `https://api.commadotai.com/v1/devices/${dongleId}/location`,
    fetcher,
  );

  return {
    location: data,
    isLoading,
    isError: error,
  };
}
