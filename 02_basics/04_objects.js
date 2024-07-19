const user = new Object() //using singleton
const user1 = {}  //not using singleton

user.id = "abc1234"
user.name = "sam"
user.isLoggedIn = false;

// console.log(user);

const dailyUser = {
    email: "some@gmail.com", //key = email, values =  string
    fullname: {
        userfullname: {
            firstname: "ankit",
            lastname: "pandit",
        }
    }
}

// console.log(dailyUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3) //here the emmpty onject is the target and the obj1,obj2,obj3 
// are the source assign function returns a target these are the objects are stored into the target

const obj4 = {...obj1, ...obj2, ...obj3} //use spread
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
]

// console.log(users[1].id);
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));

// console.log(Object.entries(user));

// console.log(user.hasOwnProperty('isLoggedIn'));
// console.log(user.hasOwnProperty('id'));
// console.log(user.hasOwnProperty('name'));


//***************************Onject destructuing and JSON API****************************** 

const course = {
    coursename: "Javascript",
    price: "999",
    courseInstructor: "hitesh"
}

const {coursename} = course //kaha se value chahiye or pass the value kay chahiye in the object
console.log(coursename);

const {price} = course
console.log(price);

const {courseInstructor: instructor} = course //changing the name courseInsturctor to instructor
console.log(instructor);

//JSON & API
// {
//     "name": "ankit",
//     "course": "javscript",
//     "price": 1000
// }