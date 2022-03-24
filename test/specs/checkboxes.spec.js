const checkboxespage=require('../pageobjects/checkboxes.page');

describe('checkboxes', () => {
   
     it('option 1 exists', async () => {
        await checkboxespage.open();

        
        
        await expect(checkboxespage.option1).toBeExisting();
       // await expect(checkboxespage.option2).toBeExisting();
      /**  await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');**/
    });
    
   
    
    it('select first option', async () => {
        await checkboxespage.open();
        if(!(await checkboxespage.option1.getAttribute('checked'))){
            await checkboxespage.option1.click()
            await browser.pause(2000);
            
       }
       await expect(checkboxespage.option1).toBeChecked();
        
        
        
        
       
    });




    
});