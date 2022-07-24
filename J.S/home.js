
function homeElements(){
  localStorage.setItem('page', 'home');
    document.querySelector("#div_container").innerHTML= `<div id ="home"><div id ="div_home"><h1 id="title_home">SMB</h1>
   
    <img id="img_logo1" src="IMG/logo4-removebg-preview.png"/></div>
    </div>
    <img id="home_photos" src="IMG/pppp.jpg" style="width:500px; "/>
    `
}