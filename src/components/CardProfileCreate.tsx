import { IProfileBody } from "../models/userModels";
import './CardUserEdit.css';

interface ICardProps {
    profile?: IProfileBody;
    onChange: (name: string, value: string) => void
}

const CardProfileCreate = ({ profile, onChange }: ICardProps) => {
    return (
        <div className="card-user-container">
            <h2 className="card-title">Perfil</h2>
            <div className="card-info">
                <div className="card-item">
                    <div>Nombre</div>
                    <input
                        type="text"
                        id="name"
                        placeholder={profile?.name || ''}
                        onChange={(e) => onChange('name', e.target.value)}
                        className="card-input"
                        style={{width: '90%'}}
                    />
                </div>
                <div className="card-item">
                    <div>Código</div>
                    <input
                        type="text"
                        id="code"
                        placeholder={profile?.code || ''}
                        onChange={(e) => onChange('code', e.target.value)}
                        className="card-input"
                        style={{width: '90%'}}
                    />
                </div>
            </div>
        </div>
    );
};

export default CardProfileCreate;