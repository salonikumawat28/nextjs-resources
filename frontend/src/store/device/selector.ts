import { createSelector } from "reselect";

import { RootState } from "../index";
import { DeviceState } from "./interface";

const selectState = (state: RootState) => state.device;

// Selector for getting deviceDataSending flag value from device model.
export const deviceDataSendingSelector = createSelector(
    selectState,
    (data: DeviceState) => data.deviceDataSending
);

// Selector for getting device_name for a given device_id from device model.
export const deviceNameSelector = createSelector(
    [
        selectState,
        (state: RootState, device_id: string) => device_id],
    (data: DeviceState, device_id: string) => data.devices[device_id]?.name
);