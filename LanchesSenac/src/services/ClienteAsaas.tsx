import axios from "axios";
import { RequestQRCode } from "../interfaces/RequestQRCode";
import { ResponseQRCode } from "../interfaces/ResponseQRCode";


const apiClient = axios.create({
    baseURL: '/api/v3/pix/qrCodes',
    headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'access_token': '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwNzk0NTA6OiRhYWNoXzAzZWEzNGVlLWI2MjItNGM1My05MTU0LTBjYjI2ZDZhMjk5YQ=='
    }
})

export const QRPixCode = (requestData:RequestQRCode) =>{
   return apiClient.post<ResponseQRCode>('/static', requestData)
    .then(response => {
        console.log(response);
        return response
    })
    .catch(error => {
        console.error(error);
    });    
}