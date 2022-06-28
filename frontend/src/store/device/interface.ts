export interface Device {
    id: string,
    name: string
}

export interface Devices {
    [key: string]: Device
}

export interface DeviceState {
    devices: Devices,
    deviceDataSending: boolean
}
  