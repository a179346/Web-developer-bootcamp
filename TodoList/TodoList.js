var Todos = [];
window.setTimeout(function () {
    var cmd = prompt("What do you want to do?");
    while (cmd.indexOf("quit") === -1) {
        if (cmd.indexOf("new") !== -1) {
            var task = prompt("What do you want to add to todo list?");
            Todos.push(task);
            console.log(task + " added to list");
        }
        else if (cmd.indexOf("list") !== -1) {
            console.log("**********");
            Todos.forEach(function (todo, index) {
                console.log(index + ": " + todo);
            })
            console.log("**********");
        }
        else if (cmd.indexOf("delete") !== -1) {
            var deleteTodo = prompt("What do you want to remove?");
            Todos.forEach(function (todo, index) {
                if (todo === deleteTodo) {
                    Todos.splice(index, 1);
                }
            });
        }
        cmd = prompt("What do you want to do?");
    }
}, 500);