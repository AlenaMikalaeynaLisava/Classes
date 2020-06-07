class User{
  static canSendMessage = true;
  name = "Unknown"
  password = "Password"

  constructor(name, password){
    this.name = name;
    this.password = password;
  }

  sendMessage(msg){
    console.log(msg);
  }
}

const user =new User("Alice Cooper", "Bla");
user.sendMessage("Iou");



class SuperUser extends User{
  //1. Умеет создавать ползователей
  //2. Имеет перемнные  name, password -- Не выполнено!!!!!!!!
  constructor(name, password){
    //использовать конструктор род. класса
    super (name,password);
  }
  getCreatedUsers(){ 
   /*let currentUser = {};
    currentUser.name= this.name;
    currentUser.password = this.password;
    return currentUser;*/
    //5. Возвращаем созданных юзеров
    return this;
    
  }
//3. Статическое свойство  --createdUsers =[]
  static createdUsers =[];
  static createUser(name, pass){
    //6. Записать в массив имя созданного юзера
    this.createdUsers.push(name);
    //7. Вернуть новый объект класса User 
    return new this(name, pass);
  }
} 
const SuperUserBro =new SuperUser("Older Brother", "BlaBla");
SuperUserBro.getCreatedUsers();
SuperUser.createUser("Older Brother", "BlaBla");
SuperUser.createUser("Older1 Brother", "BlaBla");
SuperUser.createUser("Older2 Brother", "BlaBla");




class Admin  extends SuperUser {
  
//1. Умеет удалять пользователей + всё то, что умеет делатьSuperUser
static delitedUsers = [];
delitCreatedUsers(){
  if(Admin.createdUsers.indexOf(this.name)){
    let a = Admin.createdUsers[Admin.createdUsers.length-1];
    Admin.createdUsers[Admin.createdUsers.length-1]=this.name;
    Admin.createdUsers[Admin.createdUsers.indexOf(this.name)]=a;
    Admin.delitedUsers.push(Admin.createdUsers.pop(this.name));
  return(Admin.delitedUsers);
  }
}

//2. Дописать методы удаления юзера + удалять его из массива созданнх
//(у них будет это общий статическиq массив CreatedUsrs)
//+добавлять это имя в массив удаленных (это сатический массив
//класса Admin
//Дописать метод получения массива удаленных юзеров
}
const admin = new Admin("Older1 Brother", "BlaBla");
admin.delitCreatedUsers("Older1 Brother", "BlaBla");
