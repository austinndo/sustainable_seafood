//Sustainable Seafood

const searchButton = document.getElementById(`search-btn`)
const showListButton = document.getElementById(`showList-btn`)
const speciesList = document.querySelector(`.species-list`)
const searchInput = document.querySelector(`input`)

//Species Info
const speciesName = document.querySelector(`.species-name`)
const speciesImage1 = document.querySelector(`.species-img1`)
const speciesImage2 = document.querySelector(`.species-img2`)
const speciesSource = document.querySelector(`.species-source`)
const speciesAvail = document.querySelector(`.species-availability`)
const speciesFishingRate = document.querySelector(`.species-fishing-rate`)
const speciesPopulation = document.querySelector(`.species-population`)
const speciesScientificName = document.querySelector(`.scientific-name`)
const speciesExtra = document.querySelector(`.species-extra`)
const speciesInfo = document.querySelector(`.species-info`)

//Get all species names, sorted alphabetically
showListButton.addEventListener('click', async () => {
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

//Search for a particular fish
searchButton.addEventListener('click', async () => {
  let searchValue = searchInput.value
  let response = await axios.get(`https://www.fishwatch.gov/api/species/${searchValue}`)
  
  //For testing, see the data
  let responseFull = await axios.get(`https://www.fishwatch.gov/api/species/`)
  console.log(responseFull)
  //

  const speciesNameData = response.data[0]["Species Name"]
  const speciesAvailData = response.data[0]["Availability"]
  const speciesFishingRateData = response.data[0]["Fishing Rate"]
  const speciesSourceData = response.data[0]["Source"]
  const speciesPopulationData = response.data[0]["Population"]
  const speciesScientificNameData = response.data[0]["Scientific Name"]
  const speciesExtraData = response.data[0]["Quote"]

  let i = response.data[0]["Image Gallery"].length
  const speciesImage1Data = response.data[0]["Image Gallery"][1]["src"]
  const speciesImage2Data = response.data[0]["Image Gallery"][(i - 1)]["src"]
  //speciesImage1.innerHTML = `<img src="${speciesImage1Data}">`
  speciesImage2.innerHTML = `<img src="${speciesImage2Data}">`
  
  speciesName.innerHTML = `<b>${speciesNameData}</b> <em> (${speciesScientificNameData}) </em>`
  speciesSource.innerHTML = `<b>Source:</b> <br>${speciesSourceData}`  
  speciesAvail.innerHTML = `<b>Availability:</b> <br>${speciesAvailData}` 
  speciesFishingRate.innerHTML = `<b>Fishing Rate:</b> <br><br>${speciesFishingRateData}`
  speciesPopulation.innerHTML = `<b>Population:</b> <br><br>${speciesPopulationData}`
  speciesExtra.innerHTML = speciesExtraData

  speciesInfo.setAttribute("id","speciesInfo")
  }
)



