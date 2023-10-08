const db = "database files/loginfo files/ loginfo.json";

fetch(db)
    .then(responst => response.json())
    .then(data => {
        const alist = document.getElementById("alist");
        data.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            alist.appendChild(li);
        })
    })