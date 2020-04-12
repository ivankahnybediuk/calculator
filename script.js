
function insert (num){
$("input").val($("input").val()+num)
}
function clean(){
$("input").val("") 
}
function back(){
    let exp =$("input").val();
    $("input").val(exp.substring(0,exp.length-1))
}
function equal(){
    let exp =$("input").val();
    if(exp){
        $("input").val(eval(exp));
    }
}
