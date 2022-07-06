//Sustainable Seafood

const searchButton = document.getElementById(`search`)
const speciesListButton = document.getElementById(`species-list-btn`)
const speciesList = document.querySelector(`.species-list`)
const searchInput = document.querySelector(`input`)

//Get all species names, sorted alphabetically
speciesListButton.addEventListener('click', async () => {
  let response = await axios.get(`https://www.fishwatch.gov/api/species/`)
  let speciesArray = []

  for (let i = 0; i < response.data.length; i++) {
    const speciesName = response.data[i]["Species Name"]
    speciesArray.push(speciesName)}

  speciesArray.sort()

  for (let i = 0; i < speciesArray.length; i++) {
    const speciesNameLi = document.createElement(`li`)
    speciesNameLi.innerHTML = speciesArray[i]
    speciesList.append(speciesNameLi)}
  }
)

//Search for a particular fish
searchButton.addEventListener('click', async () => {
  let searchValue = searchInput.value
  let response = await axios.get(`https://www.fishwatch.gov/api/species/${searchValue}`)

  console.log(response)




})


//map
//sort
//filter


