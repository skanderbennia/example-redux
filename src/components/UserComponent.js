import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser, updateUser } from '../redux/actions/userActions'
export default function UserComponent({ id, name, email }) {
    const [update, setUpdate] = useState(false)
    const [nameInput, setNameInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const dispatch = useDispatch()
    const deleteUserHandler = (id) => {
        dispatch(deleteUser(id))
    }
    const updateUserHandler = (id, data) => {
        dispatch(updateUser(id, { name: data.nameInput, email: data.emailInput }))
    }
    return (
        <div>
            <p>name : {name}</p>
            <p>email : {email}</p>
            <button onClick={() => deleteUserHandler(id)}>DELETE</button>
            <button onClick={() => setUpdate(!update)}>UPDATE</button>
            {update && (<>name:  <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
                email:  <input type="text" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
                <button onClick={() => updateUserHandler(id, { nameInput, emailInput })}>Validate</button>
            </>)}
        </div>
    )
}
