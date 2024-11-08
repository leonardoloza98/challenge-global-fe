import { useNavigate, useParams } from "react-router-dom"
import useFetchUserById from "../../hooks/useFetchUser"
import Loading from "../../components/Loading"
import './UserDetail.css'
import CardUserEdit from "../../components/CardUserEdit"
import { useEffect, useState } from "react"
import { deleteUserById, IUser } from "../../apis/apis"
import useUpdateUser from "../../hooks/useUpdateUser"

const INITIAL_STATE = {
    _id: '',
    name: '', 
    email: '', 
    age: ''
}

const UserDetail = ()=>{
    const {id} = useParams()
    const navigate = useNavigate()
    const [disabled, setDisabled] = useState<boolean>(false)
    const {user, loading} = useFetchUserById(id!)
    const { updateUser } = useUpdateUser()
    const [userState, setUserState] = useState<IUser>(INITIAL_STATE)
    const handleOnChange = (name: string, value: string) => {
        const newState = {
            ...userState,
            [name]: value
        }
        setUserState(newState)
    }

    const handleDelete = () => {
        deleteUserById(user?._id!)
        navigate('/')
    }

    const handleCancel = () => {
        navigate('/')
    }

    const handleAccept = async () => {
        setDisabled(true)
        updateUser(user?._id!, userState).then(res=>{
            navigate('/')
            setDisabled(false);
        }).catch(()=>{
            setDisabled(false);
        });
    }

    useEffect(() => {
        if (user) {
            setUserState({
                _id: user._id,
                name: user.name, 
                email: user.email, 
                age: user.age,
            });
        }
    }, [user]);

    if(loading) return <Loading/>

    return(
        <div className='user-detail-container'>
            <CardUserEdit user={userState} onChange={handleOnChange}/>
            <div>
                <button className='user-detail-button delete' onClick={handleDelete} disabled={disabled}>Borrar</button>
                <button className='user-detail-button cancel' onClick={handleCancel} disabled={disabled}>Cancelar</button>
                <button className='user-detail-button accept' onClick={handleAccept} disabled={disabled}>Aceptar</button>
            </div>
        </div>
    )
}

export default UserDetail