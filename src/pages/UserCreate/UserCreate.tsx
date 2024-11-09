import { useNavigate } from "react-router-dom"
import CardUserEdit from "../../components/CardUserEdit/CardUserEdit"
import { useState } from "react"
import { IUserBody } from "../../models/userModels"
import useCreateUser from "../../hooks/users/useCreateUser"
import './UserCreate.css'

const INITIAL_STATE = {
    name: undefined, 
    email: undefined, 
    age: undefined,
    profileId: undefined
}

const UserCreate = ()=>{
    const navigate = useNavigate()
    const [disabled, setDisabled] = useState<boolean>(false)
    const { createNewUser } = useCreateUser()
    const [userState, setUserState] = useState<IUserBody>(INITIAL_STATE)
    const handleOnChange = (name: string, value: string) => {
        const newState = {
            ...userState,
            [name]: value
        }
        setUserState(newState)
    }

    const isDisabledButtonAccept = () => {
        return !userState.name || !userState.email || !userState.age || !userState.profileId
    }

    const handleCancel = () => {
        navigate('/')
    }

    const handleAccept = async () => {
        setDisabled(true)
        createNewUser(userState).then(res=>{
            navigate('/')
            setDisabled(false);
        }).catch(()=>{
            setDisabled(false);
        });
    }

    return(
        <div className='user-detail-container'>
            <CardUserEdit user={userState} onChange={handleOnChange}/>
            <div>
                <button className='user-detail-button cancel' onClick={handleCancel} disabled={disabled}>Cancelar</button>
                <button className='user-detail-button accept' onClick={handleAccept} disabled={disabled || isDisabledButtonAccept()}>Crear</button>
            </div>
        </div>
    )
}

export default UserCreate