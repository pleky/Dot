import actionType from '../../../constant/actionType'
import api from '../../../config/api'
import endpoint from '../../../constant/endpoint'

export const friendAction = (friend, password, token) => ({
    type: actionType.friend,
    payload: api.post(endpoint.friend, {
        friend,
        password,
        token
    })
})