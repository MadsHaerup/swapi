fetch("https://swapi.dev/api/people/")
    .then(res => res.json())
    .then(function(data) {
        let template = document.querySelector("#template");
        let starWarsList = document.querySelector("#starWarsList");
        data.results.forEach(function(result) {
            let clone = template.content.cloneNode(true);
            clone.querySelector(".listItem").innerText = result.name
            starWarsList.appendChild(clone);
        });
    });