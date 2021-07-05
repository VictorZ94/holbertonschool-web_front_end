function createElement(data) {
    const pTag = document.createElement('p');
    pTag.textContent = `${data}`;
    document.body.appendChild(pTag);
}

function queryWikipedia(callback) {
    let request = new XMLHttpRequest();
    let url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            paragraph = response.query.pages['21721040'].extract;
            callback(paragraph);
        }
    }
    request.open("GET", url, true);
    request.send();
}

queryWikipedia(createElement);
