let url = new URLSearchParams(window.location.search);
//console.log(url);
let deathstar = document.querySelector(".deathStar");
if (url.has("id")) {
  //console.log(url.get("id"));
  fetch(`https://swapi.dev/api/people/${url.get("id")}`)
    .then(res => res.json())
    .then(function(data) {
      console.log(data);
      deathstar.remove();
      document.querySelector(".name").innerText = data.name
      document.querySelector(".height").innerText = data.height
      document.querySelector(".gender").innerText = data.gender
      document.querySelector(".hair_color").innerText = data.hair_color
      document.querySelector(".age").innerText = data.mass
      document.querySelector(".birth_year").innerText = data.birth_year

    });

  fetch(`http://swapi.dev/api/planets/${url.get("id")}`)
    .then(res => res.json())
    .then(function(data) {
      console.log(data);
      document.querySelector(".homeworld").innerHTML = data.name

    });

  fetch(`http://swapi.dev/api/starships/${url.get("id")}`)
    .then(res => res.json())
    .then(function(data) {
      console.log(data);
      document.querySelector(".starship").innerHTML = data.name
    });



}