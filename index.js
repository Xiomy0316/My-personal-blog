const progress_bar = document.getElementById("welcome");
setTimeout(function () {
    progress_bar.classList.add("close");
    document.getElementById("images-pokemons").style.display = "flex";
    visivilityCard(pokemons);
}, 9000);