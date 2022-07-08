//Sources
//API call to get source data of each species. Sort species by which ocean they are found

const oceansImg = document.getElementById(`oceans`)
const speciesSource = document.querySelector(`.sources-list`)
const speciesName = document.querySelector(`.species-name`)
const fishBtn = document.querySelector(`.go-fish`)
const pacificBtn = document.querySelector(`#pacific`)
const atlanticBtn = document.querySelector(`#atlantic`)
const gulfOfMexicoBtn = document.querySelector(`#gulfOfMexico`)
const caribbeanBtn = document.querySelector(`#caribbean`)

let fishBtnContainer = document.querySelector(`.go-fish-container`)
let fishingBoat = document.querySelector(`.fishing-boat`)
let speciesList = document.querySelector(`.species-list`)

fishingBoat.innerHTML = ""

pacificBtn.style.opacity = "0"
atlanticBtn.style.opacity = "0"
gulfOfMexicoBtn.style.opacity = "0"
caribbeanBtn.style.opacity = "0"

fishBtn.addEventListener('click', async () => {
  let response = await axios.get(`https://www.fishwatch.gov/api/species/`)
  fishingBoat.innerHTML = `<img id="fish-boat" src="/assets/fishing_boat.png"/>`
  fishBtnContainer.innerHTML = `<p> Going out to sea . . . </p>`

  pacificBtn.style.opacity = "1"
  atlanticBtn.style.opacity = "1"
  gulfOfMexicoBtn.style.opacity = "1"
  caribbeanBtn.style.opacity = "1"

  let speciesNameArray = []
  let speciesSourceArray = []

  let pacific = []
  let atlantic = []
  let gulfOfMexico = []
  let caribbean = []
  let other = []

  for (let i = 0; i < response.data.length; i++) {
    const speciesSourceData = response.data[i]['Source']
    const speciesNameData = response.data[i]['Species Name']

    const speciesSourceLi = document.createElement(`li`)
    const speciesNameLi = document.createElement(`li`)

    speciesSourceArray.push(speciesSourceData)

    //Pacific Ocean species
    if (speciesSourceArray[i].includes('Alaska') || 
        speciesSourceArray[i].includes('Oregon') ||
        speciesSourceArray[i].includes('Washington') ||
        speciesSourceArray[i].includes('California') ||
        speciesSourceArray[i].includes('Hawaii') ||
        speciesSourceArray[i].includes('Mexico')) 
        {
        pacific.push(speciesNameData)
        }

    //Atlantic Ocean species
    if (speciesSourceArray[i].includes('Maine') ||
        speciesSourceArray[i].includes('Virginia') ||
        speciesSourceArray[i].includes('Florida') ||
        speciesSourceArray[i].includes('Carolina') ||
        speciesSourceArray[i].includes('New York') ||
        speciesSourceArray[i].includes('Massachusetts') ||
        speciesSourceArray[i].includes('New Jersey') ||
        speciesSourceArray[i].includes('Connecticut') ||
        speciesSourceArray[i].includes('New England')) 
        {
        atlantic.push(speciesNameData)
        }
  
    //Gulf of Mexico species
    if (speciesSourceArray[i].includes('Texas') ||
        speciesSourceArray[i].includes('Louisiana') ||
        speciesSourceArray[i].includes('Florida') ||
        speciesSourceArray[i].includes('Mexico'))
        {
        gulfOfMexico.push(speciesNameData)
        }
    
    //Caribbean species
    if (speciesSourceArray[i].includes('Puerto Rico') ||
        speciesSourceArray[i].includes('Caribbean'))
        {
        caribbean.push(speciesNameData)
        }

    //All others
    // else {
    //     other.push(speciesNameData)
    //     }
  } 
  
console.log(pacific)

  //Click Pacific
  pacificBtn.addEventListener('click', () => {
    speciesList.innerHTML = ""
    for (let i = 0; i < pacific.length; i++) {
      const speciesNameLi = document.createElement(`li`)
      speciesNameLi.innerHTML = pacific[i]
      speciesList.append(speciesNameLi)
    }
  }
)

  //Click Atlantic
  atlanticBtn.addEventListener('click', () => {
    speciesList.innerHTML = ""
    for (let i = 0; i < atlantic.length; i++) {
      const speciesNameLi = document.createElement(`li`)
      speciesNameLi.innerHTML = atlantic[i]
      speciesList.append(speciesNameLi)
    }
  }
)

  //Click Gulf of Mexico
  gulfOfMexicoBtn.addEventListener('click', () => {
    speciesList.innerHTML = ""
    for (let i = 0; i < gulfOfMexico.length; i++) {
      const speciesNameLi = document.createElement(`li`)
      speciesNameLi.innerHTML = gulfOfMexico[i]
      speciesList.append(speciesNameLi)
    }
  }
)

  //Click Caribbean
  caribbeanBtn.addEventListener('click', () => {
    speciesList.innerHTML = ""
    for (let i = 0; i < caribbean.length; i++) {
      const speciesNameLi = document.createElement(`li`)
      speciesNameLi.innerHTML = caribbean[i]
      speciesList.append(speciesNameLi)
    }
  }
)
  
  }
)