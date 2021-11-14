import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser, searchUser } from '../redux/actions/userActions'
import UserComponent from './UserComponent'
export default function UserList() {
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")
    useEffect(() => {
        dispatch(fetchUser())

    }, [dispatch])
    const users = useSelector(state => state.users)
    const searchHandler = (search) => {
        dispatch(searchUser(search))
    }
    return (
        <div>

            {!users.loading ? users.listUser.map(user => {
                return <UserComponent {...user} />
            }) : <p>Loading ...</p>
            }
            Search : <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={() => searchHandler(search)}>Find</button>
        </div>
    )
}
