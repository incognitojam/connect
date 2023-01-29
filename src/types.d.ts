interface Device {
  dongle_id: string
  alias: string
  serial: string
  last_athena_ping: number
  ignore_uploads: boolean
  is_paired: boolean
  is_owner: boolean
  public_key: string
  prime: boolean
  prime_type: number
  trial_claimed: boolean
  device_type: string
  openpilot_version: string
  sim_id: string
}

interface DrivingStatisticsAggregation {
  distance: number
  minutes: number
  routes: number
}

interface DrivingStatistics {
  all: DrivingStatisticsAggregation
  week: DrivingStatisticsAggregation
}

interface DeviceUser {
  email: string
  permission: 'read_access' | 'owner'
}
