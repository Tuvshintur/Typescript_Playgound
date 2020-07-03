//instruction to every other class
//on how they can be argument to addMarker()
import { Mappable } from './Mappable';
export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(element: Element) {
        this.googleMap = new google.maps.Map(element, {
            zoom: 18,
            center: {
                lat: 47.91327,
                lng: 106.910489,
            },
        });
    }

    //its bad approach
    //because if we have another place to mark on map
    //for example CarLot, Park and many more.
    // addMarker(mappable: User | Company): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: mappable.location.lat,
    //             lng: mappable.location.lng,
    //         },
    //     });
    // }
    //instead of PIPE operator we got interface
    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            },
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            });
            infoWindow.open(this.googleMap, marker);
        });
    }
}
