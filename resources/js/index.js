
let createcarouselblock = (n) =>
{
   return  `<div id="carouselExampleControls${n}" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner" id=carouselinner${n}>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls${n}" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls${n}" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
        </div>`;
};
 

let populate = async()=>
{
    for(let i=0;i<magazines.length;i++)
    {
          let response =  await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${magazines[i]}`);
          let data =  await response.json();
        let accordiancontainer =  document.getElementById("accordionExample");
          
        //create accordion for each loop
        let accordion = 
      
        `<div class="accordion-item" id="accordian${i+1}">
          <h2 class="accordion-header" id="heading">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i+1}" aria-expanded="true" aria-controls="collapse${i+1}" id="button${i+1}">
              ${data.feed.title}
            </button>
          </h2>
          <div id="collapse${i+1}" class="accordion-collapse collapse" aria-labelledby="heading" data-bs-parent="#accordionExample">
            <div class="accordion-body" id="accordianbody${i+1}">
             
            </div>
          </div>
        </div>`;

        

        accordiancontainer.innerHTML +=  accordion;
    //added accordion
        if(i===0)
        {
          document.getElementById("collapse1").classList="accordion-collapse collapse show"
        }

      //now add carousel inside accordion
      let accordionbody = document.getElementById(`accordianbody${i+1}`);
       accordionbody.innerHTML = createcarouselblock(i+1);
       let carouselinner = document.getElementById(`carouselinner${i+1}`);
       data.items.forEach((news, index)=> {
           
           if(index===0)
           {
               carouselinner.innerHTML += 
               ` 
               <a href="${news.link}" target="_blank">
               <div class="carousel-item active">
              
                 <div class="card" >
                 <img src="${news.enclosure.link}" >
                <div class="card-body">
                  <h5 class="card-title">${news.title}</h5>
                  <h6 class="card-title">-${news.author}</h6>
                  <h6 class="card-title">${news.pubDate}</h6>
                  <p class="card-text">${news.description}</p>
                
                </div>
              </div>
            
              </div>
              </a>
              `;
              
           }
           else
           {
            carouselinner.innerHTML += 
            `<a href="${news.link}" target="_blank">
            <div class="carousel-item">
            
              <div class="card" >
              <img src="${news.enclosure.link}" >
             <div class="card-body">
               <h5 class="card-title">${news.title}</h5>
               <h6 class="card-title">-${news.author}</h6>
               <h6 class="card-title">${news.pubDate}</h6>
               <p class="card-text">${news.description}</p>
             
             </div>
           </div>
          
           </div>
           </a>
           `;
           
           }

       });




    



    }


}
 
populate();


//     <div class="accordion-item">
//     <h2 class="accordion-header" id="headingOne">
//       <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//         ${topic.feed.title}
//       </button>
//     </h2>
//     <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//       <div class="accordion-body">

//           <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
//                   <div class="carousel-inner">
//                     <div class="carousel-item active">
//                           <div class="card" >
//                                   <!-- img -->
//                                    <div class="card-body">
//                                      <h5 class="card-title">Card1 title</h5>
//                                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   
//                                    </div>
//                                  </div>
//                     </div>
                   
               
//                   </div>
//                   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span class="visually-hidden">Previous</span>
//                   </button>
//                   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span class="visually-hidden">Next</span>
//                   </button>
//                 </div>


          
//       </div>
//     </div>
//   </div>






    
 