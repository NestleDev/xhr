
let headers = new Headers();

headers.append('Content-Type', 'application/json');
fetch('https://webdev-api.loftschool.com/sendmail', {
    method: "POST",
    mode: 'no-cors',
    headers: headers,
    body: JSON.stringify({
        name: 'alex',
        phone: 'asasas',
        comment: 'dsdsdsds',
        to: 'a.nesvit@dataduck.com'
    })
})