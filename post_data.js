let name = document.querySelector('#name');
let email = document.querySelector('#email');
let number = document.querySelector('#number');
let myform = document.querySelector('#myform');
let lists = document.querySelector('#items');
myform.addEventListener('submit', onsubmit);
function onsubmit(e) {
  e.preventDefault();
  const myyobj = {
    NAME: name.value,
    EMAIL: email.value,
    NUMBER: number.value
  }
  axios.post('https://crudcrud.com/api/897144fcede2493cb2f108a425945f9c/AppoinmentBooking', myyobj)
    .then((response) => {


      const value = response.data;

      showvalue(value); // Display the value on the webpage

      //showvalue(responce.data)
      //console.log(responce.data)

    })
    .catch(err => {
      console.log(err)
    })
}
function showvalue(storedData) {

  const li = document.createElement('li');
  const liText = document.createTextNode(`Name : ${storedData.NAME} Email : ${storedData.EMAIL} Phone : ${storedData.NUMBER}`);
  li.appendChild(liText);
  //delete button created
  const dltbtn = document.createElement('button');
  dltbtn.appendChild(document.createTextNode("Delete"));
  li.appendChild(dltbtn);

  dltbtn.onclick = () => {

    //console.log(storedData._id)
    deleteUser(storedData._id);
    lists.removeChild(li);


  }

  //edit button created
  // const editbtn = document.createElement('button');
  // editbtn.appendChild(document.createTextNode("Edit"));
  // li.appendChild(editbtn);

   lists.appendChild(li);

}
//this is a one type of method to call the value from the server
// async function fetchServerValue() {
//     try {
//       const response = await fetch('https://crudcrud.com/api/b37a979549474bdf9fe7dae2771a7566/AppoinmentBooking');
//      const data = await response.json(); // Assuming the response format is JSON
//       data.forEach((e)=>{
//         showvalue(e)
//      })
//     } catch (error) {
//       console.error('Error fetching server value:', error);
//     }
//   }
// fetchServerValue();



//the below code also fetching the data from server and display data
window.addEventListener("DOMContentLoaded", () => {
  axios.get('https://crudcrud.com/api/897144fcede2493cb2f108a425945f9c/AppoinmentBooking')
    .then(res => {
      const data = res.data;
      data.forEach((e) => {
        showvalue(e);

      })
    })
    .catch(err => {
      console.log(err)
    })

})

function deleteUser(ID) {
  axios.delete(`https://crudcrud.com/api/897144fcede2493cb2f108a425945f9c/AppoinmentBooking/${ID}`)
    .then(res => {
      alert('Delete Success')

    })
    .catch(err => console.log(err))
}