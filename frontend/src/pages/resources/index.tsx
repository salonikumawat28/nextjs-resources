import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import ResourceListItem from '../../components/resource-list-item';
import classNames from "classnames";

const Resources: NextPage = () => {
    const [resources, setResources] = useState({});

    const fetchResources = async () => {
        const response = await fetch("http://localhost:3001/resources", {method: 'GET'});
        const fetchedResources = await response.json();
        setResources(fetchedResources); 
    }

    useEffect(() => { fetchResources() }, []);

    return (
        <div className={classNames("pageContent", "rightContentPage")}>
            <h1>Resources</h1>
            <div>
                <ul>
                    {Object.keys(resources).map(resource => <ResourceListItem key= {resource} resource={resource}/>)}
                </ul>
            </div>
        </div>
    ); 
};

export default Resources;