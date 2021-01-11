
function ball() {
    var mylist = [];
    var x = document.getElementById("color");
    for (var i=0; i < x.length; i++ ){
        mylist.push(x[i].value);
    }
    var color = rgb(mylist);
    set_ball_color(color);    
}
function rgb([r,g,b]) {
    return "rgb("+r+","+g+","+b+")"
}
function set_ball_color(data){

    document.getElementsByClassName("ball")[0].style.backgroundColor = data;
}