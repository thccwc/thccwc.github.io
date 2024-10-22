$('.img').on({
    click: function(){
        $(this).addClass('new-bg').removeClass('bg') // changes background on click
    },
    mousedown: function() {
        // :active state
    },
    mouseup: function() {
        // on click release
    },
    mouseenter: function() {
        // on hover
    },
    mouseleave: function() {
        // hover exit
    }
    /* 
      , hover: function(){
           // or hover instead of enter/leave
        }
    */
})