$(document).ready(function(){

// Variable for current date
const now = moment().format('MMMM Do YYYY');

// Attached the variable to the ID to display the current date
$("#currentDay").text(now);

const times = [9, 10, 11, 12, 13, 14, 15, 16, 17]




console.log(times)
$("form").on("submit", function (e) {
    e.preventDefault()

    const time = e.target.querySelector("input").getAttribute("id")
    const text = e.target.querySelector("input").value

    window.localStorage.setItem(time, text)
  })
})