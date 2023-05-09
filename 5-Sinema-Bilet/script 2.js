const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved)");

container.addEventListener("click", function (e) {
    // console.log(e.target);

    if (e.target.classList.contains("seat") && !e.target.classList.contains("reserved")) {
        e.target.classList.toggle("selected");

        calculateTotal();

        // console.log(price);
        //console.log(selectedSeatCount);


    }
});

select.addEventListener("change", (e) => {
    calculateTotal();
});

function calculateTotal() {
    const selectedSeats = container.querySelectorAll(".seat.selected");

    const selectedSeatsArr = [];
    const seatsArr = [];

    // spread operatör
    // console.log(...selectedSeats);

    selectedSeats.forEach(function (seat) {
        selectedSeatsArr.push(seat);
    });

    seats.forEach(function (seat) {
        seatsArr.push(seat);
    });

    // [1,3,5]
    let selectedSeatIndexs = selectedSeatsArr.map(function (seat) {
        return seatsArr.indexOf(seat);
    });

    //console.log(selectedSeatIndexs);


    let selectedSeatCount = selectedSeats.length;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;


    saveToLocalStorage(selectedSeatIndexs);
}

function saveToLocalStorage(indexs) {
    localStorage.setItem("selectedSeats", JSON.stringify(indexs));
    localStorage.setItem("selectedMovieIndex", JSON.stringify(select.selectedIndex));
}