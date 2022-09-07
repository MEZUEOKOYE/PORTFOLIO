let req = new XMLHttpRequest()
req.open("GET", "https://fakestoreapi.com/products")
req.send()
req.addEventListener('load', function () {
    let chibuzor = req.responseText
    let data = JSON.parse(chibuzor)
    console.log(chibuzor)
    let html = ""
    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
        html += `
        
        <div class="content">
    <div>    
        <img src="${data[i].image}" alt="">
    </div>
    <div class="details">
      <h3></h3>
      <p></p>
      <p></p>
      <p></p>
    </div>
        </div>
        
        
        ` ;

    }
    document.querySelector('.container').innerHTML = html
})