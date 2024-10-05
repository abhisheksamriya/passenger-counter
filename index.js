//document.getElementById("count").innerText = 5;

let ram = document.getElementById("count-el");
let count = 0 ;
function increment(){
    count += 1 ;
    ram.innerText = count ;
}
function dec(){
    count -= 1;
    ram.innerText = count ;
}
function reset(){
    count = 0 ;
    ram.innerText = count;
}
function save(){
    document.getElementById("pre").innerText += " " + count + " -";
    count = 0 ;
    ram.innerText = count;
}