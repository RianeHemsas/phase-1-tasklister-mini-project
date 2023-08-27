

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const newDiv = document.getElementById("list");
  const firstInput=document.getElementById("new-task-description");

  const br = document.createElement("br");
  const submitButton=document.querySelector('input[type=submit]');


form.style.position="relative";

form.style.marginBottom="25px";

  submitButton.style.position="absolute";
  submitButton.style.top="65px";
  submitButton.style.left="80px";



  

  const secondeLabel=document.createElement('label');
  secondeLabel.textContent="Date Due:";
  secondeLabel.style.marginLeft="48px";
  secondeLabel.style.marginRight="5px";




  firstInput.style.marginBottom="15px";

  newDiv.style.width="170px";
  const heading =document.getElementsByTagName('h2')[0];
  heading.style.marginLeft="25px";

  const secondeInput=document.createElement('input');
  secondeInput.type="date";


  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
 
    let input = document.getElementById("new-task-description");
  
  const span =document.createElement('span');
  const secondeSpan=document.createElement('span');

  // secondeInput.placeholder="Date Due";

  if(input.value!=="" && secondeInput.value!=="" )
  {

    let li = document.createElement('li');
    const ul = document.getElementById("tasks");
    
    span.textContent= `${input.value} ` 

  secondeSpan.textContent= `${secondeInput.value} `
span.style.fontSize="12px";
span.style.lineHeight="2";
span.style.transition="0.5s ease"

secondeSpan.style.fontSize="12px";
secondeSpan.style.lineHeight="2";



    span.style.width="70px";
    secondeSpan.style.width="70px";

    
    

    ul.style.listStyleType="none";
  ul.style.display="flex";
  ul.style.flexDirection="column";

  ul.style.padding="15px";


  ul.style.alignItems="center"
    li.style.display="flex";
    li.style.width="190px";
    li.style.justifyContent="space-between";
// span.contentEditable="false";
 
    li.style.marginBottom="20px";
    li.style.borderBottom=" 1px solid gray";
    li.style.paddingBottom=" 5px ";



    let button = document.createElement('button');
    button.textContent = " X ";
    button.style.padding="8px";
    let editbutton = document.createElement('button');
    editbutton.textContent = " -";
    editbutton.style.padding="8px";
    button.style.backgroundColor="red";
    editbutton.style.backgroundColor="blue";

    button.style.color="white";
    editbutton.style.color="white";

    editbutton.style.border="none";
    button.style.border="none";

    editbutton.style.borderRadius="5px";
    button.style.borderRadius="5px";





   
    button.addEventListener('click', () => {
     

      li.remove();

    })
    editbutton.addEventListener('click',(e)=>{

span.style.outline="1px solid #ffaabd";
span.style.border="none";

span.style.cursor="pointer";
 span.contentEditable=true;
 secondeSpan.contentEditable=true;

 secondeSpan.style.outline="1px solid #ffaabd";
 secondeSpan.style.border="none";


span.addEventListener('keypress',(event)=>{
  if(event.key === "Enter"){
  
  // input.value=span.textContent;
span.style.outline="none";

 span.contentEditable=false;
}})


secondeSpan.addEventListener('keypress',(event)=>{
  if(event.key === "Enter"){


    // secondeInput.value=secondeSpan.textContent;
    secondeSpan.style.outline="none";
    
     secondeSpan.contentEditable=false;
  }


})

  })


  
  input.value = '';
  secondeInput.value = '';


    ul.appendChild(li);
li.appendChild(span);
li.appendChild(secondeSpan);

    li.appendChild(button);
    li.appendChild(editbutton);


  }else{
  alert ('Please fill out both cases !');

}



  })

  form.appendChild(br);

  form.appendChild(secondeLabel);
form.appendChild(secondeInput);
});
