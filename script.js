//Sustainable Seafood

const searchButton = document.querySelector(`button`)

searchButton.addEventListener('click', async () => {
  let response = await axios.get(`https://www.fishwatch.gov/api/species`)
  console.log(response.data)
} 
)



