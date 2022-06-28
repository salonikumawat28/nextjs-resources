import { FC, useEffect, useState } from 'react';

const UserInfo: FC<{user_id: string}> = ({ user_id }) => {
    const [userName, setUserName] = useState("");
    const [userLoading, setUserLoading] = useState(false);
    
    const fetchUserName = async() => {
        if (!user_id) return;
        setUserLoading(true);
        const responseUser = await fetch("http://localhost:3001/users/" + user_id, {method: "GET"});
        setUserLoading(false);
        if (responseUser.status === 200) {
            const fetchedUser = await responseUser.json();
            setUserName(fetchedUser.name);
        }
    }

    useEffect(() => {fetchUserName()}, []);

    return (
       <>
        {userLoading && <>Loading user info...<br/></>}
        {!userLoading && userName && <>User Name: {userName}<br/></>}
       </>
    );
}

export default UserInfo;