import { useNavigate, useParams } from "react-router-dom"
import Loading from "../../components/Loading/Loading"
import './UserDetail.css'
import CardUserEdit from "../../components/CardUserEdit/CardUserEdit"
import { useEffect, useState } from "react"
import { deleteUserById, IUser } from "../../apis/apis"
import useFetchUserById from "../../hooks/users/useFetchUser"
import useUpdateUser from "../../hooks/users/useUpdateUser"

const INITIAL_STATE = {
    _id: '',
    name: '', 
    email: '', 
    age: '',
    profileId: ''
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
                profileId: user.profileId
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
                <button className='user-detail-button accept' onClick={handleAccept} disabled={disabled}>Guardar</button>
            </div>
        </div>
    )
}

export default UserDetail