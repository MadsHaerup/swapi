let url = new URLSearchParams(window.location.search);
let bb8 = document.querySelector("#bb8");
let page = url.get("page") ? url.get("page") : 1;
let search = url.get("search") ? url.get("search") : 1;
let prevPage, nextPage;
let nextLink = document.querySelector(".nextLink");
nextLink.href = `?search=&page=${parseInt(search)+1}`;
let prevLink = document.querySelector(".prevLink");
prevLink.href = `?search=&page=${parseInt(search) - 1}`;



if (url.get("keyword")) {
    fetch(`https://swapi.dev/api/people?search=${url.get("keyword")}&page=${page}`)
        .then(res => res.json())
        .then(function(data) {
            console.log(data)
            bb8.remove();
            let template = document.querySelector("#template");
            //referere til det sted vi ligger dataen ind i
            let starWarsList = document.querySelector("#starWarsList");
            //array'et hedder results
            data.results.forEach(function(result) {
                let searches = Math.ceil(data.count / 10);
                //console.log(result.url);
                //splitter en string op i et array efter hvert /... split("/") = splitter efter hvert/ .. split(" ") = splitter efter hvert mellemrum
                //split laver en string om til et array
                let array = result.url.split("/");
                //console.log(array);
                //får det næst sidst element i array'et
                let id = array[array.length - 2];
                console.log(id);

                nextPage = search >= searches ? searches : parseInt(search) + 1;
                prevPage = search <= 1 ? 1 : parseInt(search) - 1;
                //fortæller at linket i html skal bladre
                nextLink.href = `?search=&page=${nextPage}`;
                prevLink.href = `?search=&page=${prevPage}`;

                //kloner hvert data objekt
                let clone = template.content.cloneNode(true);
                //får fat i elementet data'en skal puttes ind i
                clone.querySelector(".listItem").innerText = result.name
                    //linker til den nye side
                clone.querySelector(".listItem").href = `/search.html?people=${url.get("keyword")}`;
                clone.querySelector(".listItem").href = `/character-sheet.html?id=${id}`;

                //Tager fat i listen(starWarsList) og putter klonen ind i den
                starWarsList.appendChild(clone);
            });

        });

}