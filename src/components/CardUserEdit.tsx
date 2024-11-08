import { IUserBody } from "../models/userModels";
import './CardUser.css'; // Asegúrate de que la ruta es correcta

interface ICardProps {
    user?: IUserBody;
    onChange: (name: string, value: string) => void
}

const CardUserEdit = ({ user, onChange }: ICardProps) => {
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
                        style={{width: '90%'}}
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
                        style={{width: '90%'}}
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
                        style={{width: '90%'}}
                    />
                </div>
            </div>
        </div>
    );
};

export default CardUserEdit;