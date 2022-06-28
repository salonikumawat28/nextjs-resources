import { FC, useEffect, useState } from 'react';

const DeviceInfo: FC<{device_id: string}> = ({ device_id }) => {
    const [deviceName, setDeviceName] = useState("");
    const [deviceLoading, setDeviceLoading] = useState(false);

    const fetchDeviceName = async() => {
        if(!device_id) return;
        setDeviceLoading(true);
        const responseDevice = await fetch("http://localhost:3001/devices/" + device_id, {method: "GET"});
        setDeviceLoading(false);
        if (responseDevice.status === 200){
            const fetchedDevice = await responseDevice.json();
            setDeviceName(fetchedDevice.name);
        }
    }

    useEffect(() => {fetchDeviceName()}, []);

    return (
       <>
        {deviceLoading && <>Loading device info...<br/></>}
        {!deviceLoading && deviceName && <>Device Name: {deviceName}</>}
       </>
    );
}

export default DeviceInfo;