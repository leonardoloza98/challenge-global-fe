import { useState } from 'react';
import { createUser } from '../../apis/apis';
import { IUserBody } from '../../models/userModels';

const useCreateUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const createNewUser = async (userData: IUserBody) => {
        setLoading(true);
        setError(null);
        await createUser(userData);
        setLoading(false);
    };

    return { createNewUser, loading, error };
};

export default useCreateUser;