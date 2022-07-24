export interface IServiceBooking {
    id: number;
    productId: number;
    userId: number;
    reqDate: Date;
    problem: string;
    description: string;
    status: string;
}
