//Print all countries name,regions,sub-region and population

const URL = "https://restcountries.com/v3.1/all"

const xhr= new XMLHttpRequest();

xhr.open("GET", URL);

xhr.send();

xhr.onload = () => {
  var respon=JSON.parse(xhr.response);
  console.log(" ")
  for(i=0;i<respon.length;i++){
    console.log(respon[i].name.common)
    console.log(respon[i].region)
    console.log(respon[i].subregion)
    console.log(respon[i].population)
}
}
