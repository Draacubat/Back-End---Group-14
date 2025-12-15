import { Books } from "./src/models/books";
import { Staff } from "./src/models/staff";
import { Users } from "./src/models/users";

const bookSeed = [
    {
        name: {
            first: "John",
            last: "Smith",
        },
        title: "The John Smith Story",
        genre: "Autobiography",
        location: "Turku",
        available: true,
    },
    {
        name: {
            first: "Antero",
            last: "Mertaranta",
        },
        title: "Kamalaa, komisario! Kamalaa!",
        genre: "Mystery",
        location: "Raisio",
        available: false,
    },
    {
        name: {
            first: "",
            last: "",
        },
        title: "",
        genre: "",
        location: "Kaarina",
        available: false,
    },
];

const staffSeed = [
    {
        name: {
            first: "Maarit",
            last: "Nuppula",
        },
        email: "m.nuppula@kirja.eu",
        password: "miekkakala",
    },
    {
        name: {
            first: "Gunnar",
            last: "Nykvist",
        },
        email: "Gunnar.N@kirjasto.fi",
        password: "kalasana1",
    },
    {
        name: {
            first: "Jake",
            last: "Määkkylä",
        },
        email: "jake.maeaekkylae@books.com",
        password: "12346",
    },
];

const userSeed = [
    {
        name: {
            first: "Matti",
            last: "Meikäläinen",
        },
        email: "m.m@mnm.com",
        password: "nomnomnom",
    },
    {
        name: {
            first: "Maija",
            last: "Meikäläinen",
        },
        email: "maija.meikaelaeinen",
        password: "!xylophoni1337",
    },
    {
        name: {
            first: "Antti",
            last: "Nyymi",
        },
        email: "antti.nyymi@fake-emails.net",
        password: "thisPasswordIsNotRealNorIsThisUserAccount",
    },
];

Books.insertMany(bookSeed);
Staff.insertMany(staffSeed);
Users.insertMany(userSeed);
