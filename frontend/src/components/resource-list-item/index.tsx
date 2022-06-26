import { FC } from 'react';

const ResourceListItem: FC<{resource: string}> = ({ resource }) => {
    return (
       <li>
           Resource:
           <a href={"/resources/" + resource}>
               {resource}
           </a>
       </li>
    );
}

export default ResourceListItem;