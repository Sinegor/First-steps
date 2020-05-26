let message = prompt("Введите своё имя!")
switch(true){
    case (message=="Админ"):
        let parole = prompt("Введите пароль!");
        switch (true){
            case(parole=="Я главный"):
                alert("Привет! Проходи.");
                break;
            case (parole==null):
                alert("Отмена!");
                break;
            default:
                alert("Неверный пароль!");
                break;
                }    
        break;
    case (message ==null):
        alert("Отмена!")
        break;
    default:
        alert("Я вас не знаю. Уходите!");
}

