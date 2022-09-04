import axios from "axios"
import { Alert } from 'react-native'


export const BASE_URL = "http://api.tbbis.com"

// endPoints
export const SignInUser = "/v1/login-api-app"
export const OtpValidationUser = "/v1/login-validation-app"
export const Dashboard = "/v1/dashboard-app"

export const getRequest = async (endPoint, token) => {
    var Url = BASE_URL + endPoint
    try {
        const resp = await axios.get(Url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return resp
    } catch (error) {
        return console.log("getRequest", error)
    }
}

export const postRequestWithOutToken = async (endPoint, Data) => {
    // var Url = BASE_URL + endPoint;
    try {
        const resp = await axios.post(BASE_URL + endPoint, Data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
            }
        });
        return resp.data
    } catch (error) {
        Alert.alert('Service Post Error', error)
        console.log("service error", error)
        return error
    }
}