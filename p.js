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

class User {
    constructor(name, surname){
        this.name = name,
        this.surname = surname
    }

    us(){
       confirm(`Привет ${this.name}. Твоя фамилия ${this.surname}?`)? alert (`Привет ${this.name} ${this.surname}.`) : alert ("Запишите пожалуйста по новой свои данные.")
    }
}

let user = new User("Вика", "Посысаева");
user.us();