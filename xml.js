const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();

xhr.responseType = "json"; // data format

xhr.onload = function displayResult() {
  const countries = xhr.response;
  console.log(countries);
  console.log(countries.length);
  console.log("No of countries ", countries[0].name.common);
  console.log("JSON conversion");
};
