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

export interface IDetails {
    name: string;
    id: number;
    moves: {
        move: {
            name: string;
        }
    }[],

    // Moves is an Array within Pokemon Details. An array where each element looks like "this object."
    // "I don't know what the data is but I know that it looks like this."

    types: {
        type: {
            name: string
        }
    }[]

    sprites: {
        front_default: string
    }
}

export interface IPokemon {
    count: number;
    next: string;
    previous: unknown;
    results: {
        name: string;
        url: string;
    }[];
}