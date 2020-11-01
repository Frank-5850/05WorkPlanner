$(document).ready(function(){

// Variable for current date
const now = moment().format('MMMM Do YYYY');

// Attached the variable to the ID to display the current date
$("#currentDay").text(now);

// Created an array of integers to match with hours
const times = [9, 10, 11, 12, 13, 14, 15, 16, 17]
const currentHour = moment().hour()

function hour (times) {
        if (currentHour === 9) {
            $("#9").addClass("alert alert-danger")
        } else if (currentHour > 9){
            $("#9").addClass("alert alert-primary")
            $("#9").attr("disabled",true)
        } else if ( currentHour < 9){
            $("#9").addClass("alert alert-warning")
        }

        if (currentHour === 10) {
            $("#10").addClass("alert alert-danger")
        } else if (currentHour > 10){
            $("#10").addClass("alert alert-primary")
            $("#10").attr("disabled",true)
        } else if ( currentHour < 10){
            $("#10").addClass("alert alert-warning")
        }

        if (currentHour === 11) {
                $("#11").addClass("alert alert-danger")
        } else if (currentHour > 11){
                $("#11").addClass("alert alert-primary")
                $("#11").attr("disabled",true)
        } else if ( currentHour < 11){
                $("#11").addClass("alert alert-warning")
        }
        
        if (currentHour === 12) {
            $("#12").addClass("alert alert-danger")
        } else if (currentHour > 12){
            $("#12").addClass("alert alert-primary")
            $("#12").attr("disabled",true)
        } else if ( currentHour < 12){
            $("#12").addClass("alert alert-warning")
        }

        if (currentHour === 13) {
            $("#13").addClass("alert alert-danger")
        } else if (currentHour > 13){
            $("#13").addClass("alert alert-primary")
            $("#13").attr("disabled",true)
        } else if ( currentHour < 13){
            $("#13").addClass("alert alert-warning")
        }

        if (currentHour === 14) {
            $("#14").addClass("alert alert-danger")
        } else if (currentHour > 14){
            $("#14").addClass("alert alert-primary")
            $("#14").attr("disabled",true)
        } else if ( currentHour < 14){
            $("#14").addClass("alert alert-warning")
        }

        if (currentHour === 15) {
            $("#15").addClass("alert alert-danger")
        } else if (currentHour > 15){
            $("#15").addClass("alert alert-primary")
            $("#15").attr("disabled",true)
        } else if ( currentHour < 15){
            $("#15").addClass("alert alert-warning")
        }

        if (currentHour === 16) {
            $("#16").addClass("alert alert-danger")
        } else if (currentHour > 16){
            $("#16").addClass("alert alert-primary")
            $("#16").attr("disabled",true)
        } else if ( currentHour < 16){
            $("#16").addClass("alert alert-warning")
        }

        if (currentHour === 17) {
            $("#17").addClass("alert alert-danger")
        } else if (currentHour > 17){
            $("#17").addClass("alert alert-primary")
            $("#17").attr("disabled",true)
        } else if ( currentHour < 17){
            $("#17").addClass("alert alert-warning")
        }
 }
// change all if statements to match "12"
// create a function that prints from local storage
hour()

$("form").on("submit", function (e) {
    e.preventDefault()

    const time = e.target.querySelector("input").getAttribute("id")
    const text = e.target.querySelector("input").value

    window.localStorage.setItem(time, text)
  })
})