import { useEffect, useState } from "react";
import useFetchProfiles from "../hooks/profile/useFetchProfiles";
import { IUserBody } from "../models/userModels";
import './CardUserEdit.css'; // Asegúrate de que la ruta es correcta

interface ICardProps {
    user?: IUserBody;
    onChange: (name: string, value: string) => void
}

const CardUserEdit = ({ user, onChange }: ICardProps) => {
    const [selectedProfileId, setSelectedProfileId] = useState<string>('');
    useEffect(() => {
        if (user?.profileId) {
            setSelectedProfileId(user.profileId);
        }
    }, [user]);
    const {profiles} = useFetchProfiles()

    return (
        <div className="card-user-container">
            <h2 className="card-title">Detalle de Usuario</h2>
            <div className="card-info">
                <div className="card-item">
                    <div>Nombre</div>
                    <input
                        type="text"
                        id="name"
                        placeholder={user?.name || ''}
                        onChange={(e) => onChange('name', e.target.value)}
                        className="card-input"
                    />
                </div>
                <div className="card-item">
                    <div>Email</div>
                    <input
                        type="email"
                        id="email"
                        placeholder={user?.email || ''}
                        onChange={(e) => onChange('email', e.target.value)}
                        className="card-input"
                    />
                </div>
                <div className="card-item">
                    <div>Edad</div>
                    <input
                        type="number"
                        id="age"
                        placeholder={user?.age || ''}
                        onChange={(e) => onChange('age', e.target.value)}
                        className="card-input"
                    />
                </div>
                <div className="card-item">
                    <div>Perfil</div>
                    <select
                        id="profile"
                        onChange={(e) => {
                            setSelectedProfileId(e.target.value)
                            onChange('profileId', e.target.value)
                        }}
                        className="card-input"
                    >
                        {profiles?.map((profile)=>{
                            return (<option key={profile._id} value={profile._id} selected={selectedProfileId===profile._id}>{profile.name}</option>)
                        })}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default CardUserEdit;