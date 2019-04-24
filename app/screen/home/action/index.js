import actionType from '../../../constant/actionType'
import api from '../../../config/api'
import endpoint from '../../../constant/endpoint'

export const homeAction = (home, password, token) => ({
    type: actionType.home,
    payload: api.post(endpoint.home, {
        home,
        password,
        token
    })
})