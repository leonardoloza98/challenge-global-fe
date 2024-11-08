import { useEffect, useState } from "react";
import { fetchUserById, IUser } from "../apis/apis";

const useFetchUserById = (id: string) => {
    const [user, setUser] = useState<IUser>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadUsers = async () => {
            setError('');
            try {
                const data = await fetchUserById(id);
                setUser(data);
            } catch (err) {
                setError('Error fetching user. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        loadUsers();
    }, [id]);

    return { user, loading, error };
};

export default useFetchUserById;