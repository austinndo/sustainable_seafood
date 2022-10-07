//Species

const showListBtn = document.querySelector(`.showList`)
const showListBtnA = document.querySelector(`.showListA`)
const showListBtnB = document.querySelector(`.showListB`)
const showListBtnC = document.querySelector(`.showListC`)
const showListBtnD = document.querySelector(`.showListD`)
const showListBtnE = document.querySelector(`.showListE`)
const showListBtnF = document.querySelector(`.showListF`)
let speciesList = document.querySelector(`.species-list`)
let speciesAlphabetical = document.querySelector(`.species-alphabetical`)

speciesList.innerHTML = ''
speciesAlphabetical.innerHTML = ''

//Species Info
const speciesScientificName = document.querySelector(`.scientific-name`)
const speciesImage = document.querySelector(`.species-img`)

//Get all species names, sorted alphabetically
showListBtn.addEventListener('click', async () => {
  let response = await axios.get(`https://www.fishwatch.gov/api/species`)
  let speciesArray = []
  speciesList.innerHTML = ''

  for (let i = 0; i < response.data.length; i++) {
    const speciesNameData = response.data[i]['Species Name']
    speciesArray.push(speciesNameData)
  }

  speciesArray.sort()

  for (let i = 0; i < speciesArray.length; i++) {
    const speciesNameLi = document.createElement(`li`)
    speciesNameLi.innerHTML = speciesArray[i]
    speciesAlphabetical.append(speciesNameLi)
  }
})

//Show 1-20
showListBtnA.addEventListener('click', async () => {
  let response = await axios.get(`https://www.fishwatch.gov/api/species`)
  let speciesArray = []
  speciesList.innerHTML = ''
  speciesAlphabetical.innerHTML = ''

  for (let i = 0; i < 20; i++) {
    const speciesNameData = response.data[i]['Species Name']
    speciesArray.push(speciesNameData)
  }

  speciesArray.sort()

  for (let i = 0; i < speciesArray.length; i++) {
    const speciesNameLi = document.createElement(`li`)
    speciesNameLi.innerHTML = speciesArray[i]
    speciesList.append(speciesNameLi)
  }
})
//Show 21-40
showListBtnB.addEventListener('click', async () => {
  let response = await axios.get(`https://www.fishwatch.gov/api/species`)
  let speciesArray = []
  speciesList.innerHTML = ''
  speciesAlphabetical.innerHTML = ''

  for (let i = 20; i < 40; i++) {
    const speciesNameData = response.data[i]['Species Name']
    speciesArray.push(speciesNameData)
  }

  speciesArray.sort()

  for (let i = 0; i < speciesArray.length; i++) {
    const speciesNameLi = document.createElement(`li`)
    speciesNameLi.innerHTML = speciesArray[i]
    speciesList.append(speciesNameLi)
  }
})
//Show 41-60
showListBtnC.addEventListener('click', async () => {
  let response = await axios.get(`https://www.fishwatch.gov/api/species`)
  let speciesArray = []
  speciesList.innerHTML = ''
  speciesAlphabetical.innerHTML = ''

  for (let i = 40; i < 60; i++) {
    const speciesNameData = response.data[i]['Species Name']
    speciesArray.push(speciesNameData)
  }

  speciesArray.sort()

  for (let i = 0; i < speciesArray.length; i++) {
    const speciesNameLi = document.createElement(`li`)
    speciesNameLi.innerHTML = speciesArray[i]
    speciesList.append(speciesNameLi)
  }
})
//Show 61-80
showListBtnD.addEventListener('click', async () => {
  let response = await axios.get(`https://www.fishwatch.gov/api/species`)
  let speciesArray = []
  speciesList.innerHTML = ''
  speciesAlphabetical.innerHTML = ''

  for (let i = 60; i < 80; i++) {
    const speciesNameData = response.data[i]['Species Name']
    speciesArray.push(speciesNameData)
  }

  speciesArray.sort()

  for (let i = 0; i < speciesArray.length; i++) {
    const speciesNameLi = document.createElement(`li`)
    speciesNameLi.innerHTML = speciesArray[i]
    speciesList.append(speciesNameLi)
  }
})
//Show 81-100
showListBtnE.addEventListener('click', async () => {
  let response = await axios.get(`https://www.fishwatch.gov/api/species`)
  let speciesArray = []
  speciesList.innerHTML = ''
  speciesAlphabetical.innerHTML = ''

  for (let i = 80; i < 100; i++) {
    const speciesNameData = response.data[i]['Species Name']
    speciesArray.push(speciesNameData)
  }

  speciesArray.sort()

  for (let i = 0; i < speciesArray.length; i++) {
    const speciesNameLi = document.createElement(`li`)
    speciesNameLi.innerHTML = speciesArray[i]
    speciesList.append(speciesNameLi)
  }
})
//Show 100+
showListBtnF.addEventListener('click', async () => {
  let response = await axios.get(`https://www.fishwatch.gov/api/species`)
  let speciesArray = []
  speciesList.innerHTML = ''
  speciesAlphabetical.innerHTML = ''

  for (let i = 100; i < response.data.length; i++) {
    const speciesNameData = response.data[i]['Species Name']
    speciesArray.push(speciesNameData)
  }

  speciesArray.sort()

  for (let i = 0; i < speciesArray.length; i++) {
    const speciesNameLi = document.createElement(`li`)
    speciesNameLi.innerHTML = speciesArray[i]
    speciesList.append(speciesNameLi)
  }
})
