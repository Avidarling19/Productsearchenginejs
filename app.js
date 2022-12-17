const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUppercase() 
     const storeitems = document.getElementById("product-list")
     const product = document.querySelectorAll(".product") 
     const pname = storeitems.getElementByTagName("h2") 
   
     for( var i=0;i< pname.length;i++)
     {
         let match= product[i].getElementByTagName('h2')[0];
 
         if (match)
         {
             let textvalue = match.textContent || match.innerHTML;
 
             if(textvalue.toUppercase().indexOf(searchbox) > -1)
             {
                 product[i].style.display="";
             }
             else {
                 product[i].style.display="none";
             }
         }
     }
 }
 