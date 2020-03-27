function createCards() {
    class Cards {
        constructor(image, head, text) {
            this.image = image
            this.head = head
            this.text = text
        }
    }
    let div_cards = document.getElementById('cards')
    const prim_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Praesent non adipiscing libero"

    let cards_arr = [
        new Cards("lab6/mind.png", "CREATIVE MIND", prim_text),
        new Cards("lab6/think.png", "THINK ALIVE", prim_text),
        new Cards("lab6/dog.png", "PIXEL PERFECTION", prim_text)
    ]

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