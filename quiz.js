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
