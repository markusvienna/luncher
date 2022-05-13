export interface LocationResponse {
    id: string;
    name: string;
    cuisine: string[];
}

export class Location {
    public id: string;
    public name: string;
    public cuisine: string[];

    constructor(response: LocationResponse) {
        this.id = response.id;
        this.name = response.name;
        this.cuisine = response.cuisine;
    }
}
