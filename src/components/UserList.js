import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from '../redux/actions/userActions'
import UserComponent from './UserComponent'
export default function UserList() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUser())

    }, [dispatch])
    const users = useSelector(state => state.users)
    return (
        <div>

            {!users.loading ? users.listUser.map(user => {
                return <UserComponent {...user} />
            }) : <p>Loading ...</p>
            }
        </div>
    )
}
