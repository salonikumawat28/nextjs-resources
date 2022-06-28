import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootDispatch, RootState } from '../../store';
import { deviceDataSendingSelector, deviceNameSelector } from '../../store/device/selector';

const DeviceInfo: FC<{device_id: string}> = ({ device_id }) => {
    const dispatch = useDispatch<RootDispatch>();
    // Using selector to get the device name and we are passing device id to it.
    const deviceName = useSelector((state: RootState) => deviceNameSelector(state, device_id));
    // using selector to get the deviceDataSending flag.
    const deviceDataSending = useSelector(deviceDataSendingSelector);

    useEffect(() => {
        // disptach is used to call reducers and effects of model.
        dispatch.device.fetchDevice(device_id);
    }, [dispatch.device]);

    return (
       <>
        {deviceDataSending && <>Loading device info...<br/></>}
        {!deviceDataSending && deviceName && <>Device Name: {deviceName}</>}
       </>
    );
}

export default DeviceInfo;