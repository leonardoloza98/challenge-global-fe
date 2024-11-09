import { useEffect, useState } from "react";
import useFetchProfiles from "../../hooks/profile/useFetchProfiles";
import { IUserBody } from "../../models/userModels";
import './CardUserEdit.css';

interface ICardProps {
    user?: IUserBody;
    onChange: (name: string, value: string) => void
}

const CardUserEdit = ({ user, onChange }: ICardProps) => {
    const [selectedProfileId, setSelectedProfileId] = useState<string | undefined>(undefined);
    useEffect(() => {
        if (user?.profileId) {
            setSelectedProfileId(user.profileId);
        }
    }, [user]);
    const {profiles} = useFetchProfiles()

    const handleOnChange = (name: string, value: any) => {
        onChange(name, value)
    }

    return (
        <div className="card-user-container-edit">
            <h2 className="card-title">Detalle de Usuario</h2>
            <div className="card-info">
                <div className="card-item">
                    <div>Nombre*</div>
                    <input
                        type="text"
                        id="name"
                        placeholder={user?.name || ''}
                        onChange={(e) => handleOnChange('name', e.target.value)}
                        className="card-input"
                    />
                </div>
                <div className="card-item">
                    <div>Email*</div>
                    <input
                        type="email"
                        id="email"
                        placeholder={user?.email || ''}
                        onChange={(e) => handleOnChange('email', e.target.value)}
                        className="card-input"
                    />
                </div>
                <div className="card-item">
                    <div>Edad*</div>
                    <input
                        type="number"
                        id="age"
                        placeholder={user?.age || ''}
                        onChange={(e) => handleOnChange('age', e.target.value)}
                        className="card-input"
                    />
                </div>
                <div className="card-item">
                    <div>Perfil*</div>
                    <select
                        id="profile"
                        onChange={(e) => {
                            setSelectedProfileId(e.target.value)
                            handleOnChange('profileId', e.target.value)
                        }}
                        value={selectedProfileId}
                        className="card-input"
                    >
                        <option disabled selected>Seleccione un perfil</option>
                        {profiles?.map((profile)=>{
                            return (<option key={profile._id} value={profile._id}>{profile.name}</option>)
                        })}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default CardUserEdit;