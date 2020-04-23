describe('demo calculator tests',function(){

    it('addition test',function() {
        browser.get('http://juliemr.github.io/protractor-demo/'); 

         element(by.model('first')).sendKeys('4');

         element(by.model('second')).sendKeys('6');

         element(by.css('[ng-click="doAddition()"]')).click();

         let result=element(by.cssContainingText('.ng-binding','10'));

         expect(result.getText()).toEqual('10');

        browser.sleep(2000);
    });
});