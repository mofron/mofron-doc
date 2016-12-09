require('mof-parts-pagehdr');

mofron.tmpl.CenterConts = class extends mofron.tmpl.Base {
    constructor (app_nm) {
        try {
            super();
            this.hdr = new mofron.parts.PageHeader(app_nm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    setHeader (hdr) {
        try {
            if ('object' !== (typeof hdr)) {
                throw new Error('invalid parameter');
            }
            this.hdr = hdr;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    start () {
        try {
            var base = new mofron.parts.Base();
            base.addChild(this.hdr);
            
            base.init(false);
            base.setVisible (true, null);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
