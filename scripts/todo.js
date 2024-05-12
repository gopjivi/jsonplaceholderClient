"use Strict"

window.onload=init;

function init()
{
       // Find the addBtn
       const btnget = document.getElementById("btnget");
    
       btnget.onclick = onbtngetClicked; 

   
}

function onbtngetClicked()
{
    let userID=document.getElementById("userID").value;
    let messagediv=document.getElementById("messageArea");
    // Specify the API endpoint for user data
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/'+userID;
  // Make a GET request using the Fetch API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(userData => {
    // Process the retrieved user data
    console.log('User Data:', userData);
   
     // Create HTML elements to display the JSON data
     const nameElement = document.createElement("p");
     nameElement.textContent = "userId: " + userData.userId;

     const ageElement = document.createElement("p");
     ageElement.textContent = "id: " + userData.id;

     const cityElement = document.createElement("p");
     cityElement.textContent = "title: " + userData.title;

     const completeelement = document.createElement("p");
     completeelement.textContent = "completed: " + userData.completed;

     // Append the elements to the "dataDisplay" div
     messagediv.appendChild(nameElement);
     messagediv.appendChild(ageElement);
     messagediv.appendChild(cityElement);
     messagediv.appendChild(completeelement);

  })
  .catch(error => {
    console.error('Error:', error);
  });
}


