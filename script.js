import key from './apiKey.js';

fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${key}`)
  .then(response => {
    if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
    return response.json();
  })
  .then(api => {
    console.log(api)
    var text = ''

    for(let i = 0; i < 10; i++) {
      text = text + `

        <div class="media mt-5">
          <img
            src="./img/coin.jpg"
            class="align-self-center mr-5 w-25" alt='coin'>
          <div class="media-body align-self-center">
            <h1>${api.data[i].name}</h1>
            <h3>${api.data[i].symbol}</h3>
            <p class="h4">${api.data[i].first_historical_data}</p>
          </div>
        </div>
      `;
    }
    document.getElementById("coins").innerHTML = text;
  })
  .catch(err => console.log(err.message));
