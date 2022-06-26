import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';




const Resource : NextPage = () => {
    const [userId, setUserId] = useState("");
    const [deviceId, setDeviceId] = useState("");

    const router = useRouter();
    const { resourceId } = router.query;

    const fetchResource = async () => { 
        if (resourceId) {
            let fullUrl = "http://localhost:3001/resources/" + resourceId;
            const response = await fetch(fullUrl, {method: "GET"});
            const fetchedResource = await response.json();
            setUserId(fetchedResource.user_id);
            setDeviceId(fetchedResource.device_id);
        }
    }

    useEffect(() => {fetchResource()}, [resourceId]);
    
    return (
        <div>
            <h1>Hello! This is resource: { resourceId } page.</h1>
            <p>User Id: {userId}</p>
            <p>Device Id: {deviceId}</p>
        </div>
        
    ); 
} 

export default Resource;
