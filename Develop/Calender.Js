$(document).ready(function(){

// Variable for current date
const now = moment().format('MMMM Do YYYY, hA');

// Attached the variable to the ID to display the current date
$("#currentDay").text(now);

// Created an array of integers to match with hours
const times = [9, 10, 11, 12, 13, 14, 15, 16, 17]
const currentHour = moment().hour()


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

$("form").on("submit", function (e) {
    e.preventDefault()

    const time = e.target.querySelector("input").getAttribute("id")
    const text = e.target.querySelector("input").value

    window.localStorage.setItem(time, text)
  })
});
$("#9").val(window.localStorage.getItem(9))
$("#10").val(window.localStorage.getItem(10))
$("#11").val(window.localStorage.getItem(11))
$("#12").val(window.localStorage.getItem(12))
$("#13").val(window.localStorage.getItem(13))
$("#14").val(window.localStorage.getItem(14))
$("#15").val(window.localStorage.getItem(15))
$("#16").val(window.localStorage.getItem(16))
$("#17").val(window.localStorage.getItem(17))