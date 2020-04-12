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

async function fetchSomeAsync() {
    console.log("Async fetch started")
    try {
        const respone = await fetch(url)
        const data = await respone.json()
        console.log("Data: ", data)
    } catch (e) {
        console.error(e)
    }
}

fetchSomeAsync()