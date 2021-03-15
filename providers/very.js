const { getRawHtml } = require("../requestMaker");

const url = "https://www.very.co.uk/playstation-5-sign-up.page";

async function process() {
    const rawHtml = await getRawHtml(url, {});
    if (!rawHtml) {
        return { "provider": "very", "message": "Error scrapping very", "time": new Date() };
    }
    if (rawHtml.includes("/ps5-stock-coming-soon/registerinterestpage-desktop.jpg")) {
        return { "provider": "very", "message": "Out of stock", "time": new Date() };
    } else {
        return { "provider": "very", "message": "Available", "time": new Date() };
    }
}

module.exports = process;