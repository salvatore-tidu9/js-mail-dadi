var mail = ["user1@mail.com", "user2@mail.com", "user3@mail.com", "user4@mail.com", "user5@mail.com", "user6@mail.com"];

// console.log(mail);


var user_mail = prompt("Inserisci la tua mail");

// console.log(user_mail);


var new_mail = false;


for (var i = 0; i < mail.length; i++) {

    // console.log(mail[i]);

    if (user_mail == mail[i]) {

        new_mail = true;
    }
}


if (new_mail == true) {

    alert("Accesso consentito !");
}

else {
    
    alert("Acesso negato !");
}


