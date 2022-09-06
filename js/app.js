function loadData() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(responce => responce.json())
        .then(data => console.log(data));
}

function loadUser() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => subFunction(data));
}

function subFunction(data) {
    console.log(data);
}