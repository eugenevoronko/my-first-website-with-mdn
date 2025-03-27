const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/geese-2709757_1280.jpg") {
        myImage.setAttribute("src", "images/il_794xN.5740777614_sflc.webp");
    } else {
        myImage.setAttribute("src", "images/geese-2709757_1280.jpg");
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Doublegoose is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Doublegoose is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
})
