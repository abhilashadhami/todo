'use strict';
let cont=document.querySelector('div');
let ul=document.querySelector('ul');
let input=document.querySelector('input');
let btn=document.querySelector('button');
btn.addEventListener('click',function(e){
    e.preventDefault();
    if(input.value!==''){
        let html=`<p class="k">${input.value}</p>`;
        ul.insertAdjacentHTML('beforeend',html);
        input.value='';
    }
    let li=document.querySelectorAll('p');
    if(li.length>6){
      btn.disabled=true;
    }
})
ul.addEventListener('click',function(e){
    if(e.target.tagName === 'P'){
        e.target.remove();
    }
    let li = document.querySelectorAll('p');
        if (li.length <= 6) {
            btn.disabled = false;
       
        }
})
