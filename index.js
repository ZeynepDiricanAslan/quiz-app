function start() {
    console.log("zeynep");
    const myElement = document.getElementById("username");
    console.log(myElement.value);
    if (myElement.value.trim() !== ""  ) {
        console.log("değer var")
        // başka bir sayfaya yönlendirme
        location.href="/quiz.html"; 

    } else {
        // console.log("değer yok");
        alert("Please enter a username")
    }
}