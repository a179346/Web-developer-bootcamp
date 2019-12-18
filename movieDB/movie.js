var movies = [
    {
        title: "In Bruges",
        star: 5,
        seen: true
    },
    {
        title: "Frozen",
        star: 4.5,
        seen: false
    },
    {
        title: "Mad Max Fury Road",
        star: 5,
        seen: true
    },
    {
        title: "Les Miserables",
        star: 3.5,
        seen: false
    }
];

movies.forEach(function (movie) {
    var verb = movie["seen"] ? "have seen " : "have not seen ";
    var line = "You " + verb + "\"" + movie["title"] + "\" - " + movie["star"] + " stars";
    console.log(line);
});