
function CallUser(){
    var user = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    return user;
}


export default CallUser;