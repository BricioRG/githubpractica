// const https = require("https");
//
// let username = 'briciorg',
//
//     CHROME_USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
//     FIREFOX_USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1',
//     IE_USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko',
//
//     option = {
//         host: 'api.github.com',
//         path: '/users/' + username,
//         method: 'GET',
//         headers: {'user-agent': IE_USER_AGENT}
//     };
//
// let request = https.request(option, (response) => {
//     let body = '';
//     response.on('data', (out) => {
//         body += out;
//     });
//     response.on('end', (out) => {
//         let json = JSON.parse(body);
//         console.log(json);
//     });
// });
//
// request.on('error', (e) => {
//     console.log(e);
// });
// request.end();

const fetch = require('node-fetch');

let promesa = fetch("https://api.github.com/repos/briciorg/githubpractica/events");
promesa.then((res) => {
    return res.json();
}).then((json) => {
    console.log(json);
})