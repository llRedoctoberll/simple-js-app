var repository = [
    { name: "Venonat", height: 1.0, types: ["bug", "poison"] },
    { name: "Arbok", height: 3.5, types: ["poison"] },
    { name: "Golbat", height: 1.6, types: ["flying", "poison"] },
    { name: "Diglett", height: 0.2, types: ["ground"] },
];

for (var item = 0; item < repository.length; item++) {
    var size;
    if (repository[item].height > 1) {
        size = "Large Pokemon";
    } else {
        size = "Small Pokemon";
    }

    var result;
    for (var typeItem = 0; typeItem < repository[item].types.length; typeItem++) {
        if (repository[item].types[typeItem] == "grass") {
            result = '<span style="color:green;"> ';
        } else if (repository[item].types[typeItem] == "fire") {
            result = '<span style="color:red;"> ';
        } else if (repository[item].types[typeItem] == "psychic") {
            result = '<span style="color:yellow;"> ';
        } else if (repository[item].types[typeItem] == "poison") {
            result = '<span style="color:rgb(106, 42, 106);"> ';
        }
    }
    document.write(
        '<div class="box">' +
        repository[item].name +
        "(height: " +
        repository[item].height +
        "m" +
        ")" +
        "<br>" +
        size +
        result +
        "<br>" +
        repository[item].types +
        "<br>" +
        "</div>"
    );
}