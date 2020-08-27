//fetcher
fetch("https://swapi.dev/api/people")
    //omformatere
    .then(res => res.json())
    //griber data'en og gør noget ved den
    .then(function(data) {
        //console.log(data);
        //refere til vores template
        let template = document.querySelector("#template");
        //referere til det sted vi ligger dataen ind i
        let starWarsList = document.querySelector("#starWarsList");
        //array'et hedder results
        data.results.forEach(function(result) {
            //console.log(result.url);
            //splitter en string op i et array efter hvert /... split("/") = splitter efter hvert/ .. split(" ") = splitter efter hvert mellemrum
            //split laver en string om til et array
            let array = result.url.split("/");
            //console.log(array);
            //får det næst sidst element i array'et
            let id = array[array.length - 2];
            console.log(id);
            //kloner hvert data objekt
            let clone = template.content.cloneNode(true);
            //får fat i elementet data'en skal puttes ind i
            clone.querySelector(".listItem").innerText = result.name
                //linker til den nye side
            clone.querySelector(".listItem").href = `/character-sheet.html?id=${id}`;

            //Tager fat i listen(starWarsList) og putter klonen ind i den
            starWarsList.appendChild(clone);
        });
    });

// ────────────────────────────────────────────────────────────────────────────────
// vis / skjul lyssværdet 
document.addEventListener("click", function() {
    let plasma = document.querySelector(".plasma");
    if (plasma.style.height === "0vw") {
        plasma.style.height = "28vw";
    } else {
        plasma.style.height = "0vw";
    }
});