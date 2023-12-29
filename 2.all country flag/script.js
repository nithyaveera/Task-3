
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
