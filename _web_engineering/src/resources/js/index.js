
const div=document.querySelector('.p1');
document.querySelector("ul").addEventListener('click',function onclick(e)
{
    
        document.querySelector('.p1').innerHTML='';
    
    if(e.target.innerText==='All'){ 

        
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
        h3.innerHTML='Mobile App';
        const p=document.createElement('p');
        p.innerHTML='our Mobile App project';

        innerdiv.appendChild(h3);
        innerdiv.appendChild(p);

        const outerdiv=document.createElement('div');
        const image1=document.createElement('img');
        image1.src="../resources/images/perfect.jpg";
        outerdiv.className='hover';
        outerdiv.appendChild(image1);
        outerdiv.appendChild(innerdiv);

       div.appendChild(outerdiv);
       
       
       const innerdiv1=document.createElement('div');
       innerdiv1.className='hover-text';
       const h31=document.createElement('h3');
       h31.innerHTML='Web Designing';
       const p1=document.createElement('p');
       p1.innerHTML='our Web Designing project';

       innerdiv1.appendChild(h31);
       innerdiv1.appendChild(p1);

       const outerdiv1=document.createElement('div');
       const image2=document.createElement('img');
       image2.src="../resources/images/progress.jpg";
       outerdiv1.className='hover';
       outerdiv1.appendChild(image2);
       outerdiv1.appendChild(innerdiv1);


       div.appendChild(outerdiv);
      
       div.appendChild(outerdiv1); 
    
    } 
    if(e.target.innerText==='Web Design'){  
        
        const innerdiv1=document.createElement('div');
        innerdiv1.className='hover-text';
        const h31=document.createElement('h3');
        h31.innerHTML='Web Designing';
        const p1=document.createElement('p');
        p1.innerHTML='our Web Designing project';
 
        innerdiv1.appendChild(h31);
        innerdiv1.appendChild(p1);
 
        const outerdiv1=document.createElement('div');
        const image2=document.createElement('img');
        image2.src="../resources/images/progress.jpg";
        outerdiv1.className='hover';
        outerdiv1.appendChild(image2);
        outerdiv1.appendChild(innerdiv1);
 
       
        div.appendChild(outerdiv1); 
        
    } 
    if(e.target.innerText==='Mobile App'){  
  
        const innerdiv=document.createElement('div');
        innerdiv.className='hover-text';
        const h3=document.createElement('h3');
        h3.innerHTML='Mobile App';
        const p=document.createElement('p');
        p.innerHTML='our Mobile App project';

        innerdiv.appendChild(h3);
        innerdiv.appendChild(p);

        const outerdiv=document.createElement('div');
        const image1=document.createElement('img');
        image1.src="../resources/images/perfect.jpg";
        outerdiv.className='hover';
        outerdiv.appendChild(image1);
        outerdiv.appendChild(innerdiv);

       div.appendChild(outerdiv);
    } 


     const element=document.querySelectorAll('ul');
    
    element[0].childNodes.forEach(element =>{
        element.className='';
    
    });


    e.target.className='active';
    console.log(e.target.className);
    

    
});





