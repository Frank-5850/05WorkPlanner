$(document).ready(function(){

// Variable for current date
const now = moment().format('MMMM Do YYYY');

// Attached the variable to the ID to display the current date
$("#currentDay").text(now);

// Created an array of integers to match with hours
const times = [9, 10, 11, 12, 13, 14, 15, 16, 17]
const currentHour = 9


function hour (times) {
        if (currentHour === 9) {
            $("#9").addClass("alert alert-info")
        } else if (currentHour > 9){
            $("#9").addClass("alert alert-danger")
            $("#9").attr("disabled",true)
        } else if ( currentHour < 9){
            $("#9").addClass("alert alert-success")
        }

        if (currentHour === 10) {
            $("#10").addClass("alert alert-info")
        } else if (currentHour > 10){
            $("#10").addClass("alert alert-danger")
            $("#10").attr("disabled",true)
        } else if ( currentHour < 10){
            $("#10").addClass("alert alert-success")
        }

        if (currentHour === 11) {
                $("#11").addClass("alert alert-info")
        } else if (currentHour > 11){
                $("#11").addClass("alert alert-danger")
                $("#11").attr("disabled",true)
        } else if ( currentHour < 11){
                $("#11").addClass("alert alert-success")
        }
        
        if (currentHour === 12) {
            $("#12").addClass("alert alert-info")
        } else if (currentHour > 12){
            $("#12").addClass("alert alert-danger")
            $("#12").attr("disabled",true)
        } else if ( currentHour < 12){
            $("#12").addClass("alert alert-success")
        }

        if (currentHour === 13) {
            $("#13").addClass("alert alert-info")
        } else if (currentHour > 13){
            $("#13").addClass("alert alert-danger")
            $("#13").attr("disabled",true)
        } else if ( currentHour < 13){
            $("#13").addClass("alert alert-success")
        }

        if (currentHour === 14) {
            $("#14").addClass("alert alert-info")
        } else if (currentHour > 14){
            $("#14").addClass("alert alert-danger")
            $("#14").attr("disabled",true)
        } else if ( currentHour < 14){
            $("#14").addClass("alert alert-success")
        }

        if (currentHour === 15) {
            $("#15").addClass("alert alert-info")
        } else if (currentHour > 15){
            $("#15").addClass("alert alert-danger")
            $("#15").attr("disabled",true)
        } else if ( currentHour < 15){
            $("#15").addClass("alert alert-success")
        }

        if (currentHour === 16) {
            $("#16").addClass("alert alert-info")
        } else if (currentHour > 16){
            $("#16").addClass("alert alert-danger")
            $("#16").attr("disabled",true)
        } else if ( currentHour < 16){
            $("#16").addClass("alert alert-success")
        }

        if (currentHour === 17) {
            $("#17").addClass("alert alert-info")
        } else if (currentHour > 17){
            $("#17").addClass("alert alert-danger")
            $("#17").attr("disabled",true)
        } else if ( currentHour < 17){
            $("#17").addClass("alert alert-success")
        }
 }

hour()

    const retreiveData = JSON.parse(window.localStorage.getItem("key", "value"))
    $("#9").text(JSON.parse(window.localStorage.getItem("key", "value")))

    // if (retreiveData === null)window.localStorage.setItem(time, "")
    // if (retreiveData.length > 0) $("#09").attr("value", window.localStorage.getItem(time))


// console.log(toDo)
$("form").on("submit", function (e) {
    e.preventDefault()

    const time = e.target.querySelector("input").getAttribute("id")
    const text = e.target.querySelector("input").value

    window.localStorage.setItem(time, text)
  })
})