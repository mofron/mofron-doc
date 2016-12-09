(function() {
    window.addEventListener("load",function(eve){
        /* set theme */
        mofron.util.theme.setColor (
            new mofron.util.Color(37,113,130)
        );
        
        mofron.util.theme.setColor (
           new mofron.util.Color(240,240,240),
           1
        );
        
        var tm_font = new mofron.util.Font('Raleway');
        tm_font.setFace('./font/raleway/Raleway-Regular.ttf');
        mofron.util.theme.setFont(tm_font);
        
    });
}());
