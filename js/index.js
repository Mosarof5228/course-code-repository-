function loadUser2() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data=>outsideFunc(data))
}

function outsideFunc(data) {
   const ol= document.getElementById("user-contianer");
    for (const user of data) {
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ol.appendChild(li);
    }
    
}