class User{
  static canSendMessage = true;
  name = "Unknown"
  password = "Password"

  constructor(name, password){
    this.name = name;
    this.password = password;
  }
}


class SuperUser extends User{
  //1. Умеет создавать ползователей
  //2. Имеет перемнные  name, password -- Не выполнено!!!!!!!!
  constructor(name, password,type){
    //использовать конструктор род. класса
    super (name,password, type);
  }
  getCreatedUsers(){ 
    //5. Возвращаем созданных юзеров
    return SuperUser.createdUsers; //Возвращаем массив всех созданных юзеров
    
  }
//3. Статическое свойство  --createdUsers =[]
  static createdUsers =[];
  createUser(name, pass){
    //6. Записать в массив имя созданного юзера
    SuperUser.createdUsers.push(name);
    return new User(name, pass);
    //7. Вернуть новый объект класса User 
  }
} 



class Admin  extends SuperUser {  //Здесь Admin унаследовал все, что умеет SuperUser
//1. Умеет удалять пользователей + всё то, что умеет делатьSuperUser
static delitedUsers = [];//Добавляю статический массив удаленных юзеров
//Метод для удаления User из массива юзеров + добавления удаленного User в массив удаленных
delitCreatedUsers(name){
  if(Admin.createdUsers.indexOf(name)){
    let a = Admin.createdUsers[Admin.createdUsers.length-1];
    Admin.createdUsers[Admin.createdUsers.length-1]=name;
    Admin.createdUsers[Admin.createdUsers.indexOf(name)]=a;
    Admin.delitedUsers.push(Admin.createdUsers.pop(name));
  return(Admin.createdUsers);//Возвращаем обновленный массив созданных юзеров
  }
}

//2. Дописать методы удаления юзера + удалять его из массива созданнх
//(у них будет это общий статическиq массив CreatedUsrs)
//+добавлять это имя в массив удаленных (это сатический массив
//класса Admin
//Дописать метод получения массива удаленных юзеров
getDelitedUsers(){ 
  return(Admin.delitedUsers);//Возвращаем массив удаленных юзеров
}
}

const SuperUserBro =new SuperUser("Older Brother", "BlaBla");//Создали СуперЮзера
//СуперЮзер создает трех пользователей
SuperUserBro.createUser("Older56 Brother", "BlaBla");
SuperUserBro.createUser("Older1 Brother", "BlaBla");
SuperUserBro.createUser("Older2 Brother", "BlaBla");
//Создаем Админа
const admin = new Admin("Masha", "BlaBlalaBla");
admin.createUser("Older33 Brother", "BlaBlaBBB");//Проверяем, Админ умеет создавать пользователей
admin.delitCreatedUsers("Older1 Brother", "BlaBla");//Проверяем, Админ умеет удалять пользователей
SuperUserBro.createUser("Older111 Brother", "BlaBla");//Проверяем, если после предыдущих манипуляций СуперЮзер заведет нового пользователя, увидим ли мы это в общем массиве
console.log(admin.getCreatedUsers());//Новый юзер есть!


