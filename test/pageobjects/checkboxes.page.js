const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class checkboxespage extends Page {
    /**
     * define selectors using getter methods
     */
    get heading(){return $("h3")}
    get form(){return $("form")}
   get option1(){return $("form input:nth-child(1)")



}
    get option2(){return $("form br ~ input")}
    //get clicked2(){return $("form br ~ input").getAtribute("checked")}
 async click(element) {
        
        await element.click();
    }
     
     open() {
        return super.open('checkboxes');
    }
}

module.exports = new checkboxespage();