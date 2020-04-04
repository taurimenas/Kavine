let btn = document.getElementById("btn1");
let form = document.querySelector("#forma");
let selectedOption;

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let saskaitosSuma = +(form["input1"].value);
    let zmoniuSkaicius = +(form["input2"].value);

    let rez = Math.round(saskaitosSuma / zmoniuSkaicius * (parseInt(selectedOption))) / 100;
    if (!saskaitosSuma) {
        alert(`Neįvesta sąskaitos suma.`);
    } else if (selectedOption == "" || !selectedOption) {
        alert(`Nepasirinktas aptarnavimas.`);
    } else if (!zmoniuSkaicius) {
        alert(`Neįvestas žmonių skaičius`);
    } else {
        alert(`Vienas žmogus turėtų palikti ${rez} Eur arbatpinigių.`);
    }


})

form.addEventListener("change", function(e) {
    var select = form["select"];
    selectedOption = select[select.selectedIndex].value;
});