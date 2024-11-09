import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useCreateProfile from "../../hooks/profile/useCreateProfile"
import { IProfileBody } from "../../models/userModels"
import CardProfileCreate from "../../components/CardProfileCreate/CardProfileCreate"

const INITIAL_STATE = {
    name: '',
    code: ''
}

const ProfileCreate = () => {
    const navigate = useNavigate()
    const [disabled, setDisabled] = useState<boolean>(false)
    const { createNewProfile } = useCreateProfile()
    const [profileState, setProfileState] = useState<IProfileBody>(INITIAL_STATE)
    const handleOnChange = (name: string, value: string) => {
        const newState = {
            ...profileState,
            [name]: value
        }
        setProfileState(newState)
    }
    const disabledButtonAccept = !profileState.name || !profileState.code
    const handleCancel = () => {
        navigate('/')
    }

    const handleAccept = () => {
        setDisabled(true)
        createNewProfile(profileState).then(res=>{
            navigate('/')
            setDisabled(false);
        }).catch(()=>{
            setDisabled(false);
        });
    }

    return(
        <div className='user-detail-container'>
            <CardProfileCreate profile={profileState} onChange={handleOnChange}/>
            <div>
                <button className='user-detail-button cancel' onClick={handleCancel} disabled={disabled}>Cancelar</button>
                <button className='user-detail-button accept' onClick={handleAccept} disabled={disabled || disabledButtonAccept}>Guardar</button>
            </div>
        </div>
    )
}

export default ProfileCreate