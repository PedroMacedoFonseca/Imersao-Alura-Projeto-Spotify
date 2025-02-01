const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists`; 
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const result = data.artists.filter(artist => artist.name.toLowerCase() === searchTerm.toLowerCase());
            displayResults(result.length > 0 ? result[0] : {}); 
        });
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden')
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm != '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        var result = requestApi(searchTerm);
        displayResults(result)        
        return
    }
       
})

