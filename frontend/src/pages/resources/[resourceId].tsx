import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';




const Resource : NextPage = () => {
    const [userName, setUserName] = useState("");
    const [deviceName, setDeviceName] = useState("");

    const router = useRouter();
    const { resourceId } = router.query;

    const fetchResource = async() => {
        let fullUrl = "http://localhost:3001/resources/" + resourceId;
        const response = await fetch(fullUrl, {method: "GET"});
        if (response.status !== 200) return;
        return await response.json();
    }

    const fetchUserName = async(user_id: string) => {
        const responseUser = await fetch("http://localhost:3001/users/" + user_id, {method: "GET"});
        if (responseUser.status === 200) {
            const fetchedUser = await responseUser.json();
            setUserName(fetchedUser.name);
        }
    }

    const fetchDeviceName = async(device_id: string) => {
        const responseDevice = await fetch("http://localhost:3001/devices/" + device_id, {method: "GET"});
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
            {userName && <p>User Name: {userName}</p>}
            {deviceName && <p>Device Name: {deviceName}</p>}
        </div>
        
    ); 
} 

export default Resource;
