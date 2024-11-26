let answer = document.getElementById("thisman");
function changeBG() {
    let input = answer.value.trim().toLowerCase();
console.log(input);
if (input === 'yes') {
    document.body.style.backgroundImage = "url('bg2.PNG')";
 } else if (input === 'no') {
    document.body.style.backgroundImage = "url('bg3.PNG')";
 } else { 
    document.body.style.backgroundImage = "url('https://gifdb.com/images/high/dancing-cat-and-duck-rvt38b0q43fl8kcl.gif')";
 }
}
let image = document.getElementById('myImage');