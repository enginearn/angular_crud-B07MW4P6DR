const sites = [];

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

    sites.push(siteInfo);

    document.getElementById("siteName").value = "";
    document.getElementById("siteURL").value = "";
}

function readData() {
    const list = document.getElementById("dataList");
    list.innerHTML = "";
    for (let i = 0; i < sites.length; i++) {
        list.innerHTML += `<li>
                            ${sites[i].id} ${sites[i].name} ${sites[i].url}
                            </li>`;
    }
}

function updateData() {
    const updateId = document.getElementById("updateId").value;
    const updateName = document.getElementById("updateSiteName").value;
    const updateURL = document.getElementById("updateSiteURL").value;
    if (updateId === "" || updateName === "" || updateURL === "") {
        return;
    }
    sites[Number(updateId)] = {
        name: updateName,
        url: updateURL
    };

    document.getElementById("updateId").value = "";
    document.getElementById("updateSiteName").value = "";
    document.getElementById("updateSiteURL").value = "";
}

function deleteData() {
    const deleteId = document.getElementById("deleteId").value;
    if (deleteId === "") {
        return;
    }
    sites.splice(Number(deleteId), 1);
    document.getElementById("deleteId").value = "";
}
