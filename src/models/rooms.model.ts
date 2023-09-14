export interface IRooms {
    id: string;
    code: string;
    door: string;
    floor: string;
    description: string;
}

export interface IRoomsRequestModel {
    isLoanding?: boolean;
    data: IRooms[];
}
