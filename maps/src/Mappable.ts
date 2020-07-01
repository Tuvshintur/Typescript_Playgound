export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
    color: string;
}
