const api_key = "kMjDFjbjEFiGcchab2wdsyz1tH3eMYDn";

const request = new XMLHttpRequest();

const makeRequest = function(url){
    document.getElementById('grid').innerHTML = "";
    request.open('GET',url);
    request.onload = function(){
        const response = request.response;
        var data = JSON.parse(response);
        for(g in data.data){
            const gif = data.data[g].images.original.url;
            console.log(gif);
            const col = document.createElement('div');
            col.setAttribute('class', 'col-md-3 mt-3');
            const gifElem = document.createElement('img');
            gifElem.setAttribute('src',gif);
            gifElem.setAttribute('width', '100%');
            gifElem.setAttribute('width', '200px');
            col.appendChild(gifElem);
            document.getElementById('grid').appendChild(col);
        }
    }
    request.send();
}

const pageLoad =function(){
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=30`;
    makeRequest(url);
}


document.getElementById('search').addEventListener('keyup',function(){
    let search = document.getElementById('search').value;
    if(search != "" || search != null){
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=30&q=${search}`;
        makeRequest(url);
    }
    else{
        document.getElementById('grid').innerHTML = "";
        pageLoad();
    }
});

