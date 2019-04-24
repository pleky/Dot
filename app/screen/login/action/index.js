import actionType from '../../../constant/actionType'
import api from '../../../config/api'
import endpoint from '../../../constant/endpoint'

export const loginAction = (login, password, token) => ({
    type: actionType.login,
    payload: api.post(endpoint.login, {
        login,
        password,
        token
    })
})