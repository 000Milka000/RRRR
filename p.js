// class User {
//     constructor(name, vn, dirs){
//         this.name = name,
//         this.vn = vn, 
//         this.dirs = dirs
//     }

//     us(){
//         if (dirs == "true"){
//             console.log(`Здравствуйте директор ${this.name}. Вы ${this.vn} выглядите. `)
//         } else if (dirs == "false"){
//             console.log(`Здраствуй, гость ${this.name}. Ты ${this.vn} выглядишь.`)
//         } else {
//             console.log(`Пошёл нахуй отсюда ${this.name}`)
//         }
//     };

// };

// let us1 = new User("Виктория", "прекрасно", true);
// us1.us();

// let us2 = new User("Татьяна", "великолепно", false);
// us2.us();

// let us3 = new User("Игорь");
// us3.us();




// class User {
//     constructor(name, surname){
//         this.name = name,
//         this.surname = surname
//     }

//     us(){
//        confirm(`Привет ${this.name}. Твоя фамилия ${this.surname}?`)? alert (`Привет ${this.name} ${this.surname}.`) : alert ("Запишите пожалуйста по новой свои данные.")
//     }
// }

// let user = new User("Вика", "Посысаева");
// user.us();




// class User {
//     #name

//     constructor(name){
//         this.#name = name
//     }

//     getName(){
//         console.log(`Hello, ${this.#name}`)
//     }
// };

// let us = new User("Vika");
// console.log(us.name);

// us.getName();



// class Book {
//     constructor(name, avtor, old){
//         this.name = name,
//         this.avtor = avtor,
//         this.old = old
//     }

//     static com(ar1, ar2){
//         if (ar1.old > ar2.old){
//             console.log(`${ar1.name}, avtor: ${ar1.avtor}`)
//         } else {
//             console.log(`${ar2.name}, avtor: ${ar2.avtor} `)
//         }
//     }
// }

// let u1 = new Book("Metro 2033", "Gluhovskii", 12);
// let u2 = new Book("Loko", "Ivanov", 5);

// Book.com(u1, u2)





// class User {
//     constructor(name, surname){
//         this.name = name,
//         this.surname = surname
//     }

//     u1(){
//         console.log(`${this.name}  ${this.surname}`)
//     }

// }

// class User2 extends User{
//     constructor(name, surname){
//         super(name,surname)
//     }

//     u2(){
//         console.log(`${this.name}__${this.surname}`)
//     }
// }


// let us2 = new User2("Vika", "Posysaeva");
// us2.u2();

// let us1 = new User("Tatiana", "Petruhina");
// us1.u1();


class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    } 

    static old (user1, user2){
        if (user1.age > user2.age){
            console.log(user1.name)
        } else {
            console.log(user2.name)
        }
    }
}

let user1 = new User("Vika", 20);
let user2 = new User("Georgii", 22);

User.old(user1, user2)