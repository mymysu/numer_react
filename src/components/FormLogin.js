// import userEvent from '@testing-library/user-event'
import { useState, useEffect } from 'react'
import { Dropdown } from 'react-bootstrap'

import axios from 'axios'

const FormLogin = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
        name: 'Sukanya',
        age: 20,
    })
    const [isShow, setShow] = useState(true)
    const [isSubmit, setSubmit] = useState(false)
    useEffect(() => {
        console.log('Mount Component')
    }, [])
    useEffect(() => {
        console.log('useEffect 01')
    })
    useEffect(() => {
        console.log('useEffect : username change')
    }, [data.username, data.password])
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                        Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                        Something else
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <br />

            <label htmlFor="username"> Username : </label>
            <input
                id="username"
                type="text"
                onChange={(e) => {
                    setData({
                        username: e.target.value,
                        password: data.password,
                    })
                }}
            />
            <br />
            <label htmlFor="password"> password : </label>
            <input
                id="password"
                type="password"
                onChange={(e) => {
                    setData({
                        password: e.target.value,
                        username: data.username,
                    })
                }}
            />
            <br />
            <hr />

            <button
                disabled={isSubmit}
                className="btn btn-primary mx-4 "
                onClick={async () => {
                    setSubmit(true)
                    const st = await axios.post(
                        'http://localhost:8080/api/v1/users/login',
                        data
                    )
                    console.log(st)
                    alert(st.request.response)
                    st.status === 200 && setSubmit(false)
                }}
            >
                Login
            </button>

            <hr />

            <button
                onClick={() => {
                    setShow(!isShow)
                }}
            >
                {' '}
                click me :
            </button>
            {isShow.toString()}
            <b>{isShow.toString()}</b>
            <br />
            {isShow && (
                <div>
                    <b> Username : {data.username}</b>
                    <br />
                    <b> password : {data.password} </b>
                </div>
            )}
        </div>
    )
}

export default FormLogin
