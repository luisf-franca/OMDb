const apiKey = '437cddb7';
const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=MovieTitle`;

axios.get(apiUrl)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
