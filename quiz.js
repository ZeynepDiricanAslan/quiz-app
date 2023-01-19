function control_user() {
    let search = window.location.search
    console.log(search);
    let split_search = search.split("?username=")
    console.log(split_search);
    username = split_search[1];
    console.log("2", username);
    if (username === "" || username === undefined) {
        console.log("değer yoksa")
        // search parametresiyle başka sayfaya yönlendirme
        location.href = `/index.html`;

        // başka bir sayfaya yönlendirme
        // location.href="/quiz.html"; 


    } else {
        // kullanıcının ismini ekrana yazdırdık
        document.getElementById("user").innerText = username
    }
}
let username
console.log("1", username);

function handleMenu(menuTipi) {
    console.log("tıklandı", menuTipi);
    const myElement = document.getElementById(menuTipi === "sağ" ? "menu-icon2" : "menu-icon1")
    console.log(myElement);
    if (menuTipi === "sağ") {
        // document.getElementById("myDIV").style.display = "none";
        myElement.style.display = "none";
        document.getElementById("sidebar").style.display = "block";

    } else {
        document.getElementById("menu-icon2").style.display = "block";

        document.getElementById("sidebar").style.display = "none";


    }


}

const questions = [
    {
        question: "1-What does HTML stand for?",
        options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Lorem, ipsum dolor.", "Lorem ipsum dolor sit amet"],
        answer: 1
    },
    {
        question: "2-What does HTML stand for?",
        options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Lorem, ipsum dolor.", "Lorem ipsum dolor sit amet"],
        answer: 1
    },
    {
        question: "3-What does HTML stand for?",
        options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Lorem, ipsum dolor.", "Lorem ipsum dolor sit amet"],
        answer: 1
    },

]
function displayQuestion(index) {
    document.getElementById("question").innerText = questions[index].question
    document.getElementById("option1").innerText = questions[index].options[0]
    document.getElementById("option2").innerText = questions[index].options[1]
    document.getElementById("option3").innerText = questions[index].options[2]
    document.getElementById("option4").innerText = questions[index].options[3]

    if (index === 0) {
        const prev = document.getElementById("prev")
        prev.classList.remove("quiz-btn")
        prev.classList.add("disabled-quiz-btn")
        prev.disabled = true

    } else {
        const prev = document.getElementById("prev")
        if (prev.classList.contains("disabled-quiz-btn")) {
            prev.classList.remove("disabled-quiz-btn")
            prev.classList.add("quiz-btn")
            prev.disabled = false
        }

    }
}

displayQuestion(0)
let mevcutSoru = 0

function soruyuArttır() {
    displayQuestion(mevcutSoru + 1)
    mevcutSoru = mevcutSoru + 1
}

function soruyuAzalt() {
    displayQuestion(mevcutSoru - 1)
    mevcutSoru = mevcutSoru - 1
}