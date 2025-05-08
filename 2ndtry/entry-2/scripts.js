function randombg(){
    var random= Math.floor(Math.random() * 6) + 0;
    var bigSize = ["url('1.PNG')",
                   "url('2.PNG')",
                   "url('3.PNG')",
                   "url('4.PNG')",
                   "url('5.PNG')",
                   "url('6.PNG')",
                   "url('7.PNG')",
                   "url('8.PNG')",
                   ];
    document.getElementById("random").style.backgroundImage=bigSize[random];
  }