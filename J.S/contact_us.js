
function contact_usElements(){
    localStorage.setItem('page', 'contact_us');
    document.querySelector("#div_container").innerHTML=`
    <div id="div_contact">
    <div>
    <form id="form_id" action="https://formsubmit.co/shimonb055@icloud.com" method="POST">
    <h1 id ="h1_form"> contact us</h1>
    <label for="first_name" >enter full name</label>
    <input id="first_name" type="text" name="first_name" maxlength="15">
    <label for="email" >enter email</label>
    <input id="email" type="email" name="email" >       
    <label for="phone" >enter phone number</label>
    <input id="phone" type="tel" name="phone" maxlength="10">

    <label for="message" >message</label>
    <input id="message" type="text" name="message" maxlength="50">
   
    <br>
   <button id="btn_form" class="btn  btn-primary"; type="submit">submit</button>
</form>
</div>
<div>
<img id="img_form" src="../IMG/contact.jpg"/>
</div>
</div>`

}

// function clickSubmit() {
//     if (check_First_Last_Name() && checkUserAgeover18() && checkUserEmail() && checkPhoneNumber ()) {
//       alert("true");
  
//       return true;
//     }
//     alert("false");
//     return false;
//   }
  
//   function check_First_Name() {
//     var nameRegex = /^[A-Za-z]*$/;
//     if (nameRegex.test(first_name.value)) {
//       return true;
//     }
//     return false;
//   }
  
//    function checkUserEmail(){
//        var emailRegex = /^\S+@\S+\.\S+$/
//        if (emailRegex.test(email.value)){
//            return true
//        }
//       return false
//    }
//    function checkPhoneNumber (){
//        var tenR
//       if(phone.value[0]== 0 && phone.value[1]== 5 && phone.value[2]== 0){
//           return true
//       }
//       return false
//    }

