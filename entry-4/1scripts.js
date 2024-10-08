document.querySelector(".form2").addEventListener("submit", function(e) {
    e.preventDefault();
    
    var fullWidth = window.innerWidth;
    var fullHeight = window.innerHeight;
    
    var items = ['nothing', 'the end', 'last night', 'this man'];
    var item = items[Math.floor(Math.random() * items.length)];
    
    var elem = document.createElement("div");
    elem.textContent = item;
    elem.style.position = "absolute";
    elem.style.left = Math.round(Math.random() * (fullWidth - 100)) + "px"; 
    elem.style.top = Math.round(Math.random() * (fullHeight - 30)) + "px"; 
    elem.style.color = "white"; 
    elem.style.fontSize = "1em"; 
    document.body.appendChild(elem);
});