export interface Iuser {
    message: string,
    _token: string,
    data: IdataUser
}

export interface IdataUser {
    id: number,
    nombre: string,
    usuario: string,
    id_nivel: number,
    codempresa: number,
    telefono: number,
    email: string,
    fechaacceso: string,
    fechapass: string,
    borrado: number,
    pendiente: number
}