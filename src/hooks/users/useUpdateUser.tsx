import { useState } from 'react';
import { updateUserById, IUser } from '../../apis/apis';

const useUpdateUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const updateUser = async (id: string, userData: IUser) => {
        setLoading(true);
        setError(null);
        await updateUserById(id, userData);
        setLoading(false);
    };

    return { updateUser, loading, error };
};

export default useUpdateUser;