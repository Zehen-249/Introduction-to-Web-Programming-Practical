$(()=>{
    $('input').blur(()=>{
        $("body").css("background-color", "#fff")
    }).focus(()=>{
        $("body").css("background-color", "#999")
    })
    $('input[type="button"]').click(()=>{
        validateUser();
    })
})

function validateUser(){
    let users=["12","23","24","35","46","57","68","21"]
    if( users.includes($("input[type='text']").val())){
        alert("User Exists")
        return true
    }else{
        alert("User does not match")
        return false
    }

}