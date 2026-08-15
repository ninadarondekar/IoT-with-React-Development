async function getUsers() {
    try {
        // fetch users
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        showUsers(data);
        console.log(data);

    } catch (error) {
        console.log("Something went wrong:", error);
    } finally {
        console.log("Promises are working");
    }
}

getUsers();

function showUsers(data) {
    // empty instance of existing array (forEach)
    data.forEach(item => {
        
        let h1 = document.createElement("h1");
        h1.textContent = `${item.username}`;
        h1.style.color = "red";
        document.body.appendChild(h1);
       
        let p = document.createElement('p');
        p.textContent = `${item.email}`;
        document.body.appendChild(p);

        let h2 = document.createElement('h2');
        h2.textContent = `${item.name}`;
        document.body.appendChild(h2);

        let h3 = document.createElement('h3');
        h3.textContent = `${item.id}`;
        document.body.appendChild(h3);

        let span = document.createElement('span');
        span.textContent = `${item.address.city} - ${item.address.street}`;
        document.body.appendChild(span);
        span.style.color = "blue";
    });
}