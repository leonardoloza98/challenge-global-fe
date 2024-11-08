import { useEffect, useState } from "react";
import { fetchProfiles, IProfile } from "../../apis/apis";

const useFetchProfiles = () => {
    const [profiles, setProfiles] = useState<IProfile[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadUsers = async () => {
            setError('');
            try {
                const data = await fetchProfiles();
                setProfiles(data);
            } catch (err) {
                setError('Error fetching profiles. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        loadUsers();
    }, []);

    return { profiles, loading, error };
};

export default useFetchProfiles;