const USER_API = "https://my-json-server.typicode.com/Jeck99/fake-server/users";

async function getUserData() {
  try {
    let arrayObj = await fetch(USER_API).then((res) => res.json());
    arrayObj.forEach((element) => {
      document.querySelector(".t_body").innerHTML += `<tr id="${element._id}">
        <td>${element.name["first"]} ${element.name["last"]}</td>
        <td>${element.age}</td>
        <td>${element.email}</td>
        <td>${element._id}</td>
        <td>${element.index}</td>
        <td>${element.phone}</td>
        <td><i class="bi bi-person-circle"></i></td>
        <td> <button  class=" ${element._id} btn_table btn btn-danger"; onclick="deleteUser('${element._id}')">DELETE</button></td>
        </tr>`;
      document.querySelector(".t_body2").innerHTML += `<tr>
                <td>${element.name["first"]} ${element.name["last"]}</td>
                <td>${element.age}</td>
                <td>${element.phone}</td>
             
                 </tr>`;
    });
  } catch (err) {
  } finally {
  }
}
getUserData();

async function deleteUser(id) {
  document.getElementById(id).remove();
}

function userElements() {
  localStorage.setItem("page", "user");
  document.querySelector("#div_container").innerHTML = `<div id="container1">

  <img src = "../IMG/user.png"/ style="padding:10px; width:50vw">
    <table class="user_table table table-dark table-striped text-center">
      <thead id="">
      <th scope="col">full name: </th>
      <th scope="col">age : </th>
      <th scope="col">email : </th>
      <th scope="col">id: </th>
      <th scope="col">index : </th>
      <th scope="col">phone : </th>
      <th scope="col">picture : </th>
      <th scope="col">delete: </th>
    </thead>
    <tbody class="t_body" ></tbody>
    </table>

  </div>
  <div id="container2">
    <table id="table2" class="table table-dark table-striped">
      <thead id="thead_2">
      <th scope="col">full name: </th>
      <th scope="col">age : </th>
      <th scope="col">phone : </th>
    </thead>
    <tbody class="t_body2" >

    </tbody>
    </table>

  </div>`;
  getUserData();
}
