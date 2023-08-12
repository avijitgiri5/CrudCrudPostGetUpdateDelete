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
                  let myobj_serialize=JSON.stringify(value);
                 localStorage.setItem(value.EMAIL,myobj_serialize);
                showvalue(value); // Display the value on the webpage
                
            //showvalue(responce.data)
            //console.log(responce.data)

        })
        .catch(err=>{
            console.log(err)
        })
}
function showvalue(data){
    const storedData = JSON.parse(localStorage.getItem(data.EMAIL));
    //console.log(storedData)
   const li= document.createElement('li');
   const liText=document.createTextNode(`Name : ${storedData.NAME} Email : ${storedData.EMAIL} Phone : ${storedData.NUMBER}`);
   li.appendChild(liText);
   lists.appendChild(li);

}
