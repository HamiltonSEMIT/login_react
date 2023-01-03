import axios from 'axios';


const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async(token:string) => {
        return  {
            user: {id: 5, name: 'José', email: "hamilton@email.com"}
        };
        const response = await api.post('/validade', { token });
        return response.data;
    },
    sigin: async(email:string, password: string) => {
        // Neste momento, o axios pega a url base do .env e acrescenta o /signin
        return  {
            user: {id: 5, name: 'José', email: "hamilton@email.com"},
            token: '123456789'
        };
        const response = await api.post('/signin', {email, password});

        return response.data;
    },
    logout: async() => {
        return {status: true};
        const response = await api.post('/logout');
        return response.data;
    }
});