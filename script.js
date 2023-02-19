const btnEl = document.getElementById('btn')
const animeImgEl = document.querySelector('.anime-img')
const animeNameEl = document.querySelector('.anime-name')
const animeContainerEl = document.querySelector('.anime-container')

btnEl.addEventListener('click', async () => {
    try {
        btnEl.disabled = true
        btnEl.textContent = 'Uploading...'
        animeNameEl.textContent = 'Updating...'
        animeImgEl.src = 'spinner.svg'

        const response = await fetch('https://api.catboys.com/img')
        const data = await response.json()
        
        animeContainerEl.style.display = 'block'
        animeImgEl.src = data.url
        animeNameEl.textContent = data.artist

        btnEl.disabled = false
        btnEl.textContent = 'Get Anime'

    } catch (error) {
        btnEl.disabled = false
        btnEl.textContent = 'Get Anime'
        animeNameEl.textContent = 'Error uploading, try again later!'

    }
})