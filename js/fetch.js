const loadData = async(searchText, isShowAll) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const phoneData = await response.json()
    const allPhones = phoneData.data
    // console.log(allPhones)
    displayPhone(allPhones, isShowAll)
}

const displayPhone =(allPhones, isShowAll) =>{
    const cardContainer = document.getElementById("card-container");
    //clear data before showing search data
    cardContainer.textContent= " ";

    //show 12 phones if there are more phone.
    const showAllContainer = document.getElementById("show-all-container")
    if(allPhones.length > 9 && !isShowAll){
        showAllContainer.classList.remove("hidden");
    }else{
        showAllContainer.classList.add("hidden")
    }
     //show all
     if(!isShowAll){
        allPhones = allPhones.slice(0,9)
     }

    //loop for get single phone from all phones
    allPhones.forEach(phone => {
        // console.log(phone)
        const phoneCard = document.createElement("div")  //create a div
        phoneCard.classList =`card bg-base-300 w-80 shadow`
        phoneCard.innerHTML = `
        
                    <figure class="px-5 pt-5 ">
                      <img
                        src="${phone.image}"
                        alt="Shoes"
                        class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
        `;
        cardContainer.appendChild(phoneCard)
    });
    toggleLoadingSpinner(false)  //spinner off
}
const handleSearch = (isShowAll) =>{
    toggleLoadingSpinner(true)  //spinner on
    const searchTextId = document.getElementById("search-text") 
    const searchText = searchTextId.value 
    console.log(searchText)

    //function call
    loadData(searchText, isShowAll)
}
//loading spinner
const toggleLoadingSpinner = (isLoading) =>{
    const loadingSpinnerContainer = document.getElementById("loading-spinner-container")
    if(isLoading){
        loadingSpinnerContainer.classList.remove("hidden")
    }else{
        loadingSpinnerContainer.classList.add("hidden")
    }
}
//show all phones
const showAll = () =>{
    handleSearch(true)
}
//function call
loadData()