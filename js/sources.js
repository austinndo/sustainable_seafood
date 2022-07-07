const oceansImg = document.getElementById(`oceans`)
const speciesSource = document.querySelector(`.sources-list`)
const speciesName = document.querySelector(`.species-name`)

oceansImg.addEventListener('click', async () => {
  let response = await axios.get(`https://www.fishwatch.gov/api/species/`)
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
  
//Show sources-options class





  console.log(pacific)
  console.log(atlantic)
  console.log(gulfOfMexico)
  console.log(caribbean)
  console.log(other)
  
  }
)


  //speciesSourceArray.sort()

  // speciesNameArray.sort()
  // speciesNameArray.push(speciesNameData)}

  // speciesSourceLi.innerHTML = speciesSourceArray[i]
  // speciesSource.append(speciesSourceLi)}


const speciesAvail = document.querySelector(`.species-availability`)

const speciesFishingRate = document.querySelector(`.species-fishing-rate`)



// Gulf of Mexico - Texas, Louisiana, Florida, Mexico
// Caribbean - Puerto Rico, Caribbean
//
//
//
