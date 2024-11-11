const getJokeData = async () => {

    const button = document.getElementById('getJoke')

    button.addEventListener('click', async () => {
        const url = `/api/v1/random-joke`

        const result = await fetch(url)
        const { joke, punchline } = await result.json()

        const jokeH1 = document.querySelector('#joke')        
        const punchlineH2 = document.querySelector('#punchline')

        jokeH1.textContent = joke
        punchlineH2.textContent = punchline
    })

}

getJokeData()

