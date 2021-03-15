const { getRawHtml } = require("../requestMaker");

const url = "https://www.amazon.co.uk/gp/product/B08H95Y452?pf_rd_r=AAFY479RP90BA748F5ZA&pf_rd_p=6e878984-68d5-4fd2-b7b3-7bc79d9c8b60&pd_rd_r=fdb77a18-a826-4c59-8de4-7dc67719516a&pd_rd_w=Zimig&pd_rd_wg=faYGo&ref_=pd_gw_unk";

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