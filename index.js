// çağırıldığında username "id"li html elemanını dom ile yakalayıp değerini(value) kontrol eden; değer var ise başka bir sayfaya yönlendiren, yoksa ekrana değer girilmesi için uyarı çıkartan bir fonksiyon yazınız. 


function start() {
    console.log("zeynep");
    const myElement = document.getElementById("username");
    console.log(myElement.value);
    if (myElement.value.trim() !== "") {
        console.log("değer var")
        // search parametresiyle başka sayfaya yönlendirme
        location.href = `/quiz.html?username=${myElement.value.trim()}`;

        // başka bir sayfaya yönlendirme
        // location.href="/quiz.html"; 

    } else {
        // console.log("değer yok");
        alert("Please enter a username")
    }

}
