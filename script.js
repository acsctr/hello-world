addEventListener("DOMContentLoaded", (event) => {
    function displayDate() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date().toLocaleDateString('fr-FR', options);
    }
    let datediv = document.getElementById("date");
    let date = displayDate();
    datediv.innerHTML = date;
});


