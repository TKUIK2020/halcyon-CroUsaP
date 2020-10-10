const button = document.getElementById('submit')
const input = document.getElementById('emailin')

let regexp = /[-.\w]+@([\w-]+\.)+[\w-]+/g

function checker() {
    if (input.value.replace(/ /g, "").match(regexp)) {
        input.style.borderColor = "#d4d4d4e5"
        localStorage.setItem("email", input.value)
    } else {
        input.style.borderColor = "#ff3636e5"
        console.log("no")
    }
}

// У меня по каким-то причинам не получилось с присвоением класса error, поэтому я сделал просто через ред. стилей

let prevEm = localStorage.getItem("email")

if (prevEm != null) {
    input.value = prevEm
}