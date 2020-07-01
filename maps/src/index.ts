import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const element = document.getElementById('map');
if (element) {
    const user = new User();
    const company = new Company();
    const customMap = new CustomMap(element);

    customMap.addMarker(user);
    customMap.addMarker(company);
}
