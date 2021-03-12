export interface Login{
    email:string;
    password:string;
}

export interface RespLogin {
    user:  User;
    token: string;
}

export interface User {
    id:   number;
    name: string;
    type: string;
}