export interface Certification {
    id: number;
    userId: number;
    status: string;
    deadline: string;
}

export interface User {
    id: number;
    email: string;
    passwordHash: string;
}