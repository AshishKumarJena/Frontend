export interface IServiceReport {
    id: number;
    reportId: number;
    serReqId: number;
    reportDate: Date;
    serviceType: string;
    actionTaken: string;
    diagnosisDetails: string;
    isPaid: string;
    visitFees: number;
    repairDetails: string;
}
