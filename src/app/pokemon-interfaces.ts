export interface IDetails {
    name: string;
    id: number;
    moves: {
        move: {
            name: string;
        }
    }[],
    types: {
        type: {
            name: string
        }
    }[],
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