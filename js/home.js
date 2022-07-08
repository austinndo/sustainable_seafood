//Sustainable Seafood

const searchButton = document.getElementById(`search-btn`)
const showListButton = document.getElementById(`showList-btn`)
const speciesList = document.querySelector(`.species-list`)
const searchInput = document.querySelector(`input`)

//Species Info
const speciesName = document.querySelector(`.species-name`)
const speciesImage = document.querySelector(`.species-img`)
const speciesSource = document.querySelector(`.species-source`)
const speciesAvail = document.querySelector(`.species-availability`)
const speciesFishingRate = document.querySelector(`.species-fishing-rate`)
const speciesPopulation = document.querySelector(`.species-population`)
const speciesScientificName = document.querySelector(`.scientific-name`)
const speciesExtra = document.querySelector(`.species-extra`)
const speciesInfo = document.querySelector(`.species-info`)

let speciesListDivCount = 0

//Search for a particular fish
searchButton.addEventListener('click', async () => {
  let searchValue = searchInput.value
  let response = await axios.get(`https://www.fishwatch.gov/api/species/${searchValue}`)
  
  speciesInfo.style.opacity = "1"
  // //For testing, see the data
  // let responseFull = await axios.get(`https://www.fishwatch.gov/api/species/`)
  // console.log(responseFull)
  // //

  const speciesNameData = response.data[0]["Species Name"]
  const speciesAvailData = response.data[0]["Availability"]
  const speciesFishingRateData = response.data[0]["Fishing Rate"]
  const speciesSourceData = response.data[0]["Source"]
  const speciesPopulationData = response.data[0]["Population"]
  const speciesScientificNameData = response.data[0]["Scientific Name"]
  const speciesExtraData = response.data[0]["Quote"]

  //Set image
  let i = response.data[0]["Image Gallery"].length
  const speciesImageData = response.data[0]["Image Gallery"][(i - 1)]["src"]
  speciesImage.innerHTML = `<img id="species-imgData" src="${speciesImageData}">`
  
  //Set species info
  speciesName.innerHTML = `<b>${speciesNameData}</b> <em> (${speciesScientificNameData}) </em>`
  speciesSource.innerHTML = `<b>Source:</b> <br>${speciesSourceData}`  
  speciesAvail.innerHTML = `<b>Availability:</b> <br>${speciesAvailData}` 
  speciesFishingRate.innerHTML = `<b>Fishing Rate:</b> <br><br>${speciesFishingRateData}`
  speciesPopulation.innerHTML = `<b>Population:</b> <br><br>${speciesPopulationData}`
  speciesExtra.innerHTML = speciesExtraData

  speciesInfo.setAttribute("id","speciesInfo")
  }
)





