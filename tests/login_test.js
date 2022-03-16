Feature('login');

Scenario('test something', ({ I, repl_pages }) => {

        I.amOnPage("https://www.amazon.com/")
        I.fillField(repl_pages.search_button,'technical books')
        I.click("//input[@id='nav-search-submit-button']")
        I.wait(3)
        I.click("//img[@data-image-index=2]")
        I.click("//input[@id='add-to-cart-button']")
        I.wait(3)
        I.click("//span[@class='a-button a-spacing-top-base a-button-span12 a-button-base']")
       


        
    });


