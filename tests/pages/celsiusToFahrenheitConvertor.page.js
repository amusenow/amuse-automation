let utils = require('../utils/utils.js')
require('chai').should();

const SELECTORS = {
    ANDROID: {
        celsiusTextField: '//android.widget.EditText[@resource-id="com.androiddev2015.cfconverter:id/editTextC"]',
        fahrenheitTextField: '//android.widget.EditText[@resource-id="com.androiddev2015.cfconverter:id/editTextF"]',
        submitButton: '//android.widget.Button[@resource-id="com.androiddev2015.cfconverter:id/btncnvCF"]',
        rateAppMessage: '//android.widget.TextView[@resource-id="android:id/message"]',
        laterButton: '//android.widget.Button[@resource-id="android:id/button3"]',
        okButton: '//android.widget.Button[@resource-id="android:id/button1"]',
    },
}

class CelsiusToFahrenhietConvertorPage {

    get celsiusTextField() {
        return $(SELECTORS[utils.platformName].celsiusTextField)
    }
    get fahrenheitTextField() {
        return $(SELECTORS[utils.platformName].fahrenheitTextField)
    }
    get submitButton() {
        return $(SELECTORS[utils.platformName].submitButton)
    }
    get rateAppMessage() {
        return $(SELECTORS[utils.platformName].rateAppMessage)
    }
    get laterButton() {
        return $(SELECTORS[utils.platformName].laterButton)
    }
    get okButton() {
        return $(SELECTORS[utils.platformName].okButton)
    }

    dismissAppRatingIfPresent() {
        if (this.rateAppMessage.isDisplayed()) {
            this.okButton.click()
        }
    }

    launchApp() {
        browser.pause(2000)
    }

    enterCelsius(celsiusValue) {
        this.dismissAppRatingIfPresent();
        this.celsiusTextField.waitForDisplayed()
        this.celsiusTextField.clearValue()
        this.celsiusTextField.addValue(celsiusValue)
        this.submitButton.click()
    }

    verifyFahrenheitValue(fahrenheitValue) {
        this.fahrenheitTextField.waitForDisplayed()
        this.fahrenheitTextField.getText().should.equal(fahrenheitValue);
        browser.pause(2000)
    }
}

module.exports = CelsiusToFahrenhietConvertorPage;