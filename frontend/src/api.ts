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
                async create(request: FormAnswer): Promise<string> {
                    try {
                        const res = await axios({
                            method: 'post',
                            url: `${import.meta.env.VITE_SERVER_URL}/applicants/offers`,
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
        all() {
            return {
                async getAll(password): Promise<{ requests: FormAnswer[], offers: FormAnswer[] }> {
                    try {
                        const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/applicants/all`, {params: password})
                        return res?.data
                    } catch (error) {
                        console.log(error)
                        return { requests: [], offers: [] }
                    }
                },
            }
        }
    }
}