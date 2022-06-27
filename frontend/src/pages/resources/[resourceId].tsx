import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';




const Resource : NextPage = () => {
    const [userName, setUserName] = useState("");
    const [deviceName, setDeviceName] = useState("");
    const [resourceLoading, setResourceLoading] = useState(false);
    const [userLoading, setUserLoading] = useState(false);
    const [deviceLoading, setDeviceLoading] = useState(false);

    const router = useRouter();
    const { resourceId } = router.query;

    const fetchResource = async() => {
        setResourceLoading(true);
        let fullUrl = "http://localhost:3001/resources/" + resourceId;
        const response = await fetch(fullUrl, {method: "GET"});
        setResourceLoading(false);
        if (response.status !== 200) return;
        return await response.json();
    }

    const fetchUserName = async(user_id: string) => {
        if (!user_id) return;
        setUserLoading(true);
        const responseUser = await fetch("http://localhost:3001/users/" + user_id, {method: "GET"});
        setUserLoading(false);
        if (responseUser.status === 200) {
            const fetchedUser = await responseUser.json();
            setUserName(fetchedUser.name);
        }
    }

    const fetchDeviceName = async(device_id: string) => {
        if(!device_id) return;
        setDeviceLoading(true);
        const responseDevice = await fetch("http://localhost:3001/devices/" + device_id, {method: "GET"});
        setDeviceLoading(false);
        if (responseDevice.status === 200){
            const fetchedDevice = await responseDevice.json();
            
            setDeviceName(fetchedDevice.name);
        }
    }

    const fetchResourceDetails = async() => { 
        if (resourceId) {
            const fetchedResource = await fetchResource();
            await Promise.all([
                fetchUserName(fetchedResource.user_id),
                fetchDeviceName(fetchedResource.device_id)
            ]);
        }
    }

    useEffect(() => {fetchResourceDetails()}, [resourceId]);
    
    return (
        <div>
            <h1>Hello! This is resource: { resourceId } page.</h1>

            {resourceLoading && <p>Loading resource details...</p>}

            {userLoading && <p>Loading user info...</p>}
            {!userLoading && userName && <p>User Name: {userName}</p>}

            {deviceLoading && <p>Loading device info...</p>}
            {!deviceLoading && deviceName && <p>Device Name: {deviceName}</p>}
        </div>
        
    ); 
} 

export default Resource;
