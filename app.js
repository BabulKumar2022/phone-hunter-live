const allPhones = () => {
    const searchValue = document.getElementById('search-box').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    //console.log(url);
    fetch(url)
    .then((Response) => Response.json())
    .then((data) => showPhone(data.data));
}
const showPhone = data => {
     //console.log(data);
     const searchResult = document.getElementById('search-result');
     data.forEach(data => {
         console.log(data);
         const div = document.createElement('div')
         div.classList.add('col');
         div.innerHTML = `<div  class="card h-100">
         <img src="${data.image}" class="card-img-top w-50" alt="No Phone Found">
         <div class="card-body">
             <h4 class="card-title">Name: ${data.phone_name} </h4>
             <h4>Brand: ${data.brand}</h4>
             <p class="card-text">ID: ${data.slug}</p>  
         </div>
         <div class="card-footer">
             <button id="details-btn">Details</button></div>
     </div>`; 
        searchResult.appendChild(div);
     })
    
     
    }
      
   





