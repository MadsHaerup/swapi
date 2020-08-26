//fetcher
fetch("https://swapi.dev/api/people")
    //omformatere
    .then(res => res.json())
    //griber data'en og gør noget ved den
    .then(function(data) {
        console.log(data);
        //refere til vores template
        let template = document.querySelector("#template");
        //referere til det sted vi ligger dataen ind i
        let starWarsList = document.querySelector("#starWarsList");
        //array'et hedder results
        data.results.forEach(function(result) {
            console.log(result.name);
            //kloner hvert data objekt
            let clone = template.content.cloneNode(true);
            //får fat i elementet data'en skal puttes ind i
            clone.querySelector(".listItem").innerText = result.name
                //Tager fat i listen(starWarsList) og putter klonen ind i den
            starWarsList.appendChild(clone);
        });
    });