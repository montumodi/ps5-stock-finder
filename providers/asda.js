const { getRawHtml } = require("../requestMaker");

const url = "https://direct.asda.com/george/toys-character/gaming/gaming-consoles/playstation5-console/050887006,default,pd.html?cgid=D30M6G1C4S3";

async function process() {
    const rawHtml = await getRawHtml(url);
    if (!rawHtml) {
        return { "provider": "asda", "message": "Error scrapping asda", "time": new Date() };
    }
    if (rawHtml.includes("outofstock")) {
        return { "provider": "asda", "message": "Out of stock", "time": new Date() };
    } else {
        return { "provider": "asda", "message": "Available", "time": new Date() };
    }
}

module.exports = process;