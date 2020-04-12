const url = "https://jsonplaceholder.typicode.com/posts?userId=1"

function fetchSome() {
    console.log("Fetch started")
    return fetch(url)
        .then(respone => respone.json())
}
    }
    let div_cards = document.getElementById('cards')
    const prim_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Praesent non adipiscing libero"

fetchSome()
    .then(data => {
        console.log("Data: ", data)
    })
    .catch(e => console.error(e))

    cards_arr.forEach((item) => {
        let html = `
    <div class="card-image-box">
        <img class="card-image" src="${item.image}" alt="">
    </div>
    <div class="card-headtext">${item.head}</div>
    <div class="line"></div>
    <div class="card-text">${item.text}</div>`
        let new_div = document.createElement('div')
        new_div.className = "card"
        new_div.innerHTML = html
        div_cards.appendChild(new_div)
    })
}
createCards()