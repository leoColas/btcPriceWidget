const cryptoPrice = async () => {
    const spanUSD = document.getElementById('usd');
    const spanEUR = document.getElementById('eur');
    const spanCHF = document.getElementById('chf');
    
    let res = await fetch('https://blockchain.info/ticker');

    let data = await res.json();

    let priceUSD = await data.USD['15m'];
    let priceEUR = await data.EUR['15m'];
    let priceCHF = await data.CHF['15m'];

    spanUSD.textContent = priceUSD;
    spanEUR.textContent = priceEUR;  
    spanCHF.textContent = priceCHF;    
    
}

cryptoPrice();

setInterval(cryptoPrice, 60000); 