const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15,
    },
    setAge(age: number): void {
        this.age = age;
    },
};

const age1 = profile.age;
//2015 destructuring on age
//const {age} = profile;
//in TS
const { age }: { age: number } = profile;
//is not const {age}: number = profile;

//normal ES2015
// const {
//     coords: { lat, lng },
// } = profile;

//inTS
const {
    coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
