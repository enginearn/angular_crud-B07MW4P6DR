function createData() {
    const newSiteName = document.getElementById("siteName").value;
    const newSiteURL = document.getElementById("siteURL").value;
    if (newSiteName === "" || newSiteURL === "") {
        return;
    }

    const siteInfo = {
        name: newSiteName,
        url: newSiteURL
    };

    fetch("http://localhost:3000/sites", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(siteInfo)
    })
    .then(() => {
        document.getElementById("siteName").value = "";
        document.getElementById("siteURL").value = "";
    })
    .catch((err) => {
        console.log(err);
    })
}

function readData() {
    const list = document.getElementById("dataList");
    list.innerHTML = "";
    fetch("http://localhost:3000/sites")
    .then((res) => {
        res.json();
    })
    .then((sites) => {
    for (let i = 0; i < sites.length; i++) {
        if (sites[i].length && sites[i].length) {
            list.innerHTML += `<li>
            ${sites[i].id} ${sites[i].name} ${sites[i].url}
            </li>`;
        }
    }
})
.catch((err) => {
    console.log(err);
});
}

function updateData() {
    const updateId = document.getElementById("updateId").value;
    const updateName = document.getElementById("updateSiteName").value;
    const updateURL = document.getElementById("updateSiteURL").value;
    if (updateId === "" || updateName === "" || updateURL === "") {
        return;
    }

    const siteInfo = {
        name: updateName,
        url: updateURL
    }

    fetch(`http://localhost:3000/sites/${updateId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(siteInfo)
    })
    .then(() => {
        document.getElementById("updateId").value = "";
        document.getElementById("updateSiteName").value = "";
        document.getElementById("updateSiteURL").value = "";
    })
    .catch((err) => {
        console.log(err);
    })

}

function deleteData() {
    const deleteId = document.getElementById("deleteId").value;
    if (deleteId === "") {
        return;
    }

    fetch(`http://localhost:3000/sites/${deleteId}`, {
        method: "DELETE"
    })
    .then(() => {
        document.getElementById("deleteId").value = "";
    })
    .catch((err) => {
        console.log(err);
    })
}
