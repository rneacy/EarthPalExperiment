import { Email } from "./smtp"

// Fisher-Yates shuffle
export function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export function email(surveyData) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "earthpalinc@gmail.com",
        Password: "PfKW499rfJkRTYa",
        To: "earthpalinc@gmail.com",
        From: "earthpalinc@gmail.com",
        Subject: "Results for: " + surveyData.name,
        Body: JSON.stringify(surveyData)
    }).then (
        message => console.log(message)
    );
}