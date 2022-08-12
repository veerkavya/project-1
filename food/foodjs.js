
const btn1=document.getElementsByClassName("btn")[0];




btn1.addEventListener("click",function(){
    
    const input=document.getElementsByTagName("input")[0];
    const value=input.value;
    let url=`https://www.themealdb.com/api/json/v1/1/filter.php?i=${value}`;
    fetch(url).then((response)=>{
        return(response.json())
    }
    ).then((data)=>{
        const cards=(data.meals);
        const container=document.getElementsByClassName("card-container")[0];
        const div=document.getElementsByClassName("card");
        
        for(let i=0;i<div.length;i++){
            div[i].remove();
        }
        let id={};
        cards.forEach(function(m,i){
            const img=m.strMealThumb;
            const html=`<div class="card">
            <div class="img">
            <img class="i1" src=${img} alt="img">
           </div>
           <h3>${m.strMeal}</h3>
           <button class="a1">Get Recipe</button>
           </div>`
            container.insertAdjacentHTML("beforeend",html);
            id[m.strMeal]=i;
        })
        

        const btn=document.querySelectorAll(".a1");
        const re=document.getElementById("recipe");
        
       

        
      
      for(var i=0;i<btn.length;i++){
        btn[i].addEventListener("click",function(){
        const pe=this.previousElementSibling;
        const ide=id[(pe).textContent];
        const k=data.meals[ide].idMeal;
        re.classList.remove("opc");
        re.classList.add("opa");
        const url2=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${k}`;
        fetch(url2).then((response)=>{return(response.json())}).then((data)=>{
            console.log(data);
            re.innerHTML=`<button type="submit" class="btn2"><i class="fa-solid fa-xmark i9" ></i></button>
            <h2>${pe.textContent}</h2>
           <h4>${data.meals[0].strCategory}</h4>
           <h2 class="h2">Instructions</h4>
           <div class="r">
               <p>${data.meals[0].strInstructions}</p>
           </div>
           <div class="ia">
               <img class="i2" src=${data.meals[0].strMealThumb}>
               <a class="a2" href=${data.meals[0].strYoutube} target="_blank">Get Vedio</a>
           </div>`
           const btn2=document.getElementsByClassName("btn2")[0];
           btn2.addEventListener("click",function(){
            re.classList.remove("opa");
            re.classList.add("opc");
           })
     
        })



       });
       }

       
     
        
    })
})


 