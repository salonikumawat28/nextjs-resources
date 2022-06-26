import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Resource : NextPage = () => {
    const router = useRouter();
    const { resourceId } = router.query;
    return <h1>Hello! This is resource: { resourceId } page.</h1>
} 

export default Resource;
