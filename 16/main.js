$(()=>{
    $("#text").mouseover(()=>{
        $("body").css("background-color","green")
        $("#text").text("I am Green Now");
    })
    $("#text").mouseout(()=>{
        $("body").css("background-color","red")
        $("#text").text("I am Red Now");
    })
})