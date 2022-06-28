import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import classNames from "classnames";
import DeviceInfo from '../../components/device-info';
import UserInfo from '../../components/user-info';

const Resource : NextPage = () => {
    
    const [resourceLoading, setResourceLoading] = useState(false);
    const [resource, setResource] = useState<{user_id: string, device_id: string}>({
        device_id: "",
        user_id: ""
    });

    const router = useRouter();
    const { resourceId } = router.query;

    const fetchResource = async() => {
        setResourceLoading(true);
        let fullUrl = "http://localhost:3001/resources/" + resourceId;
        const response = await fetch(fullUrl, {method: "GET"});
        setResourceLoading(false);
        if (response.status !== 200) return;
        const fetchedResource = await response.json();
        setResource(fetchedResource);
    }

    useEffect(() => {fetchResource()}, [resourceId]);
    
    return (
        <div className={classNames("pageContent", "rightContentPage")}>
            <h1>Resource { resourceId }</h1>
            <p>
                {resourceLoading && <>Loading resource details...<br/></>}
                {resource.user_id && <UserInfo user_id={resource.user_id} />}
                {resource.device_id && <DeviceInfo device_id={resource.device_id} />}
            </p>
        </div>
        
    ); 
} 

export default Resource;
