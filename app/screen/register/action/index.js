import actionType from '../../../constant/actionType'
import api from '../../../config/api'
import endpoint from '../../../constant/endpoint'

export const registerAction = (register, password, token) => ({
    type: actionType.register,
    payload: api.post(endpoint.register, {
        register,
        password,
        token
    })
})