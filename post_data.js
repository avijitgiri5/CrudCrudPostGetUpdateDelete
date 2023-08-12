let name=document.querySelector('#name');
let email=document.querySelector('#email');
let number=document.querySelector('#number');
let myform=document.querySelector('#myform');
let lists=document.querySelector('#items');
myform.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
    const myyobj={
        NAME : name.value,
        EMAIL : email.value,
        NUMBER : number.value
    }
    axios.post('https://crudcrud.com/api/b37a979549474bdf9fe7dae2771a7566/AppoinmentBooking', myyobj)
        .then((response)=>{
           
                  
                  const value = response.data; 
                  
                showvalue(value); // Display the value on the webpage
                
            //showvalue(responce.data)
            //console.log(responce.data)

        })
        .catch(err=>{
            console.log(err)
        })
}
function showvalue(storedData){
   
   const li= document.createElement('li');
   const liText=document.createTextNode(`Name : ${storedData.NAME} Email : ${storedData.EMAIL} Phone : ${storedData.NUMBER}`);
   li.appendChild(liText);
   lists.appendChild(li);

}

async function fetchServerValue() {
    try {
      const response = await fetch('https://crudcrud.com/api/b37a979549474bdf9fe7dae2771a7566/AppoinmentBooking');
     const data = await response.json(); // Assuming the response format is JSON
      data.forEach((e)=>{
        showvalue(e)
     })
    } catch (error) {
      console.error('Error fetching server value:', error);
    }
  }
fetchServerValue();