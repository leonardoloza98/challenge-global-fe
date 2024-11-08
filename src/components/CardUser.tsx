import { IUser } from "../apis/apis";
import './CardUser.css'; // Asegúrate de que la ruta es correcta

interface ICardProps {
    user?: IUser;
    onClick?: () => void;
}

const CardUser = ({ user, onClick }: ICardProps) => {
    return (
        <div className="card-user-container" onClick={onClick}>
            <h2 className="card-title">Detalle de Usuario</h2>
            <div className="card-info">
                <p className="card-item"><strong>Nombre:</strong> {user?.name}</p>
                <p className="card-item"><strong>Email:</strong> {user?.email}</p>
                <p className="card-item"><strong>Edad:</strong> {user?.age}</p>
            </div>
        </div>
    );
};

export default CardUser;