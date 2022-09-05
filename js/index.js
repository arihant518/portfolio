// $("#div1").fadeIn();
// $("#div2").fadeIn("slow");
// $("#div3").fadeIn(3000);

$(document).ready(function(){
    $(".js--part1").waypoint(function(direction){
        $(".js--part1").addClass('animate__animated animate__fadeInLeft')
    },{
        offset: '80%'
    })
})
$(document).ready(function(){
    $(".js--part2").waypoint(function(direction){
        $(".js--part2").addClass('animate__animated animate__fadeInRight')
    },{
        offset: '80%'
    })
})
$(document).ready(function(){
    $(".js--part3").waypoint(function(direction){
        $(".js--part3").addClass('animate__animated animate__fadeIn')
    },{
        offset: '70%'
    })
})





