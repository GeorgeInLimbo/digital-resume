// I use an interface to cast data from the Pokemon Observables into a curattered, readable format. 

export interface ContactInfo {
    name: string;
    email: string;
    phoneNumber: string;
    location: string;
}

export interface Jobs {
    company: string;
    logo: string;
    title: string;
    startDate: string;
    endDate: string;
    contact: string;
    summary: string;
    duties: string[];
    supervisors: string[];
}