const beamer = {
    name: "Beamer",
    species: "cat",
    nicknames: [
        "Fatty",
        "Chubbs",
        "Stupid Cat",
        "Moldy cheeto"
    ],
    age: "unknown",
    // Actions
    beg: () => { window.alert("MEOW!")},
    eat: () => { window.alert("Eating food. Yum.")},
    sleep: () => { window.alert("Fully asleep. Zzz")},
    // Toys!
    favoriteToys: [],
    play: function(toy) {
        if (toy === "plastic bag") {
            this.favoriteToys.push(toy);
        } else if (toy === "cardboard") {
            this.favoriteToys.push(toy);
        } else window.alert("Not my favorite toy ...")
    }
}
