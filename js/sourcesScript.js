const sourcesButton = document.getElementById(`sources-btn`)
const speciesName = document.querySelector(`.species-name`)
const speciesSource = document.querySelector(`.species-source`)


sourcesButton.addEventListener('click', async () => {
  let response = await axios.get(`https://www.fishwatch.gov/api/species/`)
  let speciesNameArray = []
  let speciesSourceArray = []

  for (let i = 0; i < response.data.length; i++) {
    const speciesNameData = response.data[i]["Species Name"]
    speciesNameArray.push(speciesNameData)}

  speciesNameArray.sort()

  for (let i = 0; i < speciesArray.length; i++) {
    const speciesSourceData = document.createElement(`li`)
    speciesNameLi.innerHTML = speciesArray[i]
    speciesList.append(speciesNameLi)}

    for (let i = 0; i < speciesArray.length; i++) {
      const speciesSourceData = document.createElement(`li`)
      speciesNameLi.innerHTML = speciesArray[i]
      speciesList.append(speciesNameLi)}
  
  console.log(response)
})