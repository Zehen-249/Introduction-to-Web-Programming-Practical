$(()=>{
   
    $("#btn").click(()=>{
        const date= new Date($('#date').val())
        weekDay=(date.getDay())
        if(weekDay in [7,0]){
            $('#box h1').text("it is a Weekend")
        }else{
            $('#box h1').text("it is not a Weekend")
        }
    })
})