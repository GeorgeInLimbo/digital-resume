export interface ContactInfo {
    name: string;
    email: string;
    phoneNumber: string;
    location: string;
}

export interface Jobs {
    company: string;
    title: string;
    startDate: string;
    endDate: string;
    contact: string;
    summary: string;
    duties: string[];
    supervisors: string[];
}