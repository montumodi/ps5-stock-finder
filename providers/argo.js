const { getRawHtml } = require("../requestMaker");

const url = "https://www.argos.co.uk/product/8349000?clickSR=slp:term:playstation%205%20sony%20console:1:21:1";

async function process() {
    const rawHtml = await getRawHtml(url, {});
    if (!rawHtml) {
        return { "provider": "argo", "message": "Error scrapping argo", "time": new Date() };
    }
    if (rawHtml.includes("We're working hard to make this available as soon as possible.")) {
        return { "provider": "argo", "message": "Out of stock", "time": new Date() };
    } else {
        return { "provider": "argo", "message": "Available", "time": new Date() };
    }
}

module.exports = process;