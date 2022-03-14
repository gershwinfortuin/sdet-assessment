Feature('login');

Scenario('test something', ({ I }) => {

        I.amOnPage("https://stackoverflow.com/")
        I.click("//a[@class='login-link s-btn s-btn__filled py8 js-gps-track']")
        I.wait(5)
        I.seeElement("//div[@id='formContainer']")
    });


