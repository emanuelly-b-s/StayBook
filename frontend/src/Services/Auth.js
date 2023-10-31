import axios from "axios";


class AuthService {
    apiUrl = "http://localhost:8080/api/auth/";

    static async login( body ) {
        return axios.post(`${this.apiUrl}/login`, body)
    }
    static async register( body ) {
        return axios.post(`${this.apiUrl}/register`, body)
    }
    static async sendToken( body ) {
        return axios.post(`${this.apiUrl}/token/new`, body)
    }
    static async verifyToken( body ) {
        return axios.post(`${this.apiUrl}/token/compare`, body)
    }
}

export default AuthService;