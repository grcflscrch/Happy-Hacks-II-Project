const db = "database files/loginfo files/ loginfo.json";

fetch(db)
    .then(response => response.json())
    .then(data => {
        const thelist = document.getElementById("thelist");
        data.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            thelist.appendChild(li);
        })
    })