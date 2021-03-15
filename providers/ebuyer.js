const { getRawHtml } = require("../requestMaker");

const url = "https://www.ebuyer.com/1133940-sony-playstation-5-console-cfi-1016a";

async function process() {
    const rawHtml = await getRawHtml(url);
    if (!rawHtml) {
        return { "provider": "eBuyer", "message": "Error scrapping eBuyer", "time": new Date() };
    }
    if (rawHtml.includes("coming-soon.1d4bb2875a17e008864583ffb095b8bb.svg")) {
        return { "provider": "eBuyer", "message": "Out of stock", "time": new Date() };
    } else {
        return { "provider": "eBuyer", "message": "Available", "time": new Date() };
    }
}

module.exports = process;