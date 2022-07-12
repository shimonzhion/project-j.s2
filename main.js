function some(value) {
  switch (value) {
    case "home":
      homeElements();
      break;
    case "card":
      cardElements();
      break;

    case "user":
      userElements();
      break;

    case "about":
      abutElements();
      break;

    case "contact_us":
      contact_usElements();
      break;

    default: {
      homeElements();
    }
  }
}

console.log(localStorage.getItem("page"));
window.addEventListener("load", () => {
  some(localStorage.getItem("page"))
})



