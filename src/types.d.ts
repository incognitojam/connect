export interface Device {
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

export interface DrivingStatisticsAggregation {
  distance: number
  minutes: number
  routes: number
}

export interface DrivingStatistics {
  all: DrivingStatisticsAggregation
  week: DrivingStatisticsAggregation
}

export interface DeviceUser {
  email: string
  permission: 'read_access' | 'owner'
}

export interface Clip {
  id: number
  create_time: number
  dongle_id: string
  route_name: string
  start_time: number
  end_time: number
  title: string
  video_type: 'q' | 'f' | 'e' | 'd' | '360'
  is_public: boolean
  status?: 'pending' | 'done' | 'failed'
}

export interface PendingClip extends Clip {
  status: 'pending'
  pending_status: 'waiting_jobs' | 'processing'
  pending_progress: number
}

export interface DoneClip extends Clip {
  status: 'done'
  url: string
  thumbnail: string
}

export interface FailedClip extends Clip {
  status: 'failed'
  error_status:
    | 'upload_failed_request'
    | 'upload_failed'
    | 'upload_failed_dcam'
    | 'upload_failed_timeout'
    | 'export_failed'
}
