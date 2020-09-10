//fetcher
let url = new URLSearchParams(window.location.search);
//page skal være = det her hvis linker findes eller 1
let page = url.get("page") ? url.get("page") : 1;

let prevPage, nextPage;

let bb8 = document.querySelector("#bb8");

// ────────────────────────────────────────────────────────────────────────────────
//referer til links som skal Bladre frem og tilbage i api'et
let nextLink = document.querySelector(".nextLink");
nextLink.href = `?page=${parseInt(page)+1}`;

let prevLink = document.querySelector(".prevLink");
prevLink.href = `?page=${parseInt(page) - 1}`;


fetch(`https://swapi.dev/api/people?page=${page}`)
  //omformatere til Json
  .then(res => res.json())
  //griber data'en og gør noget ved den
  .then(function(data) {
    bb8.remove();
    //console.log(data);
    //runder op til det næste hele tal
    //dividere objekterne med antal pr side
    let pages = Math.ceil(data.count / 10);

    //bladre frem og tilbage i api'et
    // ternery operator
    nextPage = page >= pages ? pages : parseInt(page) + 1;
    prevPage = page <= 1 ? 1 : parseInt(page) - 1;
    //fortæller at linket i html skal bladre
    nextLink.href = `?page=${nextPage}`;
    prevLink.href = `?page=${prevPage}`;

    //bladre frem til sidste side
    // ternery operator
    /* page = page >= maxPages ? maxPages : parseInt(page) + 1;
     next.href = `?page=${page}`;*/

    //samme som ovenover, som en betingelse
    /*if (parseInt(page) >= pages) {
        page = pages;
    } else {
        page = parseInt(page) + 1;
    }
    next.href = `?page=${page}`;*/


    // ────────────────────────────────────────────────────────────────────────────────


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
document.querySelector("button").addEventListener("click", function() {
  let plasma = document.querySelector(".plasma");
  if (plasma.style.height === "0vw") {
    plasma.style.height = "28vw";
  } else {
    plasma.style.height = "0vw";
  }

});
console.log(".plasma");