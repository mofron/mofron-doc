(function() {
    window.addEventListener("load",function(eve) {
        try {
            //var hdr = new mofron.parts.Radihdg('test').init();
            var center = new mofron.tmpl.CenterConts('mofron.js Documentation');
            center.start();
            new mofron.parts.Button('test').init();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    });
}());

