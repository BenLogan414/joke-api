
const path = require('path')
const express = require('express')
const port = 3000
const app = express()

app.listen(port, () => console.log(`Listening on port: ${port}`))

const root = path.join(__dirname, 'public')

// Shoutout ChatGPT for the corny jokes
const jokeData = [
    { id: 1, joke: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field." },
    { id: 2, joke: "Why did the bicycle fall over?", punchline: "Because it was two-tired." },
    { id: 3, joke: "Why don't skeletons fight each other?", punchline: "Because they don't have the guts!"},
    { id: 4, joke: "What do you call fake spaghetti?", punchline: "An impasta!"},
    { id: 5, joke: "Why was the math book sad?", punchline: "Because it had too many problems!"},
    { id: 6, joke: "Whats orange and sounds like a parrot?", punchline: "A carrot!"},
    { id: 7, joke: "Why do cows have hooves instead of feet?", punchline: "Because they lactose!"}
]

app.use(express.json())
app.use(express.static('public'))

app.get('/', (request, response) => {
    response.sendFile('index.html', { root })
})

app.get('/api/v1/random-joke', (request, response) => {
    const index = Math.floor(Math.random() * jokeData.length)
    response.send(jokeData[index])
})