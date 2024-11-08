import { useEffect, useState } from "react";
import { fetchUsers, IUser } from "../apis/apis";

const useFetchUsers = (search: string) => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadUsers = async () => {
            setError('');
            try {
                const data = await fetchUsers(search);
                setUsers(data);
            } catch (err) {
                setError('Error fetching users. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        loadUsers();
    }, [search]);

    return { users, loading, error };
};

export default useFetchUsers;