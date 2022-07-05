//Sustainable Seafood

const searchButton = document.getElementById(`search`)

searchButton.addEventListener('click', async () => {
  let response = await axios.get(`https://www.fishwatch.gov/api/species/`)
  let speciesArray = []
  for (let i = 0; i < response.data.length; i++) {
    const speciesName = response.data[i]["Species Name"]
    speciesArray.push(speciesName)
    speciesArray.sort()
  }
  console.log(speciesArray)
  
} 
)

//map
//sort
//filter


