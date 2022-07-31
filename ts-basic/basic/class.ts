export class User {
  public name: string;

  constructor(name: string, public age: number) {
    this.name = name;
  }

  setName(value: string): void {
    this.name = value;
  }

  getName = (): string => {
    return this.name;
  };
}

// let user = new User("calvin", 22);
// console.log(user.name);
// console.log(user.age);

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = "";
  static getRoleName: string = "admin";

  constructor(phone: string, name: string, age: number) {
    super(name, age);
    this.phone = phone;
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }

  set email(value: string) {
    if (value.length < 5) {
      this._email = "email salah";
    } else {
      this._email = value;
    }
  }

  get email(): string {
    return this._email;
  }
}
let roleAdmin = Admin.getRoleName;
console.log(roleAdmin);

let admin = new Admin("0998789798", "calvin", 22);
admin.getName();
admin.getRole();
admin.setName("calvin");
admin.phone;
admin.email = "om";
console.log(admin.email);
