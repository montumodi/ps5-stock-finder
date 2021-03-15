const { getRawHtml } = require("../requestMaker");

const url = "https://www.amazon.co.uk/PlayStation-9395003-5-Console/dp/B08H95Y452/";

async function process() {
    const rawHtml = await getRawHtml(url);
    if (!rawHtml) {
        return { "provider": "amazon", "message": "Error scrapping amazon", "time": new Date() };
    }
    if (rawHtml.includes("Currently unavailable.")) {
        return { "provider": "amazon", "message": "Out of stock", "time": new Date() };
    } else {
        return { "provider": "amazon", "message": "Available", "time": new Date() };
    }
}

module.exports = process;