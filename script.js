// Animação das Imagens

function transitionimg () {
    let count =1;
    document.getElementById("radio1").checked = true

    setInterval(function() {
        nextImage();
    },4000)

    function nextImage() {
        count++;
        if(count>4) {
            count = 1;
        }

        document.getElementById("radio"+count).checked = true;
    }
}
transitionimg ();

// Contador de Dias
function countdaystogether() {
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minsEl = document.getElementById("mins");
    const secondsEl = document.getElementById("seconds");

    const togetherby = "23 Jan 2022";

    function countforward() {
        const dateinitial = new Date(togetherby);
        const currentDate = new Date();

        const totalSeconds = (currentDate - dateinitial) / 1000;

        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;

        daysEl.innerHTML = days;
        hoursEl.innerHTML = formatTime(hours);
        minsEl.innerHTML = formatTime(mins);
        secondsEl.innerHTML = formatTime(seconds)
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    countforward();

    setInterval(countforward, 1000);

}
countdaystogether();


