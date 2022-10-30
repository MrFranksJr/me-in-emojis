const myEmojis = ["🏍", "👨🏻‍💻", "🎚"]
const emojiContainer = document.getElementById("emojiContainer")
const inputField = document.getElementById("emoji-input")
const addButton = document.getElementById("push-emoji")
const unshiftButton = document.getElementById("unshift-emoji")
const shiftButton = document.getElementById("shift-emoji")
const popButton = document.getElementById("pop-emoji")

//add to end
addButton.addEventListener("click", function() {
    if(inputField.value) {
        myEmojis.push(inputField.value)
        renderEmojis()
    }
})

//remove from end
popButton.addEventListener("click", function() {
        myEmojis.pop(inputField.value)
        renderEmojis()
})

//add to beginning
unshiftButton.addEventListener("click", function() {
    if(inputField.value) {
        myEmojis.unshift(inputField.value)
        renderEmojis()
    }
})

//remove from beginning
shiftButton.addEventListener("click", function() {
        myEmojis.shift(inputField.value)
        renderEmojis()
})

//general renderfunction
function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i=0; i < myEmojis.length; i++) {
        const emoji = document.createElement("span")
        emoji.textContent += myEmojis[i]
        emojiContainer.append(emoji)
    }
    inputField.value = ""
}

renderEmojis()