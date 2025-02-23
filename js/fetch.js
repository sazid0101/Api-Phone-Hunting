const loadData = async() =>{
    const response = await fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    const phoneData = await response.json()
    const allPhones = phoneData.data
    console.log(allPhones)
}
loadData()