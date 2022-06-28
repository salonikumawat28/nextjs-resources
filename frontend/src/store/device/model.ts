import { RematchDispatch, createModel } from "@rematch/core";
import { RootModel } from "../index";
import { DeviceState, Devices, Device } from "./interface";

// Initial state of the model.
const initialState: DeviceState = {
    devices: {},
    deviceDataSending: false
}

const model = createModel<RootModel>()({
    // State holds data of the model.
    // States are immutable. Each time "state" is changed, we create a new copy of the state.
    state: { ...initialState},
    // Reducers are used to modify the data.
    // We call reducer function in following way: dispather.<modelName>.<reducerFunctionName>
    reducers: {
        // Adds a device in the state. If device already exists, overrides it.
        addDevice: (state, payload: Device) => {
            const device_id = payload.id;
            let statePayload = { ... state};
            statePayload.devices[device_id] = payload;
            return statePayload;
        },
        // Sets deviceDataSending in the state.
        setDeviceDataSending: (state, payload: boolean) => {
            return { ...state, deviceDataSending: payload };
        }
    },
    effects: (dispatch: RematchDispatch<any>) => ({
        // Async function for fetching the device.
        // Once the device is fetched, it adds the device in the state by calling " dispatch.device.addDevice".
        async fetchDevice(device_id: string) {
            if(!device_id) return;
            dispatch.device.setDeviceDataSending(true);
            const responseDevice = await fetch("http://localhost:3001/devices/" + device_id, {method: "GET"});
            const fetchedDevice = await responseDevice.json();
            dispatch.device.setDeviceDataSending(false);
            dispatch.device.addDevice(fetchedDevice);
        }
    }),
});

export default model;