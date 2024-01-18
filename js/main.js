


    // TOGGLE ANIMATION
$(".singer-info").on("click", function (e) {
    $(e.target).next("p").slideToggle(500).siblings("p").slideUp(500);
})




// COUNTDOWN 

let countDown = new Date("Jun 30, 2024 08:00:00").getTime();

let counter = setInterval(() => {
    let nowDate = new Date().getTime();
    let dateCount = countDown - nowDate;

    let days = Math.floor(dateCount / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateCount % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateCount % (1000 * 60)) / 1000 );

    document.getElementById("day").innerHTML = days <10 ? `0${days}d` : days+"D";
    document.getElementById("hour").innerHTML = hours <10 ? `0${hours}h` : hours+"H";
    document.getElementById("minute").innerHTML = minutes <10 ? `0${minutes}m` : minutes+"M";
    document.getElementById("second").innerHTML = seconds <10 ? `0${seconds}s` : seconds+"S";

}, 1000);



//FORM ACTIONS

//vanilla js

// textArea.addEventListener("keyup", function (e) {
//     let textArea = document.querySelector("#message");
//     let msgCount = document.querySelector("#msgCount");
//     let maxLength = textArea.getAttribute("maxlength");
//     let cartona = maxLength - textArea.value.length
//     msgCount.innerHTML=cartona
// })

// with jQuery

$("#message").on("keyup", function(e) {
    let maxLength= $("#message").attr("maxlength");
    let textLength = $("#message").val().length;
    let cartona = maxLength - textLength
    $("#msgCount").html(cartona);
})


//765.600

//MENU BAR
$("#btnClose").on("click",function(e){
    let width = $("section.home .menu").innerWidth()
    // console.log(width);
    $("section.home .menu").animate({left:-width},500)
})

$("#openMenu").on("click",function (e) {
    let width = $("section.home .menu").innerWidth()
    if ($("section.home .menu").css("left")=="0px") {
        $("section.home .menu").animate({left:-width},500)
        
    }else{
        $("section.home .menu").animate({left:0},500)
    }
})


$(".menu a[href^='#']").on("click", function (e) {
    let href = e.target.getAttribute('href');
    let sectionOffset = $(href).offset().top
    $("body,html").animate({scrollTop:sectionOffset-50},1000)
    $(e.target).addClass("active").parent().siblings().children().removeClass("active");
})


