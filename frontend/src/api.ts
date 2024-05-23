import axios from "axios"
import { FormAnswer } from "./types/FormAnswer";

export const api = () => {
    return {
        requests() {
            return {
                async create(request: FormAnswer): Promise<string> {
                    try {
                        const res = await axios({
                            method: 'post',
                            url: `${import.meta.env.VITE_SERVER_URL}/applicants/requests`,
                            headers: {},
                            data: {
                                request
                            }
                        });
                        console.log(res?.data);
                        return res?.data.id
                    } catch (error) {
                        console.log(error)
                        return ''
                    }
                }
            }
        },
        offers() {
            return {
                async create(offer: FormAnswer): Promise<string> {
                    try {
                        const res = await axios({
                            method: 'post',
                            url: `${import.meta.env.VITE_SERVER_URL}/applicants/offers`,
                            headers: {},
                            data: {
                                ...offer
                            }
                        });

                        console.log(res?.data);
                        return res?.data.id
                    } catch (error) {
                        console.log(error)
                        return ''
                    }
                }
            }
        },
        all() {
            return {
                async getAll(): Promise<{ requests: FormAnswer[], offers: FormAnswer[] }> {
                    try {
                        console.log(2222)
                        const res = await axios({
                            method: 'get',
                            url: `${import.meta.env.VITE_SERVER_URL}/applicants/all`,
                            headers: {Token: localStorage.getItem("token")}
                        });
                        console.log()
                        return res?.data
                    } catch (error) {
                        console.log(error)
                        return { requests: [], offers: [] }
                    }
                },
            }
        }, 
        auth() {
            return {
                async verify(password: string): Promise<string> {
                    try {
                        const res = await axios({
                            method: 'post',
                            url: `${import.meta.env.VITE_SERVER_URL}/authenticate`,
                            headers: {},
                            data: {
                                password
                            }
                        });
                        console.log(res?.data)
                        return res?.data?.token
                    } catch (error) {
                        console.log(error)
                        return  ""
                    }
                },
            }
        }
    }
}