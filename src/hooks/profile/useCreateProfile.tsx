import { useState } from 'react';
import { createProfile } from '../../apis/apis';
import { IProfileBody } from '../../models/userModels';

const useCreateProfile = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const createNewProfile = async (profileData: IProfileBody) => {
        setLoading(true);
        setError(null);
        await createProfile(profileData);
        setLoading(false);
    };

    return { createNewProfile, loading, error };
};

export default useCreateProfile;