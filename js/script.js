let api = "https://forkify-api.herokuapp.com/api/search?q=pizza";
let select = document.querySelector("select");
let content = document.querySelector(".content");
async function getData(){
   let response = await fetch(api);
   let data =   await response.json();
   // console.log(data.recipes);
   showData( data.recipes);
}

async function getDetails(){
   let id = select.value;
   console.log(id);
   let response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
   let data =   await response.json();
   showDetails(data.recipe,data.recipe.ingredients);
}

function showDetails(data,details){
    let htmlContent ="";
    let ul = "";
    htmlContent+=`
                
                   <h2>${data.publisher}</h2>
                   <img class="mt-4" src=${data.image_url} width=100% height="600px"/>
                 `;
    details.forEach((det)=>{
      //  console.log(det);
         ul+=`
            <li class="list-group-item">${det}</li>
          `;      
    });             
          
    content.innerHTML = htmlContent +  `<ul class="mt-5">${ul}</ul>`;
}

function showData(data){
   let htmlContent = "";

   data.map((d)=>{
   //   console.log(d);
     htmlContent +=`
                     <option value=${d.recipe_id}>${d.title}</option>
                   `
   });
   // console.log(htmlContent);
   select.innerHTML  = htmlContent;
}


select.addEventListener("change",getDetails);
getData();