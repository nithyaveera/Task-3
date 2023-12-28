
//Display all countries Flag

const URL = "https://restcountries.com/v3.1/all"

const xhr= new XMLHttpRequest();

xhr.open("GET", URL);

xhr.send();

xhr.onload = () => {
  var respon=JSON.parse(xhr.response);
  for(i=0;i<respon.length;i++){
    console.log(respon[i].flags.png)
  }
}



















/*var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);

request.onreadystatechange = function() {
  if (request.readyState === 4 && request.status === 200) {
    var response = JSON.parse(request.responseText);
    for (var i = 0; i < response.length; i++) {
      console.log(response[i].flags.png);
    }
  }
};

request.send();*/








