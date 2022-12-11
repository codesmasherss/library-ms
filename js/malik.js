
const div=document.querySelector('.p1');
console.log(document.querySelector(".books-list"));
document.querySelector(".books-list").addEventListener('click',function onclick(e)
{
    
        document.querySelector('.p1').innerHTML='';
        console.log(e.target.innerText);
    
    if(e.target.innerText==='All' || e.target.innerText==='All\nHistorical\nComputer'){ 

        
        /*<div class="hover">
            <img src="images/recomended.jpg" alt="">
            <div class="hover-text">
                <h3>Mobile App</h3>
                <p>our Mobile App project</p>
            </div>
        </div>*/

        const innerdiv=document.createElement('div');
        innerdiv.className='hover-text';
        const h3=document.createElement('h3');
        h3.innerHTML='Historical Books';
        const p=document.createElement('p');
        p.innerHTML='our Historical books section';

        innerdiv.appendChild(h3);
        innerdiv.appendChild(p);

        const outerdiv=document.createElement('div');
        const image1=document.createElement('img');
        image1.src="images/books-1.jpg";
        image1.className='books-image';
        outerdiv.className='left-img img-div';
        outerdiv.appendChild(image1);
        outerdiv.appendChild(innerdiv);

       div.appendChild(outerdiv);
       
       
       const innerdiv1=document.createElement('div');
       innerdiv1.className='hover-text';
       const h31=document.createElement('h3');
       h31.innerHTML='Computer Books';
       const p1=document.createElement('p');
       p1.innerHTML='our Computer Books section';

       innerdiv1.appendChild(h31);
       innerdiv1.appendChild(p1);

       const outerdiv1=document.createElement('div');
       const image2=document.createElement('img');
       image2.src="images/books-2.jpg";
       image2.className='books-image';
       outerdiv1.className='right-img img-div';
       outerdiv1.appendChild(image2);
       outerdiv1.appendChild(innerdiv1);


      
      
       div.appendChild(outerdiv1); 
    
    } 
    if(e.target.innerText==='Historical'){  

        const innerdiv=document.createElement('div');
        innerdiv.className='hover-text';
        const h3=document.createElement('h3');
        h3.innerHTML='Historical Books';
        const p=document.createElement('p');
        p.innerHTML='our Historical books section';

        innerdiv.appendChild(h3);
        innerdiv.appendChild(p);
        
        const outerdiv=document.createElement('div');
        const image1=document.createElement('img');
        image1.src="images/books-1.jpg";
        image1.className='books-image';
        outerdiv.className='left-img img-div';
        outerdiv.appendChild(image1);
        outerdiv.appendChild(innerdiv);

       div.appendChild(outerdiv);
        
    } 
    if(e.target.innerText==='Computer'){  

        const innerdiv1=document.createElement('div');
       innerdiv1.className='hover-text';
       const h31=document.createElement('h3');
       h31.innerHTML='Computer Books';
       const p1=document.createElement('p');
       p1.innerHTML='our Computer Books section';

       innerdiv1.appendChild(h31);
       innerdiv1.appendChild(p1);
  
        const outerdiv1=document.createElement('div');
        const image2=document.createElement('img');
        image2.src="images/books-2.jpg";
        image2.className='books-image';
        outerdiv1.className='right-img img-div';
        outerdiv1.appendChild(image2);
        outerdiv1.appendChild(innerdiv1);
 
 
       
       
        div.appendChild(outerdiv1); 
    } 


    
    
});





