var mail = ["user1@mail.com", "user2@mail.com", "user3@mail.com", "user4@mail.com", "user5@mail.com", "user6@mail.com"];

console.log(mail);


for (var i = 0; i < mail.length; i++) {

    console.log(mail[i]);

}


var user_mail = prompt("Inserisci la tua mail");

console.log(user_mail);


if ((user_mail == "user1@mail.com") || (user_mail == "user2@mail.com") || (user_mail == "user3@mail.com") || (user_mail == "user4@mail.com") || (user_mail == "user5@mail.com") || (user_mail == "user6@mail.com")) {
    
    alert("Accesso consentito !");
}

else if ((user_mail != "user1@mail.com") || (user_mail != "user2@mail.com") || (user_mail != "user3@mail.com") || (user_mail != "user4@mail.com") || (user_mail != "user5@mail.com") || (user_mail != "user6@mail.com")) {

    alert("Accesso negato !");
}