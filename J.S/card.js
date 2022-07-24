let counter = 0;
function returnSrc() {
  let array = [
    "phone6.jpg",
    "phone15.jpg",
    "phone7.jpg",
    "phone13.webp",
    "phone10.jpg",
    "phone4.webp",
    "phone3.webp",
    "phone11.webp",
    "phone9.webp",
    "phone5.jpg",
    "phone1.webp",
    "phone8.jpg",
    "phone2.webp",
    "phone12.webp",
    "phone14.jpg",
  ];
  let pic = array[counter];
  counter++;
  return pic;
}

let BASIC_API =
  "https://my-json-server.typicode.com/Jeck99/fake-server/devices/";

async function somefunc() {
  await fetch(`${BASIC_API}`)
    .then((response) => response.json())
    .then((data) => {
      for (let key of data) {
        document.querySelector(
          "#div_container"
        ).innerHTML +=  `<div id="${key.id}";  class="card ";>
        <img class="img_phone" style="width:100% ;height:80% ;border-radius: 20%;"src="../img/${returnSrc()}" alt="">
          <h1> ${key.brand}</h1>
          <h5>color: ${key.color}</h5>
          <h5>price: ${key.price}$</h5>
          <h5>id: ${key.id}</h5>
          <button class="btn_card btn btn-primary"; onclick="deleteDevice(${key.id})";>DELETE</button>
        </div>
      </div>
      </div>`;
      }
      counter = 0;
    });
}



async function deleteDevice(id) {
  
    let result = await fetch(BASIC_API + id, { method: "DELETE" });
    if (result.status <= 299) document.getElementById(id).remove();
    console.log(id);
  }



function cardElements(){
  localStorage.setItem('page', 'card');
    document.querySelector('#div_container').innerHTML=` <div id="div_carousel1" >     <!-- Carousel wrapper -->
    <div id="carouselBasicExample" class="carousel slide carousel-fade" data-mdb-ride="carousel">
      <!-- Indicators -->
      <div class="carousel-indicators">
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
    
      <!-- Inner -->
      <div class="carousel-inner">
        <!-- Single item -->
        <div class="carousel-item w-80 active ">
          <img src="../img/1316.webp"  class="d-block w-100" />
          <div class="carousel-caption d-none d-md-block ">
            <img src="../img/logo4-removebg-preview.png" style="width: 40px;" alt="">
          </div>
        </div>
        
    
        <!-- Single item -->
        <div class="carousel-item">
          <img src="../img/333.webp"  class="d-block w-100" />
          <div class="carousel-caption d-none d-md-block">
            <img src="../img/logo4-removebg-preview.png" style="width: 40px;" alt="">
          </div>
        </div>


  
        <div class="carousel-item">
          <img src="../img/111.webp"  class="d-block w-100" />
          <div class="carousel-caption d-none d-md-block">
            <img src="../img/logo4-removebg-preview.png" style="width: 40px;" alt="">
          </div>
        </div>
      </div>
 
      <button class="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
       </div>
<div class="div_container bg-dark ">
  <img id="img_Advertising" src="../img/1317.jpg" style="width:100%;" alt="">
</div>`
    somefunc();
}
