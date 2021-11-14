import React, { useState } from 'react'
import { useDispatch, } from 'react-redux'
import { addUser, addUserApi } from '../redux/actions/userActions'
export default function UserForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const dispatch = useDispatch()
    // add user with redux without thunk
    const addUserHandler = (name, email) => {
        dispatch(addUser({ name, email }))
    }
    // add user with redux with thunk and api 
    const addUserApiHandler = (name, email) => {
        dispatch(addUserApi({ name, email }))
    }
    return (
        <div>
            name: <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
            email : <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />

            <button onClick={() => addUserApiHandler(name, email)}> ADD</button>
        </div>
    )
}
