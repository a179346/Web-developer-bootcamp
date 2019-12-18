$("ul").on("click", "li", function () {
    $(this).toggleClass("done");
});

$("ul").on("click", "span", function (e) {
    e.stopPropagation();
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
});

$("input[type='text']").keypress(function (e) {
    if (e.which === 13) {
        newTodo($(this).val());
        $(this).val("");
    }
});

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
});

function newTodo(task) {
    $("#todoList").append("<li class=\"task\"><span><i class=\"fas fa-trash-alt\"></i></span>" + task + "</li>");
};