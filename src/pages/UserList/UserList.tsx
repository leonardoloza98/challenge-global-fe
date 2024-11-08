import { useNavigate } from "react-router-dom"
import './UserList.css'
import Loading from "../../components/Loading"
import CardUser from "../../components/CardUser"
import { useState } from "react"
import useFetchUsers from "../../hooks/users/useFetchUsers"

const UserList = () => {
    const [search, setSearch] = useState<string>('')
    const { users, loading } = useFetchUsers(search)
    const navigate = useNavigate()
    const handleOnClick = (userId: string) => {
        navigate(`/users/${userId}`)
    }

    if(loading) return <Loading/>
    return(
        <div className="user-list">
            <div className="user-list-header">
                <input
                    type="text"
                    id="search"
                    className="input-search"
                    placeholder={'Buscá por nombre'}
                    onChange={(e)=>setSearch(e.target.value)}
                />
                <button className="button create-user" onClick={()=>navigate('/users/new')}>Crear usuario</button>
                <button className="button create-profile" onClick={()=>navigate('/profile/new')}>Crear perfil</button>
            </div>
            <div className="user-list-container">
                {users.map(user=>{
                    return(
                        <CardUser key={user._id} onClick={()=>handleOnClick(user._id)} user={user}/>
                    )
                })}
            </div>
        </div>
    )
}

export default UserList