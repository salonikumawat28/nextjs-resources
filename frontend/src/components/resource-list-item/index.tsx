import { FC } from 'react';
import classNames from "classnames";

const ResourceListItem: FC<{resource: string}> = ({ resource }) => {
    return (
       <li>
            <a href={"/resources/" + resource} className={classNames("list-group-item")}>
               Resource {resource}
            </a>
       </li>
    );
}

export default ResourceListItem;