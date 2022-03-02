const allPhones = () => {
    const searchValue = document.getElementById('search-box').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    //console.log(url);
    fetch(url)
    .then((Response) => Response.json())
    .then((data) => showPhone(data.data.slice(0,20)));
}
const showPhone = data => {
     console.log(data);
     const searchResult = document.getElementById('search-result');
     data.forEach(data => {
         //console.log(data);
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
             <button class="bg-success" id="details-btn" onclick="details('${data.slug}')">Details</button></div>
        </div>`; 
        searchResult.appendChild(div);
     })
    
     
    }
      
   const details = (info) =>{
       console.log(info);
       const url = `https://openapi.programming-hero.com/api/phone/${info}`;
       fetch(url)
       .then(res => res.json())
       .then(data => displayPhoneDetail(data.data.mainFeatures));

   }
   const displayPhoneDetail = (mainFeatures) =>{
    console.log(mainFeatures);
    const phoneDetail = document.getElementById('single-phone-detail');
    const div = document.createElement('div')
    div.classList.add('card');
    div.innerHTML = `
    
    <p class="card-title"><span class="detail-head">Storage:</span>${mainFeatures.storage}</p>
   <p class="card-text"><span class="detail-head">Display:</span> ${mainFeatures.displaySize}</p>
   <p class="card-text"><span class="detail-head">ChipSet:</span> ${mainFeatures.chipSet}</p>
   <p class="card-text"><span class="detail-head">Sensors:</span> ${mainFeatures.sensors}</p>
   <p class="card-text"><span class="detail-head">Display:</span> ${mainFeatures.displaySize}</p>

    `;
    phoneDetail.appendChild(div);
   }





