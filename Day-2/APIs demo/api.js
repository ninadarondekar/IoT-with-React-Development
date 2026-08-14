async function getUsers() {
    try {
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
    data.forEach(element => {
        console.log(element.name);
    });
}