var user_mail = prompt("Inserisci la tua mail");

console.log(user_mail);

var mail = ["user1@mail.com", "user2@mail.com", "user3@mail.com", "user4@mail.com", "user5@mail.com", "user6@mail.com"];

console.log(mail);

mail.push("user7@mail.com");


for (var i = 0; i < mail.length; i++) {

    console.log(mail[i]);

    if (user_mail == mail[i]) {

        alert("Accesso consentito !");
        
    }

    else if (user_mail != mail[i]) {

        alert("Accesso negato !");
    }

}



