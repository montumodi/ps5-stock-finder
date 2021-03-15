const axios = require("axios");
const {"headers": requestHeaders} = require("./common");

async function getRawHtml(url, headers = requestHeaders) {
    try {
        const { data: html } = await axios.get(url, {
            timeout: 5000,
            headers
        });
        return html;

    } catch (Err) {
        console.error(Err);
        return null;
    }
}

module.exports = {
    getRawHtml
}
