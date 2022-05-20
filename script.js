const mainBox = document.getElementById("mainCryptoBox");

const cryptoPrice = async () => {
    //Items IDs
    const spanUSD = document.getElementById('usd');
    const spanEUR = document.getElementById('eur');
    const spanCHF = document.getElementById('chf');
    //Getting data and convert it to JSON
    let res = await fetch('https://blockchain.info/ticker');
    let data = await res.json();
    //Put data in variables
    let priceUSD = await data.USD['15m'];
    let priceEUR = await data.EUR['15m'];
    let priceCHF = await data.CHF['15m'];
    //Inject data in DOM
    spanUSD.textContent = priceUSD;
    spanEUR.textContent = priceEUR;  
    spanCHF.textContent = priceCHF;    
}
//addEvent for stick widget at top
window.addEventListener("scroll", () => {
    if(scrollY > 50){
        mainBox.style.position = "fixed";
    }else{
        mainBox.style.position = "static";
    }
})
//Main code
cryptoPrice();
setInterval(cryptoPrice, 60000);
