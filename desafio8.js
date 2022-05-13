const thead = document.getElementById("thead")
const tbody = document.getElementById("tbody")
const table = document.getElementById("table")
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) =>{siguiente(json)});
  const siguiente = (valor) => {
    valor.forEach(element => {
      const tr2 = document.createElement("tr");
      tbody.appendChild(tr2)
      const td1 = document.createElement("td");
      td1.innerHTML = element.userId;
      tr2.appendChild(td1)
      const td2 = document.createElement("td");
      td2.innerHTML = element.title;
      tr2.appendChild(td2)
      const td3 = document.createElement("td");
      td3.innerHTML = element.id;
      tr2.appendChild(td3)
      const td4 = document.createElement("td");
      td4.innerHTML = element.body;
      tr2.appendChild(td4)
    });
    
  }
 
  