
// Navbar
const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', () => {
    links.classList.toggle('show-links')
})


// Reviews
const reviews = [
    {
        id: 1,
        name: "Petr Novák",
        img: "faces/face1.png",
        text: "Barbershop mi doporučil kamarád a musím říct, že jsem nadšený. Výborná atmosféra a skvělý styl účesů."
    },
    {
        id: 2,
        name: "Jakub Procházka",
        img: "faces/face2.png",
        text: "Už jsem byl v několika barbershopech, ale tenhle je prostě top. Skvělý personál a výborné služby."
    },
    {
        id: 3,
        name: "Jan Dvořák",
        img: "faces/face3.png",
        text: "Od první návštěvy jsem si zamiloval jejich přístup a styl. Všechny mé účesy jsou od té doby z této barbershopu."
    },
    {
        id: 4,
        name: "Martin Hájek",
        img: "faces/face4.png",
        text: "Vždy se těším na návštěvu této barbershopu. Výborné střihy vlasů a výborný pocit."
    }
];

const reviews2 = [
    {
        id: 5,
        name: "David Vacek",
        img: "faces/face5.png",
        text: "Chtěl jsem něco nového a barbershop mi poskytl úžasné rady. Nyní mám účes, který mě baví a vydrží."
    },
    {
        id: 6,
        name: "Marek Vlček",
        img: "faces/face6.png",
        text: "Velmi profesionální přístup a skvělá práce. Určitě se sem vrátím."
    },
    {
        id: 7,
        name: "Lukáš Zajíček",
        img: "faces/face7.png",
        text: "Vždy jsem měl problém s nalezením správného barbera, ale tato barbershop je tím pravým pro mě. Vynikající práce a skvělá atmosféra."
    },
    {
        id: 8,
        name: "Pavel Černý",
        img: "faces/face8.png",
        text: "Byl jsem překvapen, jak dobře mi poradili s výběrem účesu, který mi naprosto sedl. Díky barbershopu jsem si s účesem jistý."
    }
];

const reviews3 = [
    {
        id: 9,
        name: "Tomáš Kubeš",
        img: "faces/face9.png",
        text: "Vždycky jsem byl trochu nervózní při stříhání vlasů, ale v této barbershopu jsem se cítil velmi uvolněně. Skvělá práce a skvělá atmosféra."
    },
    {
        id: 10,
        name: "Petr Šimek",
        img: "faces/face10.png",
        text: "Byl jsem mile překvapen, jak rychle a přesně můj barber dokázal moje vlasy ostříhat. Budu se sem vracet pravidelně."
    },
    {
        id: 11,
        name: "Ondřej Křivka",
        img: "faces/face11.png",
        text: "Jsem spokojený se svým účesem a celkovou službou v této barbershopu. Určitě se sem budu vracet."
    },
    {
        id: 12,
        name: "Michal Vondráček",
        img: "faces/face12.png",
        text: "Byl jsem zaskočen, jak dokázali změnit můj účes tak, aby mi sedl naprosto dokonale. Skvělá práce od skvělých barberů."
    }
];


// select items
const img = document.querySelector('#img');
const reviewText = document.querySelector('#text');
const author = document.querySelector('#name')

const img2 = document.querySelector('#img2');
const reviewText2 = document.querySelector('#text2');
const author2 = document.querySelector('#name2')

const img3 = document.querySelector('#img3');
const reviewText3 = document.querySelector('#text3');
const author3 = document.querySelector('#name3')

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// set starting item
let currentItem = 0;
let currentItem2 = 0;
let currentItem3 = 0;

// load initial item
window.addEventListener("DOMContentLoaded", () => {
    showPerson(currentItem);
    showPerson2(currentItem2);
    showPerson3(currentItem3);
});


// define function showPerson

// first array
function showPerson(person) {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    reviewText.textContent = item.text;
};
// second array
function showPerson2(person2) {
    const item2 = reviews2[currentItem2];
    img2.src = item2.img;
    author2.textContent = item2.name;
    reviewText2.textContent = item2.text;
};
// third array
function showPerson3(person3) {
    const item3 = reviews3[currentItem3];
    img3.src = item3.img;
    author3.textContent = item3.name;
    reviewText3.textContent = item3.text;
};

// show next person
nextBtn.addEventListener('click', () => {
    currentItem++;
    currentItem2++;
    currentItem3++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    if (currentItem2 > reviews2.length - 1) {
        currentItem2 = 0;
    }
    if (currentItem3 > reviews3.length - 1) {
        currentItem3 = 0;
    }
    showPerson(currentItem);
    showPerson2(currentItem2);
    showPerson3(currentItem3);
});

//show previous person
prevBtn.addEventListener('click', () => {
    currentItem--;
    currentItem2--;
    currentItem3--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    if (currentItem2 < 0) {
        currentItem2 = reviews2.length - 1;
    }
    if (currentItem3 < 0) {
        currentItem3 = reviews3.length - 1;
    }
    showPerson(currentItem);
    showPerson2(currentItem2);
    showPerson3(currentItem3);
})

