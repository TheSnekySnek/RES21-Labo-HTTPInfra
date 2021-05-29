function fetchQuotes(){
    fetch('/api/quotes/')  
    .then(  
      function(response) {  
        if (response.status !== 200) {  
          console.log('Status Code: ' + response.status);  
          return;  
        }  
        response.json().then(function(data) {  
          console.log(data);
          document.getElementById("title1").innerText = data.body;
          document.getElementById("title2").innerText = data.author;
        });  
      }  
    )  
    .catch(function(err) {  
      console.log(err);  
    });
}

setInterval(() => {
    fetchQuotes()
}, 2000);