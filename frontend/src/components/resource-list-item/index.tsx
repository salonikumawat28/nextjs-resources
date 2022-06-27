import { FC } from 'react';
import classNames from "classnames";
import Link from 'next/link';

const ResourceListItem: FC<{resource: string}> = ({ resource }) => {
    return (
       <li>
            <Link href={"/resources/" + resource}>
               <a className={classNames("list-group-item")}>Resource {resource}</a>
            </Link>
       </li>
    );
}

export default ResourceListItem;