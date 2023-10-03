export enum Permissions {
    Admin = 'admin',
    Default = 'user',
}

export interface user_model {
    id: number,
    name: string,
    credentials: number,
    permissions: Permissions,
    email: string,
    password: string,
}