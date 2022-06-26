import type { NextPage } from 'next';

const resources = {
    1: {
      id: 1,
      user_id: 1,
      device_id: 1,
    },
    2: {
      id: 2,
      user_id: 2,
      device_id: 2,
    },
    3: {
      id: 3,
      user_id: 3,
      device_id: 3,
    },
  };

const Resources: NextPage = () => {
    return (
        <div>
            <h1>Resources List</h1>
            <div>
                <ul>
                    {Object.keys(resources).map(resource => <li>Resource {resource}</li>)}
                    
                </ul>
            </div>
        </div>
        

    ); 
};

export default Resources;