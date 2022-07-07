//Sustainable Seafood

const showListBtn = document.querySelector(`.showList`)
const speciesList = document.querySelector(`.species-list`)

//Species Info
const speciesScientificName = document.querySelector(`.scientific-name`)
const speciesImage = document.querySelector(`.species-img`)

//Get all species names, sorted alphabetically
showListBtn.addEventListener('click', async () => {
  let response = await axios.get(`https://www.fishwatch.gov/api/species/`)
  let speciesArray = []

  for (let i = 0; i < response.data.length; i++) {
    const speciesNameData = response.data[i]["Species Name"]
    speciesArray.push(speciesNameData)}

  speciesArray.sort()

  for (let i = 0; i < speciesArray.length; i++) {
    const speciesNameLi = document.createElement(`li`)
    speciesNameLi.innerHTML = speciesArray[i]
    speciesList.append(speciesNameLi)}
  }
)
