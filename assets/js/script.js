fetch('https://date.nager.at/api/v3/publicholidays/2017/AT')
  .then(response => response.json())
  .then(data => console.log(data));