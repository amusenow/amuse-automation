/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

const utils = require('../utils/utils');

module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(process.env.BASEURL+path)
    }

}
