const allPhones = () => {
    document.getElementById('single-phone-detail').innerHTML = "";
    document.getElementById('spiner').style.display = 'block';
    const searchValue = document.getElementById('search-box').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    //console.log(url);
    fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
        if(data.data == null){
            document.getElementById('spiner').style.display = 'block'; 
        }else{
            showPhone(data.data.slice(0,20))
            document.getElementById('spiner').style.display = 'none';
        }
    });

    
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
       .then(data => displayPhoneDetail(data.data));

   }
  
   const displayPhoneDetail = (mainFeatures) =>{
    console.log(mainFeatures);
    const phoneDetail = document.getElementById('single-phone-detail');
    const div = document.createElement('div')
    div.classList.add('card');
    div.innerHTML = `
    <div class="card mb-3 phone-details w-100 m-auto">
        <div class="row g-0">
            <div class="col-md-5">
                   <img src="${mainFeatures.image}" class="card-img-top p-2 w-50" alt="No Phone Found">
            </div>
            <div class="col-md-7">
                   <p class="card-title"><span class="detail-head">Name: </span> ${mainFeatures.name}</p>
                   <p class="card-text"><span class="detail-head">Display:</span> ${mainFeatures.mainFeatures.displaySize}</p>
                    <p class="card-title"><span class="detail-head">Storage: </span> ${mainFeatures.mainFeatures.storage}</p>
                    <p class="card-text"><span class="detail-head">Sensors: </span> ${mainFeatures.mainFeatures.sensors}</p>
                  <p class="card-text"><span class="detail-head">ReleaseDate: </span> ${mainFeatures.releaseDate}</p>
                  <p class="card-text"><span class="detail-head">Others(WLAN): </span> ${mainFeatures.others.WLAN}</p>
                  
            </div>
        </div>
    </div>
   

    `;
    phoneDetail.appendChild(div);
   }





