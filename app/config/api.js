import { create } from 'apisauce'

const api = create({
    baseURL : 'https://api.backendless.com/CC6E824C-5D37-E0FD-FF52-555982E08A00/05D07985-AF9A-2BD1-FF59-06D5FFB70300/',
    headers: {
        contentType: 'application/json'
    }
})

export default api