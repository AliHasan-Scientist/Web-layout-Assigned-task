const users = document.querySelector("#user-table >tbody");
console.log(users);

function loadUsers() {
    const request = new XMLHttpRequest();
    request.open('get', '../data/Users.json');
    request.onload = () => {
        try {
            const json = JSON.parse(request.responseText);
            IterateUsers(json);
        }
        catch (e) {
            console.warn("could not load users")
        }

    };
    request.send();

}
function IterateUsers(json) {

    while (users.firstChild) {
        users.removeChild(users.firstChild);
    }
    json.forEach(element => {
        const tr = document.createElement("tr")
        element.forEach((cell) => {
            const td = document.createElement("td");
            td.textContent=cell;
            tr.appendChild(td)
        })
        users.appendChild(tr);

    });
}
document.addEventListener("DOMContentLoaded", () => {

})
loadUsers();