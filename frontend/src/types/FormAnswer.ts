export interface FormAnswer {
    email: string,
    fullname: string,
    phone: string,
    area: string[],
    //Request
    familystatus?: string,
    childrenage?: string,
    hotel?: string,
    comments?: string
    //Offer
    goal?: string,
    description?: string,
    audience?: string,
    flexibility?: boolean
}