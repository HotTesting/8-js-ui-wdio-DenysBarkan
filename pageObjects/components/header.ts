export class Header {

    
    get header() { return  $('#header'); }
    get logoImg() { return this.header.$('img[src="http://ip-5236.sunline.net.ua:38015/images/logotype.png"]'); }
    get favIcon() { return $('link[href=\"/favicon.ico\"]'); }

    

    
}