document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    var fullWidth = window.innerWidth;
    var fullHeight = window.innerHeight;
    
    var items = ['nothing', 'the end', 'last night', 'this man']
    var item = items[Math.floor(Math.random()*items.length)];
    
    var elem = document.createElement("div");
    elem.textContent = item;
    elem.style.position = "absolute";
    elem.style.left = Math.round(Math.random() * fullWidth) + "px";
    elem.style.top = Math.round(Math.random() * fullHeight) + "px";
    document.body.appendChild(elem);
});