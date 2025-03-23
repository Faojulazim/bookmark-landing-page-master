const tabs = document.querySelectorAll("[data-tabs]");
const tabClicker = document.querySelectorAll("[data-tabClicker]");
const dropdown = document.querySelectorAll("[data-dropdown]");
const hiddenDiv = document.querySelector("#hiddenDiv");
const hamburgerIcon = document.querySelector("#hamburger");
const closeIcon = document.querySelector("#close");
const errorPara = document.querySelector("#errorPara");
const submitBtn = document.querySelector("#submitBtn");
const form = document.querySelector("form");
const changeStyles = document.querySelector("#changeStyles");
const input = document.querySelector("input");

hamburgerIcon.addEventListener("click", (e) => {
  hiddenDiv.classList.toggle("top-[-200%]");
});
closeIcon.addEventListener("click", (e) => {
  hiddenDiv.classList.toggle("top-[-200%]");
});

dropdown.forEach((items) => {
  items.addEventListener("click", (e) => {
    items.parentElement.querySelector("[data-para]").classList.toggle("hidden");
    items.parentElement
      .querySelector("[data-fill]")
      .classList.toggle("stroke-[hsl(0_94%_66%)]");
    items.parentElement
      .querySelector("[data-arrow]")
      .classList.toggle("rotate-[180deg]");
    dropdown.forEach((diffItem) => {
      if (items !== diffItem) {
        diffItem.parentElement
          .querySelector("[data-para]")
          .classList.add("hidden");
        diffItem.parentElement
          .querySelector("[data-fill]")
          .classList.remove("stroke-[hsl(0_94%_66%)]");
        diffItem.parentElement
          .querySelector("[data-arrow]")
          .classList.remove("rotate-[180deg]");
      }
    });
  });
});

(function getItems() {
  tabClicker.forEach((items) => {
    items.addEventListener("click", (e) => {
      receiveItemsID(items.id);
      items.querySelector("[data-select]").classList.remove("after:bg-none");
      items.querySelector("[data-select]").classList.add("after:bg-softRed");
      tabClicker.forEach((items2) => {
        if (items !== items2) {
          items2.querySelector("[data-select]").classList.add("after:bg-none");
          items2
            .querySelector("[data-select]")
            .classList.remove("after:bg-softRed");
        }
      });
    });
  });
})();

function receiveItemsID(itemsID) {
  tabs.forEach((elems) => {
    if (itemsID === elems.id) {
      elems.classList.remove("hidden");
      elems.classList.remove("lg:hidden");
    } else {
      elems.classList.add("hidden");
      elems.classList.add("lg:hidden");
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.value)) {
      errorPara.classList.remove("hidden");
      errorPara.innerText = "Email Sent!";
      changeStyles.classList.add("p-[3px]", "bg-green-500");
      changeStyles.classList.remove("bg-softRed");
      input.value = "";
      setTimeout(() => {
        errorPara.classList.add("hidden");
        changeStyles.classList.remove("bg-softRed", "bg-green-500", "p-[3px]");
        errorPara.innerText = "Whoops, make sure it's an email";
      }, 2500);
    }
  } else {
    errorPara.innerText = "Whoops, make sure it's an email";
    errorPara.classList.remove("hidden");
    changeStyles.classList.add("p-[3px]", "bg-softRed");
  }
});
